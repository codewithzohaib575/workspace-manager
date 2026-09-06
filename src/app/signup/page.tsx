'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAppDispatch } from '@/store';
import { addMockUser, loginSuccess } from '@/store/slices/authSlice';
import { addToast } from '@/store/slices/uiSlice';
import { UserPlus, ArrowRight, Lock, Mail, User, Shield } from 'lucide-react';
import type { User as UserType } from '@/types';

export default function SignUpPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const newUser: UserType = {
      id: `user-${Date.now().toString().slice(-4)}`,
      name: name.trim(),
      email: email.trim(),
      color: '#B08D57',
      initials: name.trim().split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2),
      password,
    };

    dispatch(addMockUser(newUser));
    dispatch(loginSuccess(newUser));
    dispatch(addToast({
      id: String(Date.now()),
      title: 'Account Created',
      description: `Welcome, ${newUser.name}!`,
      type: 'success',
    }));

    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'var(--background)' }}>
      <div className="w-full max-w-md p-8 rounded-2xl border shadow-xl space-y-6" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-gold/15 text-gold flex items-center justify-center mx-auto text-2xl font-bold">
            ✨
          </div>
          <h1 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Create Your Account
          </h1>
          <p className="text-xs text-muted">
            Join your team on Workspace Manager.
          </p>
        </div>

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label className="text-xs font-semibold block mb-1 text-muted">Full Name</label>
            <div className="relative">
              <User size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                className="input text-xs pl-9 w-full"
                placeholder="Sarah Connor"
                autoFocus
              />
            </div>
          </div>

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
                placeholder="sarah@company.com"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold block mb-1 text-muted">Password</label>
            <div className="relative">
              <Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="input text-xs pl-9 w-full"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-full py-2.5 text-xs font-bold flex items-center justify-center gap-1.5 shadow-md">
            Create Account <ArrowRight size={14} />
          </button>
        </form>

        <div className="text-center text-xs text-muted">
          Already have an account?{' '}
          <Link href="/login" className="text-gold font-semibold hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
