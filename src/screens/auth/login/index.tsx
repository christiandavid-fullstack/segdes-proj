
import { FormInput } from '@/components/ui/formInput';
import { useLogin } from '@/hooks/auth/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
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
import loginDefaultValues from './loginSchema/loginDefaultValues';


export default function LoginScreen() {
  const { handleLogin, loading, anonymousLogin } = useLogin();
  //  const [count, setCount] = useRecoilState(numberStateAtom);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: loginDefaultValues
  });

  const onSubmit = (data: LoginSchema) => {
    handleLogin(data);
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
          paddingHorizontal: 10,
          backgroundColor: '#f3f4f6',
        }}
      >
        <View className="items-center mb-8">
          <Text className="text-3xl font-bold text-gray-900">ESIM APP</Text>
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
                  ? 'bg-blue-500'
                  : 'bg-blue-600 active:bg-blue-500'
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
            onPress={() => {
              router.replace('/auth/signup');
            }}
            disabled={loading}
          >
            <Text className="text-white text-center text-base font-bold">
              Register
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            className="mt-4"
          >
            <Text className="text-center text-black underline font-medium text-sm" >
             Forget Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            className="mt-4"
            disabled={loading}
          >
            <Text className="text-center text-black underline font-medium text-sm" 
              onPress={anonymousLogin}>
              Anonymous for testing
            </Text>
          </TouchableOpacity>
            {/* <Text style={{ fontSize: 24, marginBottom: 10 }}>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <View style={{ marginTop: 10 }}>
        <Button title="Decrement" onPress={() => setCount(count - 1)} />
      </View> */}
        </View>
        
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
