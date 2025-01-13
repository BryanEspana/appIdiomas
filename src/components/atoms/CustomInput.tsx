import React from 'react';
import { TextInput, StyleSheet, StyleProp, TextStyle, TextInputProps } from 'react-native';

type InputProps = {
  style?: StyleProp<TextStyle>;
} & TextInputProps;

const Input: React.FC<InputProps> = ({ style, ...props }) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor="#888"
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingLeft: 10,
    paddingVertical: 8,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
  },
});

export default Input;