'use client';
import { useState, useMemo } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { useAppDispatch, useAppSelector } from '@/store';
import { openTaskDetail, openModal } from '@/store/slices/uiSlice';
import { ChevronLeft, ChevronRight, Plus, Calendar as CalendarIcon } from 'lucide-react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';

export default function CalendarPage() {
  const dispatch = useAppDispatch();
  const currentWorkspaceId = useAppSelector(s => s.workspaces.currentWorkspaceId);
  const rawTasks = useAppSelector(s => s.tasks.items);
  const tasks = useMemo(() => rawTasks.filter(t => t.workspaceId === currentWorkspaceId && !t.isArchived), [rawTasks, currentWorkspaceId]);

  const [currentDate, setCurrentDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const getTasksForDay = (day: Date) => {
    return tasks.filter(t => t.dueDate && isSameDay(new Date(t.dueDate), day));
  };

  const priorityColors: Record<string, string> = {
    urgent: '#EF4444',
    high: '#F97316',
    medium: '#F59E0B',
    low: '#10B981',
    none: '#6B7280',
  };

  return (
    <AppShell>
      <div className="p-6 max-w-7xl mx-auto space-y-4">
        {/* Header Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gold/10 text-gold">
              <CalendarIcon size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                {format(currentDate, 'MMMM yyyy')}
              </h1>
              <p className="text-xs text-muted">View all tasks scheduled across your workspace.</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentDate(new Date())}
              className="btn btn-secondary btn-xs"
            >
              Today
            </button>
            <div className="flex items-center border rounded-lg overflow-hidden" style={{ borderColor: 'var(--border)' }}>
              <button
                onClick={() => setCurrentDate(subMonths(currentDate, 1))}
                className="p-1.5 hover:bg-black/5 dark:hover:bg-white/5 text-muted hover:text-primary"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setCurrentDate(addMonths(currentDate, 1))}
                className="p-1.5 hover:bg-black/5 dark:hover:bg-white/5 text-muted hover:text-primary"
              >
                <ChevronRight size={16} />
              </button>
            </div>
            <button
              onClick={() => dispatch(openModal('createTask'))}
              className="btn btn-primary btn-xs flex items-center gap-1"
            >
              <Plus size={13} /> Add Task
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="rounded-xl border overflow-hidden shadow-sm" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          {/* Day Headers */}
          <div className="grid grid-cols-7 border-b text-center text-xs font-bold py-2" style={{ background: 'var(--surface-raised)', borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
              <div key={d}>{d}</div>
            ))}
          </div>

          {/* Month Days */}
          <div className="grid grid-cols-7 auto-rows-fr divide-x divide-y" style={{ borderColor: 'var(--border)' }}>
            {days.map((day, idx) => {
              const dayTasks = getTasksForDay(day);
              const isToday = isSameDay(day, new Date());
              const isCurrentMonth = isSameMonth(day, monthStart);

              return (
                <div
                  key={idx}
                  className={`min-h-[100px] p-2 flex flex-col justify-between transition-colors ${
                    !isCurrentMonth ? 'opacity-40 bg-black/[0.02] dark:bg-white/[0.02]' : ''
                  } ${isToday ? 'bg-gold/5 font-bold' : ''}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`text-xs w-6 h-6 flex items-center justify-center rounded-full ${
                        isToday ? 'bg-gold text-white font-bold' : 'text-muted'
                      }`}
                    >
                      {format(day, 'd')}
                    </span>
                    {dayTasks.length > 0 && (
                      <span className="text-[10px] text-muted font-normal">{dayTasks.length}</span>
                    )}
                  </div>

                  <div className="space-y-1 overflow-y-auto max-h-20">
                    {dayTasks.map(t => (
                      <div
                        key={t.id}
                        onClick={() => dispatch(openTaskDetail(t.id))}
                        className="px-1.5 py-0.5 rounded text-[11px] truncate cursor-pointer hover:brightness-110 text-white font-medium flex items-center gap-1 shadow-xs"
                        style={{ backgroundColor: priorityColors[t.priority] ?? '#6B7280' }}
                        title={t.title}
                      >
                        <span className="truncate">{t.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
