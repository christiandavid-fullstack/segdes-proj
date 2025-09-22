import React, { useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

interface FormInputProps extends TextInputProps {
  name: string;
  control: Control<any>;
  label?: string;
  error?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  name,
  control,
  label,
  error,
  secureTextEntry,
  ...textInputProps
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = secureTextEntry;

  return (
    <View className="mb-3">
      {label && (
        <Text className="text-base font-semibold text-gray-700 mb-2">
          {label}
        </Text>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <View className="relative">
            <TextInput
              value={value}
              onChangeText={onChange}
              secureTextEntry={isPasswordField && !showPassword}
              className={`h-11 border border-gray-300 rounded-lg px-3 bg-gray-50 text-gray-900 ${
                isPasswordField ? 'pr-14' : ''
              }`}
              placeholderTextColor="#9ca3af"
              {...textInputProps}
            />
            {isPasswordField && (
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 h-6 justify-center"
                activeOpacity={0.7}
              >
                <Text className="text-blue-600 font-semibold text-sm">
                  {showPassword ? 'Hide' : 'Show'}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
      {error && <Text className="text-red-600 mt-1">{error}</Text>}
    </View>
  );
};
