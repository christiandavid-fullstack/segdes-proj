
import { FormInput } from '@/components/ui/formInput';
import { useLogin } from '@/hooks/auth/login';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { loginSchema, LoginSchema } from './loginSchema';


export default function LoginScreen() {
  const { handleLogin, loading } = useLogin();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginSchema) => {
    handleLogin(data.email, data.password);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          paddingHorizontal: 20,
          backgroundColor: '#f3f4f6',
        }}
      >
        <View className="items-center mb-8">
          <Text className="text-3xl font-bold text-gray-900">User Login</Text>
        </View>

        <View className="bg-white p-6 rounded-2xl shadow-lg">
          <FormInput
          label='Email'
            name="email"
            control={control}
             placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
              editable={!loading}
              error={errors.email?.message}            
          />
          <FormInput
          label='Password'
            name="password"
            control={control}
            placeholder="Enter your password"
            secureTextEntry
            editable={!loading}
            error={errors.password?.message}
          />

          <View className="mb-2">
            <TouchableOpacity
              className={`rounded-lg py-3 ${
                loading
                  ? 'bg-blue-400 opacity-70'
                  : 'bg-blue-600 active:bg-blue-700'
              }`}
              onPress={handleSubmit(onSubmit)}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text className="text-white text-center text-base font-bold">
                  Confirm
                </Text>
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            className="bg-black rounded-lg py-3 active:bg-black-700"
            onPress={() => {}}
            disabled={loading}
          >
            <Text className="text-white text-center text-base font-bold">
              Register
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            className="mt-4"
            disabled={loading}
          >
            <Text className="text-center text-black underline font-medium text-sm">
              Continue as a Guest
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
