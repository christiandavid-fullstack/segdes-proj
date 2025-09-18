import { loginParams } from '@/types/type';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';


export default function Selection() {
    const params = useLocalSearchParams();
    const { email, password } = params as loginParams;

  return (
    <View style={{ padding: 20 }}>
      <Text>Hi, {email}</Text>
    </View>
  );
}
