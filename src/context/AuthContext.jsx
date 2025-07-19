import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // user: { nombre: 'Juan', rol: 'admin' }

  const login = (username, role) => {
    setUser({ username, role });
  };

  const logout = () => {
    setUser(null);
  };

  const isAdmin = () => user?.role === 'admin';
  const isUser = () => user?.role === 'usuario';

  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin, isUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}