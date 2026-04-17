"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AdminContextType {
  isAdmin: boolean;
  toggleAdmin: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [inputBuffer, setInputBuffer] = useState("");

  const toggleAdmin = () => setIsAdmin((prev) => !prev);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Secret key listener (case-insensitive)
      const key = e.key.toLowerCase();
      
      // We only care about alphanumeric keys to avoid buffer pollution
      if (!/^[a-z0-9]$/.test(key)) return;

      setInputBuffer((prev) => {
        const next = (prev + key).slice(-10);
        if (next.includes("sumit123")) {
          setIsAdmin(true);
          localStorage.setItem("portfolio-admin", "true");
          alert("Admin Mode Activated 🔓");
          return "";
        }
        return next;
      });
    };

    // Load from storage
    if (localStorage.getItem("portfolio-admin") === "true") {
      setIsAdmin(true);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [inputBuffer]);

  return (
    <AdminContext.Provider value={{ isAdmin, toggleAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error("useAdmin must be used within an AdminProvider");
  }
  return context;
};
