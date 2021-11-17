import * as Atoms from '@/components/Atoms';
import React, { useEffect, useState } from 'react';
import { loadAsync } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import * as Pretendard from '@/assets/fonts';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Router from './Router';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await loadAsync({
          PreMedium: Pretendard.Medium,
          PreLight: Pretendard.Light,
          PreBold: Pretendard.Bold,
          PreRegular: Pretendard.Regular,
        });
      } catch (e) {
        console.log(e);
      } finally {
        setTimeout(() => {
          void SplashScreen.hideAsync();
        }, 2000);
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  if (!appIsReady) return null;
  return (
    <SafeAreaProvider>
      <Router />
    </SafeAreaProvider>
  );
}
