'use client';

import { useAppDispatch, useAppSelector } from '@/features/hooks';
import { createContext, ReactNode, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import { userProfile } from '@/features/user/actions';
import { refreshToken } from '@/features/auth/actions';
import { rehydrateToken } from '@/features/auth/authSlice';
import jwt_decode from 'jwt-decode';
import { formatDistanceToNowStrict, isFuture } from 'date-fns';

// CREATE CONTEXT
export const AppContext = createContext({});

// CREATE PROVIDER CONTEXT
export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const dispatch = useAppDispatch();
  const { data: userData } = useAppSelector((state) => state.user);
  const { data: authData } = useAppSelector((state) => state.auth);

  // PERSIST LOGIN WHEN REFRESH
  useEffect(() => {
    dispatch(rehydrateToken());
  }, [dispatch]);

  //   REFRESHING TOKEN IN EVERY 14 MINUTE
  //   REFRESHING TOKEN IN EVERY 14 MINUTE
  useEffect(() => {
    if (Object.keys(authData).length === 0) return;

    const accessToken = authData.accessToken;
    let refreshTokenInterval: any;

    if (accessToken) {
      const { exp } = jwt_decode<any>(accessToken);
      const tokenExpire = new Date(exp * 1000);

      if (isFuture(tokenExpire)) {
        const timesLeft = formatDistanceToNowStrict(tokenExpire, {
          unit: 'second',
        });
        const secondsLeft = parseInt(timesLeft.split(' ')[0]) - 10;

        refreshTokenInterval = setInterval(() => {
          dispatch(refreshToken());
        }, secondsLeft * 1000);
      } else {
        dispatch(refreshToken());
      }
    }

    return () => clearInterval(refreshTokenInterval);
  }, [dispatch, authData]);

  useEffect(() => {
    const accessCookie = Cookies.get('mnut');
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
    throw new Error('useAppContext must be used within app provider');
  }
  return context;
};
