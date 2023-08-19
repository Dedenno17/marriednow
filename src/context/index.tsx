"use client";

import { useAppDispatch } from "@/features/hooks";
import { createContext, ReactNode, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { userProfile } from "@/features/user/actions";
import { refreshToken } from "@/features/auth/actions";

// CREATE CONTEXT
export const AppContext = createContext({});

// CREATE PROVIDER CONTEXT
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const dispatch = useAppDispatch();

  // PERSIST LOGIN WHEN REFRESH
  useEffect(() => {
    const accessCookie = Cookies.get("mnut");
    if (accessCookie) {
      dispatch(userProfile(accessCookie));
    }
  }, [dispatch]);

  //   REFRESHING TOKEN IN EVERY 15 MINUTE
  useEffect(() => {
    const refreshTokenInterval = setInterval(() => {
      const cookie = Cookies.get("mnut");
      if (cookie) {
        dispatch(refreshToken(cookie));
      }
    }, 14 * 60000);

    return () => clearInterval(refreshTokenInterval);
  }, [dispatch]);

  const value = {};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// CREATE USE APP CONTEXT
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within app provider");
  }
  return context;
};
