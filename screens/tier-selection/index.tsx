import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';
import React from 'react';
import { Button, ScrollView, Text, TouchableOpacity } from 'react-native';
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
  return (
    <ScrollView
      className="flex-1 p-5"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ alignItems: 'center', paddingVertical: 20 }}
    >
      <Text className="text-2xl font-bold text-center mb-6">Choose Your Tier</Text>

      {tiers.map((tier) => (
        <TouchableOpacity key={tier.id} activeOpacity={0.8} className="items-center">
          <Card className="my-5 w-80 bg-gray-100 border border-gray-300 active:bg-blue-100 active:border-blue-500">
            <CardHeader>
              <CardTitle>{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Text className="text-md text-gray-700">{tier.price}</Text>
            </CardContent>
          </Card>
        </TouchableOpacity>
      ))}
      <Button title="Logout" onPress={handleBack} />

    </ScrollView>
  );
}
