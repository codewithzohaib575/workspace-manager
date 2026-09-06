'use client';
import { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { useAppDispatch, useAppSelector } from '@/store';
import { markAsRead, markAllAsRead, deleteNotification, clearAllNotifications } from '@/store/slices/notificationSlice';
import { openTaskDetail } from '@/store/slices/uiSlice';
import { Bell, CheckCheck, Trash2, Calendar, MessageSquare, AlertCircle, Check } from 'lucide-react';
import type { Notification } from '@/types';

export default function NotificationsPage() {
  const dispatch = useAppDispatch();
  const notifications = useAppSelector(s => s.notifications.items);
  const unreadCount = useAppSelector(s => s.notifications.unreadCount);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const filtered = notifications.filter(n => filter === 'all' || !n.read);

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'assignment': return <AlertCircle size={15} className="text-blue-500" />;
      case 'comment': return <MessageSquare size={15} className="text-purple-500" />;
      case 'due_date': return <Calendar size={15} className="text-amber-500" />;
      case 'status_change': return <Check size={15} className="text-green-500" />;
      default: return <Bell size={15} className="text-gold" />;
    }
  };

  const handleNotificationClick = (n: Notification) => {
    dispatch(markAsRead(n.id));
    if (n.relatedTaskId) {
      dispatch(openTaskDetail(n.relatedTaskId));
    }
  };

  return (
    <AppShell>
      <div className="p-6 max-w-4xl mx-auto space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gold/10 text-gold">
              <Bell size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Notifications
              </h1>
              <p className="text-xs text-muted">
                You have {unreadCount} unread notification{unreadCount === 1 ? '' : 's'}.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex border rounded-lg overflow-hidden text-xs" style={{ borderColor: 'var(--border)' }}>
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 font-medium transition-colors ${
                  filter === 'all' ? 'bg-gold/15 text-gold font-bold' : 'text-muted hover:text-primary'
                }`}
              >
                All ({notifications.length})
              </button>
              <button
                onClick={() => setFilter('unread')}
                className={`px-3 py-1.5 font-medium transition-colors ${
                  filter === 'unread' ? 'bg-gold/15 text-gold font-bold' : 'text-muted hover:text-primary'
                }`}
              >
                Unread ({unreadCount})
              </button>
            </div>

            {unreadCount > 0 && (
              <button
                onClick={() => dispatch(markAllAsRead())}
                className="btn btn-secondary btn-xs flex items-center gap-1"
              >
                <CheckCheck size={13} /> Mark all read
              </button>
            )}

            {notifications.length > 0 && (
              <button
                onClick={() => dispatch(clearAllNotifications())}
                className="btn btn-secondary btn-xs text-red-500 hover:bg-red-500/10"
                title="Clear all notifications"
              >
                <Trash2 size={13} />
              </button>
            )}
          </div>
        </div>

        {/* Notifications List */}
        <div className="rounded-xl border divide-y overflow-hidden shadow-sm" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          {filtered.map(n => (
            <div
              key={n.id}
              onClick={() => handleNotificationClick(n)}
              className={`p-4 flex items-start justify-between gap-3 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors ${
                !n.read ? 'bg-gold/[0.04]' : ''
              }`}
            >
              <div className="flex items-start gap-3 min-w-0">
                <div className="p-2 rounded-lg bg-black/5 dark:bg-white/5 mt-0.5">
                  {getIcon(n.type)}
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h4 className={`text-xs ${!n.read ? 'font-bold text-primary' : 'font-medium text-muted'}`}>
                      {n.title}
                    </h4>
                    {!n.read && (
                      <span className="w-2 h-2 rounded-full bg-gold" />
                    )}
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    {n.body}
                  </p>
                  <span className="text-[10px] text-muted block">
                    {new Date(n.createdAt).toLocaleString()}
                  </span>
                </div>
              </div>

              <button
                onClick={e => {
                  e.stopPropagation();
                  dispatch(deleteNotification(n.id));
                }}
                className="p-1 hover:text-red-500 text-muted transition-colors"
                title="Remove notification"
              >
                <Trash2 size={13} />
              </button>
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="p-12 text-center text-muted">
              <Bell size={28} className="mx-auto mb-2 opacity-40" />
              <p className="text-sm font-semibold mb-1">No notifications</p>
              <p className="text-xs">You are all caught up!</p>
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
}
