'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, Lock, Mail, ShieldCheck } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store';
import { loginThunk } from '@/store/slices/authSlice';
import { MOCK_USERS, MOCK_WORKSPACES } from '@/lib/mockData';

const demoRole = (userId: string) => MOCK_WORKSPACES.find(workspace => workspace.members.some(member => member.userId === userId))?.members.find(member => member.userId === userId)?.role ?? 'member';

export default function LoginPage() {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { error, isLoading } = useAppSelector(state => state.auth);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async (event: React.FormEvent) => {
		event.preventDefault();
		const authenticated = await dispatch(loginThunk(email, password));
		if (authenticated) router.push('/dashboard');
	};

	const useDemoAccount = (demoEmail: string) => {
		setEmail(demoEmail);
		setPassword('password123');
	};

	return (
		<main className="min-h-screen flex items-center justify-center p-4" style={{ background: 'var(--background)' }}>
			<div className="w-full max-w-md space-y-6 rounded-2xl border p-8 shadow-xl" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
				<div className="text-center space-y-2">
					<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
						<ShieldCheck size={25} />
					</div>
					<h1 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>Welcome back</h1>
					<p className="text-xs text-muted">Sign in to continue to Workspace Manager.</p>
				</div>

				<form onSubmit={handleLogin} className="space-y-4">
					<div>
						<label htmlFor="email" className="mb-1 block text-xs font-semibold text-muted">Email address</label>
						<div className="relative">
							<Mail size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
							<input id="email" type="email" required value={email} onChange={event => setEmail(event.target.value)} className="input w-full pl-9 text-xs" placeholder="zohaib@example.com" autoFocus />
						</div>
					</div>

					<div>
						<label htmlFor="password" className="mb-1 block text-xs font-semibold text-muted">Password</label>
						<div className="relative">
							<Lock size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
							<input id="password" type="password" required value={password} onChange={event => setPassword(event.target.value)} className="input w-full pl-9 text-xs" placeholder="password123" />
						</div>
					</div>

					{error && <p className="text-xs font-semibold text-red-500" role="alert">{error}</p>}

					<button type="submit" disabled={isLoading} className="btn btn-primary flex w-full items-center justify-center gap-1.5 py-2.5 text-xs font-bold shadow-md disabled:opacity-60">
						{isLoading ? 'Signing in...' : 'Sign In'} <ArrowRight size={14} />
					</button>
				</form>

				<div className="space-y-2 border-t pt-4" style={{ borderColor: 'var(--border)' }}>
					<p className="text-xs font-semibold text-muted">Demo accounts</p>
					<div className="grid grid-cols-2 gap-2">
						{MOCK_USERS.map(user => (
							<button key={user.id} type="button" onClick={() => useDemoAccount(user.email)} className="rounded-lg border px-3 py-2 text-left text-xs transition-colors hover:border-gold" style={{ borderColor: 'var(--border)' }}>
								<span className="block font-semibold" style={{ color: 'var(--text-primary)' }}>{user.name}</span>
								<span className="block truncate text-muted">{user.email}</span>
								<span className="mt-1 block text-[10px] font-bold uppercase text-gold">{demoRole(user.id)}</span>
							</button>
						))}
					</div>
					<p className="text-[11px] text-muted">All demo accounts use password123.</p>
				</div>

				<p className="text-center text-xs text-muted">
					Don&apos;t have an account?{' '}
					<Link href="/signup" className="font-semibold text-gold hover:underline">Create one</Link>
				</p>
			</div>
		</main>
	);
}
