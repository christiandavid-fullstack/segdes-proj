import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import Toast from 'react-native-toast-message';

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // fake delay

    const user = login(email, password);
    if (user) {
      Toast.show({
        type: 'success',
        text1: 'Login Successful',
        text2: `Welcome, ${email}!`,
      });

      router.replace({
        pathname: '/tierSelection/tier-selection',
        params: { email, password },
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Login Failed',
        text2: 'Invalid email or password.',
      });
    }

    setLoading(false);
  };

  return {
    handleLogin,
    loading,
  };
}
