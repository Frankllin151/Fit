import React, { createContext, useContext, useState, ReactNode } from 'react';

type SidebarContextType = {
  isSidebarVisible: boolean; 
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

type SidebarProviderProps = {children:ReactNode;}

export const SidebarProvider = ({children}:SidebarProviderProps) =>{
  const [isSidebarVisible, setSidebarVisibility] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisibility((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarVisible, toggleSidebar }}>
    {children}
  </SidebarContext.Provider>
  )

 
}

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
