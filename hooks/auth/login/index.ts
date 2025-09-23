import { useAuth } from '@/context/AuthContext';
import { LoginSchema } from '@/screens/auth/login/loginSchema';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import Toast from 'react-native-toast-message';

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (data:LoginSchema) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // fake delay
    const user = login(data.email, data.password);
    if (user) {
      Toast.show({
        type: 'success',
        text1: 'Login Successful',
        text2: `Welcome, ${data.email}!`,
      });

      router.replace({
        pathname: '/tierSelection/tier-selection',
        params: { 
            email:data.email, 
            password:data.password 
          },
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

  const anonymousLogin = async () => {
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000)); // fake delay
    router.replace({
      pathname: '/tierSelection/tier-selection',
      params: { email: 'anonymous', password: 'anonymous' },
    });
     Toast.show({
        type: 'success',
        text1: 'Login Successful',
        text2: "Testing Mode On",
      });
  }

  return {
    handleLogin,
    loading,
    anonymousLogin
  };
}
