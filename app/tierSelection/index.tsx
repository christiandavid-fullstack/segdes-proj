import { loginParams } from '@/types/type';
import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const tiers = [
  { id: 'basic', name: 'Basic', price: '$0', description: 'Essential features' },
  { id: 'pro', name: 'Pro', price: '$9.99', description: 'Advanced tools' },
  { id: 'premium', name: 'Premium', price: '$19.99', description: 'All features' },
];


export default function Selection() {
    const params = useLocalSearchParams();
    const { email, password } = params as loginParams;
    const [selectedTier, setSelectedTier] = useState<string | null>(null);

  return (
     <View className="flex-1 bg-white p-5">
      <Text className="text-2xl font-bold text-center mb-6">Choose Your Tier</Text>

      {tiers.map((tier) => {
        const isSelected = selectedTier === tier.id;
        return (
          <TouchableOpacity
            key={tier.id}
            onPress={() => setSelectedTier(tier.id)}
            className={`border rounded-lg p-5 mb-4 ${
              isSelected ? 'border-blue-500 bg-blue-100' : 'border-gray-300 bg-gray-100'
            }`}
          >
            <Text className="text-lg font-semibold">{tier.name}</Text>
            <Text className="text-md text-gray-700 mt-1">{tier.price}</Text>
            <Text className="text-sm text-gray-500 mt-1">{tier.description}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
    
  );
}
