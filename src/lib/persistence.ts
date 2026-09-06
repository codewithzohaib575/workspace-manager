import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface WorkspaceManagerDB extends DBSchema {
  attachments: {
    key: string;
    value: {
      id: string;
      taskId: string;
      name: string;
      size: number;
      type: string;
      blob: Blob;
      uploadedAt: string;
      uploadedBy: string;
    };
    indexes: { 'by-task': string };
  };
  appState: {
    key: string;
    value: unknown;
  };
}

let db: IDBPDatabase<WorkspaceManagerDB> | null = null;

export async function getDB(): Promise<IDBPDatabase<WorkspaceManagerDB>> {
  if (db) return db;
  db = await openDB<WorkspaceManagerDB>('workspace-manager', 1, {
    upgrade(database) {
      if (!database.objectStoreNames.contains('attachments')) {
        const store = database.createObjectStore('attachments', { keyPath: 'id' });
        store.createIndex('by-task', 'taskId');
      }
      if (!database.objectStoreNames.contains('appState')) {
        database.createObjectStore('appState');
      }
    },
  });
  return db;
}

export async function saveAttachment(attachment: {
  id: string;
  taskId: string;
  name: string;
  size: number;
  type: string;
  blob: Blob;
  uploadedAt: string;
  uploadedBy: string;
}): Promise<void> {
  try {
    const database = await getDB();
    await database.put('attachments', attachment);
  } catch (e) {
    console.error('Failed to save attachment to IndexedDB:', e);
  }
}

export async function getAttachment(id: string): Promise<Blob | null> {
  try {
    const database = await getDB();
    const record = await database.get('attachments', id);
    return record?.blob ?? null;
  } catch (e) {
    console.error('Failed to get attachment from IndexedDB:', e);
    return null;
  }
}

export async function deleteAttachment(id: string): Promise<void> {
  try {
    const database = await getDB();
    await database.delete('attachments', id);
  } catch (e) {
    console.error('Failed to delete attachment from IndexedDB:', e);
  }
}

export async function getTaskAttachments(taskId: string): Promise<Array<{ id: string; name: string; size: number; type: string; blob: Blob }>> {
  try {
    const database = await getDB();
    return await database.getAllFromIndex('attachments', 'by-task', taskId);
  } catch (e) {
    console.error('Failed to get task attachments from IndexedDB:', e);
    return [];
  }
}

// ─── localStorage persistence ─────────────────────────────────────────────────
const STORAGE_KEY = 'workspace-manager-state';

export function saveStateToLocalStorage(state: unknown): void {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch (e) {
    console.error('Failed to save state to localStorage:', e);
  }
}

export function loadStateFromLocalStorage(): unknown | undefined {
  try {
    const serialized = localStorage.getItem(STORAGE_KEY);
    if (!serialized) return undefined;
    return JSON.parse(serialized);
  } catch (e) {
    console.error('Failed to load state from localStorage:', e);
    return undefined;
  }
}

export function clearStateFromLocalStorage(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Failed to clear state from localStorage:', e);
  }
}
