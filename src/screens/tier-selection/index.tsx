import TierCard from '@/components/ui/tierCard';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';

const tiers = [
  {
    id: 'economy',
    name: 'Economy',
    capMB: 1000,
    throttleKbps: 512,
    priceTable: { 7: 5, 15: 9, 30: 15 },
    description:
      'Perfect for light users. Limited speed but affordable and reliable for basic browsing.',
  },
  {
    id: 'comfort',
    name: 'Comfort',
    capMB: 3000,
    throttleKbps: 1024,
    priceTable: { 7: 9, 15: 15, 30: 25 },
    description:
      'Balanced performance for everyday use. Good for streaming and casual work.',
  },
  {
    id: 'plus',
    name: 'Plus',
    capMB: 5000,
    throttleKbps: 2048,
    priceTable: { 7: 12, 15: 20, 30: 35 },
    description:
      'High-speed and high-capacity. Great for remote work, gaming, and HD streaming.',
  },
];

export default function TierSelectionScreen() {
  // const params = useLocalSearchParams();
  const router = useRouter();
  const {logout} = useAuth();
  const handleBack = () => {
    logout();
    Toast.show({
      type: 'success',
      text1: 'Logged out successfully',
    });
    router.replace('/auth/login'); 
//  router.push()	Pushes a new screen onto the stack (user can go back)
// router.replace()	Replaces the current screen (user cannot go back)
// router.back()	Navigates back in history (like Android/iOS back button)
  };
    const [selectedTier, setSelectedTier] = useState<string|null>(null);
  return (
    <ScrollView
      className="flex-1 p-10"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 20 }}
    >
     <View className='items-center'>
        <Text className="text-xl font-semibold text-gray-800 mb-4">
      Select a Tier
    </Text>
    </View>
   
          {tiers.map((tier) => (
        <TierCard
          key={tier.id}
          title={tier.name}
          capMB={tier.capMB}
          throttleKbps={tier.throttleKbps}
          priceTable={tier.priceTable}
          desciption={tier.description}
          selected={selectedTier === tier.id}
          onSelect={() => setSelectedTier(tier.id)}
        />
      ))}
      <Button title="Logout" onPress={handleBack} />

    </ScrollView>
  );
}
