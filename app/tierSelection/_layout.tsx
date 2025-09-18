import { useAuth } from '@/context/AuthContext';
import { Slot, useRouter } from 'expo-router';

import React from 'react';
import { Button, Text, View } from 'react-native';

export default function TierSelectionLayout() {
  const router = useRouter();
  const {logout} = useAuth();

  const handleBack = () => {
    logout();
    router.replace('/auth/login'); 
//  router.push()	Pushes a new screen onto the stack (user can go back)
// router.replace()	Replaces the current screen (user cannot go back)
// router.back()	Navigates back in history (like Android/iOS back button)
  };

  return (
    <View className="flex-1 pt-10 bg-gray-100">
      <View className="h-15 bg-blue-500 justify-center px-4">
        <Text className="text-white text-lg font-bold">Selection of Tier</Text>
        <Button title="Go Back" onPress={handleBack} />
      </View>
      <View className="flex-1 p-4">
        <Slot />
      </View>
    </View>
  );
}
