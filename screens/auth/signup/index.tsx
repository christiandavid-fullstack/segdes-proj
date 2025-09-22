import { FormInput } from '@/components/ui/formInput';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Toast from 'react-native-toast-message';
import signupDefaultValues from './signupSchema/signupDefaultValues';
import { signupSchema, SignupSchema } from './signupSchema/signupSchema';

export default function SignupScreen() {
    const { control, handleSubmit, formState: { errors } } = useForm<SignupSchema>({
      resolver: zodResolver(signupSchema),
      defaultValues: signupDefaultValues
    });
   const handleSignup = (data:SignupSchema) => {
     // console.log('Signup pressed', {
    //   fullName: data.fullName,
    //   email: data.email,
    //   password: data.password,
    //   confirmPassword: data.confirmPassword,
    // });
    Toast.show({
      type: 'success',
      text1: 'Signup Successfully',
      text2: `Welcome, ${data.fullName}!`,
    });
     router.replace('/tierSelection/tier-selection');
  };

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white px-6 py-8 justify-center"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View>
        <Text className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create Account
        </Text>
        <FormInput
          label="Full Name"
          name='fullName'
          control={control}
          placeholder='Enter your full name'
          autoCapitalize='words'
          error={errors.fullName?.message}
        />
       
        <FormInput
          label="Email"
          name="email"
          control={control}
          placeholder="Enter your email"
          keyboardType="email-address"  
          autoCapitalize="none"
          error={errors.email?.message} 
        />

        <FormInput
          label="Password"
          name="password"
          control={control}
          placeholder="Enter your password"
          secureTextEntry       
          error={errors.password?.message}
        />

        <FormInput
          label="Confirm Password"
          name="confirmPassword" 
          control={control}
          placeholder="Confirm your password"
          secureTextEntry       
          error={errors.confirmPassword?.message}
        />
        <TouchableOpacity
          onPress={handleSubmit(handleSignup)}
          className="bg-blue-600 rounded-md py-4"
        >
          <Text className="text-white text-center text-lg font-semibold">
            Sign Up
          </Text>
        </TouchableOpacity>

        <Text className="text-center text-gray-500 mt-4">
          Already have an account?{' '}
          <Text
            className="text-blue-600 font-semibold"
            onPress={() => router.replace('/auth/login')}
          >
            Log In
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}
