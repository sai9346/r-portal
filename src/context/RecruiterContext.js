// src/context/RecruiterContext.js
import React, { createContext, useState } from 'react';

export const RecruiterContext = createContext();

export const RecruiterProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <RecruiterContext.Provider value={{ user, login, logout }}>
      {children}
    </RecruiterContext.Provider>
  );
};
