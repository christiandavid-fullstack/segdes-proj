import React from 'react';
import { KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
  const handleSubmit = () => {
    console.log('submit');
  };

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
        />
        <Text className="text-base font-semibold text-gray-700 mb-2">Password</Text>
        <TextInput
          className="h-11 border border-gray-300 rounded-lg px-3 mb-6 bg-gray-50 text-gray-900"
          secureTextEntry
          placeholder="Enter your password"
          placeholderTextColor="#9ca3af"
        />
        <View className='mb-2'>
          <TouchableOpacity
                  className="bg-blue-600 rounded-lg py-3 active:bg-blue-700"
                  onPress={handleSubmit}
                >
          <Text className="text-white text-center text-base font-bold">Confirm</Text>
        </TouchableOpacity>
        </View>
         <TouchableOpacity
          className="bg-black rounded-lg py-3 active:bg-black-700"
          onPress={handleSubmit}
        >
          <Text className="text-white text-center text-base font-bold">Register</Text>
        </TouchableOpacity>
      </View>
    </View>
    </KeyboardAvoidingView>
  );
}