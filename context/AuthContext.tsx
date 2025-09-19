import React, { createContext, ReactNode, useContext, useState } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // Dummy credentials
  const dummyEmail = 'admin@example.com';
  const dummyPassword = '123456';

  const login = (email: string, password: string): boolean => {
    if (email === dummyEmail && password === dummyPassword) {
      setUser({
        id: '1',
        name: 'John Doe',
        email: dummyEmail,
      });
      return true;
    } else {
      return false; 
    }
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
