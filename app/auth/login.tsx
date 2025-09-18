import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';

export default function Login() {
   const router = useRouter();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [loading, setLoading] = useState(false);
   const {login } = useAuth();
   const handleSubmit = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const user = login(email, password);
      if (user) {
        Toast.show({
          type: 'success',
          text1: 'Login Successful',
          text2: `Welcome, ${email}!`
        });
      router.replace({ pathname:'/tierSelection',
        params: { email, password }
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Login Failed',
        text2: 'Invalid email or password.'
      });
    }
    // router.push({ pathname:'/tierSelection',
    //      params: { email, password }
    // });
    setLoading(false);
  }

  return (
    <KeyboardAvoidingView
       className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
  
    <View className="flex-1 justify-center px-5 bg-gray-100">
      <View className="items-center mb-8">
        <Text className="text-3xl font-bold text-gray-900">User Login</Text>
      </View>
      <View className="bg-white p-6 rounded-2xl shadow-lg">
        <Text className="text-base font-semibold text-gray-700 mb-2">Email</Text>
        <TextInput
          className="h-11 border border-gray-300 rounded-lg px-3 mb-4 bg-gray-50 text-gray-900"
          placeholder="Enter your email"
          placeholderTextColor="#9ca3af"
          onChangeText={setEmail}
/>
        <Text className="text-base font-semibold text-gray-700 mb-2">Password</Text>
        <TextInput
          className="h-11 border border-gray-300 rounded-lg px-3 mb-6 bg-gray-50 text-gray-900"
          secureTextEntry
          onChangeText={setPassword}
          placeholder="Enter your password"
          placeholderTextColor="#9ca3af"
        />
        <View className='mb-2'>
       {loading ? (
          <TouchableOpacity
            className="bg-blue-400 rounded-lg py-3 opacity-70"
            disabled
          >
            <ActivityIndicator size="small" color="#fff" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            className="bg-blue-600 rounded-lg py-3 active:bg-blue-700"
            onPress={handleSubmit}
          >
            <Text className="text-white text-center text-base font-bold">Confirm</Text>
          </TouchableOpacity>
        )}
        </View>
         <TouchableOpacity
          className="bg-black rounded-lg py-3 active:bg-black-700"
          onPress={()=>{}}
        >
          <Text className="text-white text-center text-base font-bold">Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}} className="mt-4">
          <Text className="text-center text-black underline font-medium text-sm">
            Continue as a Guest
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </KeyboardAvoidingView>
  );
}