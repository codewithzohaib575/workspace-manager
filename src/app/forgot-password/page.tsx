'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useAppDispatch } from '@/store';
import { addToast } from '@/store/slices/uiSlice';
import { KeyRound, ArrowRight, Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ForgotPasswordPage() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setSubmitted(true);
    dispatch(addToast({
      id: String(Date.now()),
      title: 'Reset Link Sent',
      description: `Instructions sent to ${email}`,
      type: 'info',
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'var(--background)' }}>
      <div className="w-full max-w-md p-8 rounded-2xl border shadow-xl space-y-6" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center mx-auto text-2xl font-bold">
            🔑
          </div>
          <h1 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Reset Password
          </h1>
          <p className="text-xs text-muted">
            Enter your email and we will send you a reset link.
          </p>
        </div>

        {submitted ? (
          <div className="p-4 rounded-xl border bg-green-500/10 border-green-500/30 text-center space-y-2">
            <CheckCircle2 size={24} className="mx-auto text-green-500" />
            <p className="text-xs font-semibold text-green-600 dark:text-green-400">
              Check your inbox!
            </p>
            <p className="text-[11px] text-muted">
              We have sent password reset instructions to <strong>{email}</strong>.
            </p>
            <Link href="/login" className="btn btn-secondary btn-xs inline-flex items-center gap-1 mt-2">
              <ArrowLeft size={12} /> Back to Sign In
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold block mb-1 text-muted">Email address</label>
              <div className="relative">
                <Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="input text-xs pl-9 w-full"
                  placeholder="name@company.com"
                  autoFocus
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full py-2.5 text-xs font-bold flex items-center justify-center gap-1.5 shadow-md">
              Send Reset Link <ArrowRight size={14} />
            </button>

            <div className="text-center text-xs text-muted pt-2">
              <Link href="/login" className="text-muted hover:text-primary inline-flex items-center gap-1">
                <ArrowLeft size={12} /> Back to Sign In
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
