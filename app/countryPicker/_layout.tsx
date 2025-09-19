import { Stack } from 'expo-router';

import React from 'react';

export default function CountryPickerLayout() {

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="country-picker"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
