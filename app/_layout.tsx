import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import Toast from 'react-native-toast-message';
import { RecoilRoot } from 'recoil';

import { AuthProvider } from '@/context/AuthContext';

export default function RootLayout() {
  const scheme = useColorScheme();

  return (
    <RecoilRoot>
      <AuthProvider>
        <ThemeProvider value={scheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack screenOptions={{ headerShown: false }} />
          <Toast />
          <StatusBar style="auto" />
        </ThemeProvider>
      </AuthProvider>
    </RecoilRoot>
  );
}
