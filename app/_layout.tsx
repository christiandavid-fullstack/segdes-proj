import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { AuthProvider } from '@/context/AuthContext';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Stack } from 'expo-router';
import Toast from 'react-native-toast-message';
import "../globals.css";
export default function RootLayout() {
  const colorScheme = useColorScheme();
 
  return (
    // <RecoilRoot>
    <AuthProvider>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="auth" options={{ headerShown: false }} />
        <Stack.Screen name="tierSelection" options={{ headerShown: false }} />
        <Stack.Screen name='getStarted' options={{headerShown:false}}/>
      </Stack>
      <Toast />
      <StatusBar style="auto" />
    </ThemeProvider>
  </AuthProvider>
// </RecoilRoot>
  );
}
