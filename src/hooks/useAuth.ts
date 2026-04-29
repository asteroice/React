// src/hooks/useAuth.ts
import { useState, useEffect, useCallback } from "react";

function getStoredAuth() {
  const token = localStorage.getItem("token");
  return {
    isAuthenticated:
      !!token && token !== "undefined" && token !== "null" && token.length > 10,
    userName: localStorage.getItem("userName") || "",
    token,
  };
}

export function useAuth() {
  // 🔥 Инициализируем СИНХРОННО из storage, а не с false
  const [state, setState] = useState(getStoredAuth);

  useEffect(() => {
    const handleStorageChange = () => setState(getStoredAuth());
    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("auth-change", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("auth-change", handleStorageChange);
    };
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    setState(getStoredAuth()); // Мгновенно обновляем состояние
    window.dispatchEvent(new Event("auth-change"));
  }, []);

  return {
    isAuthenticated: state.isAuthenticated,
    userName: state.userName,
    logout,
  };
}
