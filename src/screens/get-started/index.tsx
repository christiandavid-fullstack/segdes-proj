import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
export default function GetStartedScreen() {
   return (
    <View className="flex-1 justify-center items-center bg-white px-6">
      <Text className="text-3xl font-bold text-gray-800 mb-2">Get Started</Text>
      <Text className="text-base text-gray-600 mb-6 text-center">
        Welcome to the app! Let’s begin your setup.
      </Text>

       <Pressable
      onPress={() => router.push('/auth/login')}
      className="bg-blue-600 px-6 py-3 rounded-full flex-row items-center justify-center"
    >
      <Text className="text-white text-lg font-semibold mr-2">Get Started</Text>
      <Ionicons name="arrow-forward-circle" size={24} color="white" />
    </Pressable>
    </View>
  )
}


