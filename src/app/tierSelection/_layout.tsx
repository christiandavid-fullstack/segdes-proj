import { Stack } from 'expo-router';

import React from 'react';

export default function TierSelectionLayout() {

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="tier-selection"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
