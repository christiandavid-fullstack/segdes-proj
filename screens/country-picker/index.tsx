import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useRecoilState } from 'recoil';
import { wizardCountriesState } from '../../state (Recoil)/atoms';

const MOCK_COUNTRIES = ['PH','JP','KR','US','AU','SG','TH','VN'];

export default function CountryPicker(){
  const nav = useNavigation<any>();
  const [sel, setSel] = useRecoilState(wizardCountriesState);
  const toggle=(c:string)=> setSel(x=> x.includes(c)? x.filter(y=>y!==c): [...x,c]);

  const onContinue = () => {
    // TODO: push to Period / Review screen when ready
    // nav.navigate('Period');
    nav.navigate('Review'); // or router.push('/review') if you prefer expo-router hooks here
  };

  return(
    <View className="p-4">
      <Text className="text-2xl font-extrabold mb-2">Select your country</Text>
      <ScrollView>
        {MOCK_COUNTRIES.map(c=> (
          <Pressable key={c} onPress={()=>toggle(c)} className="p-3 m-1 bg-white rounded-xl">
            <Text>{c} {sel.includes(c)? '✓':''}</Text>
          </Pressable>
        ))}
      </ScrollView>

      <Pressable onPress={onContinue} className="mt-4 p-4 bg-black rounded-2xl">
        <Text className="text-white text-center">
          Continue {sel.length ? `(${sel.length} selected)` : ''}
        </Text>
      </Pressable>
    </View>
  );
}
