import { useAuth } from '@/context/AuthContext';
import { loginTyes } from '@/types/type';
import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { LoginInitialValues } from './schema/LoginInitialValues';
import { LoginSchema } from './schema/LoginSchema';

export default function Login() {
  const router = useRouter();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values: loginTyes) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay

    const user = login(values.email, values.password);
    if (user) {
      Toast.show({
        type: 'success',
        text1: 'Login Successful',
        text2: `Welcome, ${values.email}!`,
      });
      router.replace({
        pathname: '/tierSelection',
        params: { email: values.email, password: values.password },
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

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 20, backgroundColor: '#f3f4f6' }}>
        <View className="items-center mb-8">
          <Text className="text-3xl font-bold text-gray-900">User Login</Text>
        </View>

        <Formik
          initialValues={LoginInitialValues}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View className="bg-white p-6 rounded-2xl shadow-lg">
              <Text className="text-base font-semibold text-gray-700 mb-2">Email</Text>
              <TextInput
                className="h-11 border border-gray-300 rounded-lg px-3 mb-1 bg-gray-50 text-gray-900"
                placeholder="Enter your email"
                placeholderTextColor="#9ca3af"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                editable={!loading}
              />
              {errors.email && touched.email && (
                <Text className="text-red-600 mb-2">{errors.email}</Text>
              )}

              <Text className="text-base font-semibold text-gray-700 mb-2">Password</Text>
              <TextInput
                className="h-11 border border-gray-300 rounded-lg px-3 mb-2 bg-gray-50 text-gray-900"
                secureTextEntry
                placeholder="Enter your password"
                placeholderTextColor="#9ca3af"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                editable={!loading}
              />
              {errors.password && touched.password && (
                <Text className="text-red-600 mb-2">{errors.password}</Text>
              )}

              <View className="mb-2">
                <TouchableOpacity
                  className={`rounded-lg py-3 ${loading ? 'bg-blue-400 opacity-70' : 'bg-blue-600 active:bg-blue-700'}`}
                  onPress={() => handleSubmit()}
                  disabled={loading}
                >
                  {loading ? (
                    <ActivityIndicator size="small" color="#fff" />
                  ) : (
                    <Text className="text-white text-center text-base font-bold">Confirm</Text>
                  )}
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                className="bg-black rounded-lg py-3 active:bg-black-700"
                onPress={() => {}}
                disabled={loading}
              >
                <Text className="text-white text-center text-base font-bold">Register</Text>
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
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
