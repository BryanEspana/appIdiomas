import React, { useState } from 'react';
import { View, StyleSheet, ViewStyle, TextStyle, Text } from 'react-native';
import Input from '../atoms/CustomInput';

type ValidationType = 'text' | 'password' | 'number' | 'date' | 'email';

type CustomTextInputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  validationType?: ValidationType;
  errorMessage?: string;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  errorStyle?: TextStyle;
  secureTextEntry?: boolean;
};

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
  placeholder,
  value,
  onChangeText,
  validationType,
  errorMessage,
  style,
  inputStyle,
  errorStyle,
  secureTextEntry,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState('');

  // Validación del input
  const validateInput = (text: string) => {
    if (validationType) {
      const validations: Record<ValidationType, () => boolean> = {
        text: () => text.trim().length > 0,
        password: () => text.length >= 6,
        number: () => /^\d+$/.test(text),
        date: () => /^\d{4}-\d{2}-\d{2}$/.test(text),
        email: () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text),
      };

      const isValid = validations[validationType]?.() ?? true;
      setError(isValid ? '' : errorMessage || `Entrada inválida`);
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    validateInput(value);
  };

  const handleFocus = () => setIsFocused(true);

  return (
    <View style={[styles.container, style]}>
      <Input
        style={[
          styles.input,
          isFocused && styles.focusedInput,
          inputStyle,
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => {
          onChangeText(text);
          validateInput(text);
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
        secureTextEntry={secureTextEntry}
      />
      {error ? (
        <Text style={[styles.errorText, errorStyle]}>{error}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
  },
  focusedInput: {
    borderColor: '#007BFF',
  },
  errorText: {
    color: '#ff4d4d',
    fontSize: 12,
    marginTop: 4,
  },
});