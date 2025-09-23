import TierCard from '@/components/ui/tierCard';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';

const tiers = [
  { id: 'basic', name: 'Basic', price: '$0', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione autem quaerat placeat fugiat error minima quasi, veritatis consequuntur exercitationem dolores eum omnis dolor ut totam numquam nihil. At, tenetur?' },
  { id: 'pro', name: 'Pro', price: '$9.99', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione autem quaerat placeat fugiat error minima quasi, veritatis consequuntur exercitationem dolores eum omnis dolor ut totam numquam nihil. At, tenetur?'},
  { id: 'premium', name: 'Premium', price: '$19.99', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione autem quaerat placeat fugiat error minima quasi, veritatis consequuntur exercitationem dolores eum omnis dolor ut totam numquam nihil. At, tenetur? '},
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
    const [tier, setTier] = useState<'economy' | 'comfort' | 'plus' | null>(null);

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
   
       <TierCard
        title="Economy"
        capMB={1000}
        throttleKbps={512}
        priceTable={{ 7: 5, 15: 9, 30: 15 }}
        selected={tier === 'economy'}
        onSelect={() => setTier('economy')}
      />

      <TierCard
        title="Comfort"
        capMB={3000}
        throttleKbps={1024}
        priceTable={{ 7: 9, 15: 15, 30: 25 }}
        selected={tier === 'comfort'}
        onSelect={() => setTier('comfort')}
      />

      <TierCard
        title="Plus"
        capMB={5000}
        throttleKbps={2048}
        priceTable={{ 7: 12, 15: 20, 30: 35 }}
        selected={tier === 'plus'}
        onSelect={() => setTier('plus')}
      />
    
      <Button title="Logout" onPress={handleBack} />

    </ScrollView>
  );
}
