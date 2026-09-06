'use client';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { useEffect, useSyncExternalStore } from 'react';
import { useAppSelector } from '@/store';
import { usePathname, useRouter } from 'next/navigation';

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useAppSelector(state => state.ui.theme);
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <>{children}</>;
}

function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);
  const publicPath = pathname === '/login' || pathname === '/signup' || pathname === '/forgot-password';

  useEffect(() => {
    if (!isAuthenticated && !publicPath) router.replace('/login');
  }, [isAuthenticated, publicPath, router]);

  if (!isAuthenticated && !publicPath) return null;
  return <>{children}</>;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!mounted) return null;

  return (
    <Provider store={store}>
      <ThemeProvider><AuthGuard>{children}</AuthGuard></ThemeProvider>
    </Provider>
  );
}
