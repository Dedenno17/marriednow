"use client";

import { useAppDispatch, useAppSelector } from "@/features/hooks";
import { createContext, ReactNode, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { userProfile } from "@/features/user/actions";
import { refreshToken } from "@/features/auth/actions";
import { rehydrateToken } from "@/features/auth/authSlice";

// CREATE CONTEXT
export const AppContext = createContext({});

// CREATE PROVIDER CONTEXT
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const dispatch = useAppDispatch();
  const { data: userData } = useAppSelector((state) => state.user);

  // PERSIST LOGIN WHEN REFRESH
  useEffect(() => {
    dispatch(rehydrateToken());
  }, [dispatch]);

  //   REFRESHING TOKEN IN EVERY 15 MINUTE
  useEffect(() => {
    const refreshTokenInterval = setInterval(() => {
      dispatch(refreshToken());
    }, 14 * 60000);

    return () => clearInterval(refreshTokenInterval);
  }, [dispatch]);

  useEffect(() => {
    const accessCookie = Cookies.get("mnut");
    if (!userData && accessCookie) {
      dispatch(userProfile(accessCookie));
    }
  }, [userData, dispatch]);

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
