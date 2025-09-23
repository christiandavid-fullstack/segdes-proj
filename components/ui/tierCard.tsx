import React from 'react';
import { Pressable, Text, View } from 'react-native';

type Props = {
  title: string;
  capMB: number;
  throttleKbps: number;
  desciption?:string;
  priceTable: { [period: number]: number };
  selected?: boolean;
  onSelect: () => void;
};

const TierCard: React.FC<Props> = ({
  title,
  capMB,
  throttleKbps,
  desciption,
  priceTable,
  selected = false,
  onSelect,
}) => {
  return (
    <Pressable
      onPress={onSelect}
      className={`rounded-xl border p-4 mb-4 ${
        selected ? 'border-blue-500 bg-blue-300' : 'border-gray-300 bg-gray-100'
      }`}
    >
      <Text className="text-xl font-bold text-gray-800">{title}</Text>

      <View className="flex-row justify-between mt-2">
        <Text className="text-gray-600">High-speed cap:</Text>
        <Text className="font-semibold text-gray-800">{capMB} MB/day</Text>
      </View>

      <View className="flex-row justify-between mt-1">
        <Text className="text-gray-600">Throttle speed:</Text>
        <Text className="font-semibold text-gray-800">{throttleKbps} kbps</Text>
      </View>

      <Text className="mt-3 font-semibold text-gray-700">Prices:</Text>
      <View className="flex-row justify-around mt-2">
        {Object.entries(priceTable).map(([days, price]) => (
          <View key={days} className="items-center">
            <Text className="text-sm text-gray-600">{days}d</Text>
            <Text className="text-base font-semibold text-gray-800">€{price}</Text>
          </View>
        ))}
      </View>

      {selected && (
        <Text className="text-right mt-3 text-blue-500 font-semibold">✓ Selected</Text>
      )}
      {desciption && (
        <Text className="text-gray-600 mt-2 italic">{desciption}</Text>
        )}
    </Pressable>
  );
};

export default TierCard;
