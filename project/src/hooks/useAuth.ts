import { useState, useEffect } from 'react';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('auth') === 'true';
  });

  const login = (email: string, password: string) => {
    // Mock authentication - in production, this would validate against a real backend
    if (email && password) {
      localStorage.setItem('auth', 'true');
      localStorage.setItem('user', JSON.stringify({ email, role: 'Healthcare Professional' }));
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('auth');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
  };

  const getUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  };

  return { isAuthenticated, login, logout, getUser };
}