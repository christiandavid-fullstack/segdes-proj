import React, { createContext, ReactNode, useContext, useMemo, useState } from 'react';

type User = { id: string; name?: string | null; email: string | null };

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo credentials
const DEMO_EMAIL = 'demo@segdes.app';
const DEMO_PASSWORD = 'demo123';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    const ok =
      email.trim().toLowerCase() === DEMO_EMAIL &&
      password === DEMO_PASSWORD;

    if (ok) {
      setUser({ id: 'demo', name: 'Demo User', email });
    }
    return ok;
  };

  const logout = () => setUser(null);

  const value = useMemo(
    () => ({ user, login, logout, isAuthenticated: !!user }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
