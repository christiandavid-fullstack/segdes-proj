import React from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  className?: string; 
}

const Button: React.FC<ButtonProps> = ({ 
    title, 
    onPress, 
    className
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`px-4 py-2 bg-black`}
    >
      <Text className="text-white text-center text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
