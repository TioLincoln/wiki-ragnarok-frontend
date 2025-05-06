import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  const login = async (email, senha) => {
    // Simulando login (sem backend ainda)
    if (email === 'admin@wiki.com' && senha === '1234') {
      setUsuario({ nome: 'Admin', email });
    } else {
      throw new Error('Login inválido');
    }
  };

  const logout = () => {
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
