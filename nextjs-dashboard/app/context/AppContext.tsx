"use client";

import React, { createContext, useState, ReactNode } from "react";

// 1. Créez le contexte
export const AppContext = createContext<{ state: any; setState: React.Dispatch<React.SetStateAction<any>> } | null>(null);

// 2. Fournisseur pour gérer le contexte
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState({}); // Vous pouvez initialiser avec vos valeurs par défaut

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};
