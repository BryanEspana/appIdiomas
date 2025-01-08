import React, { useState } from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

type ValidationType = 'text' | 'password' | 'number' | 'date' | 'email';

type CustomTextInputProps = {
  placeholder: string; // Placeholder del input
  value: string; // Valor actual del input
  onChangeText: (text: string) => void; // Acción al cambiar texto
  validationType?: ValidationType; // Tipo de validación
  errorMessage?: string; // Mensaje de error personalizado
  style?: ViewStyle; // Estilo personalizado del contenedor
  inputStyle?: TextStyle; // Estilo personalizado del input
  errorStyle?: TextStyle; // Estilo del texto de error
  secureTextEntry?: boolean; // Modo seguro para contraseñas
  keyboardType?: 'default' | 'numeric' | 'email-address'; // Tipo de teclado
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
    keyboardType,
  }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [error, setError] = useState('');
  
    // Configuración dinámica de secureTextEntry y keyboardType
    const isPassword = validationType === 'password';
    const dynamicSecureTextEntry = isPassword || secureTextEntry;
    const dynamicKeyboardType = (() => {
      switch (validationType) {
        case 'number':
          return 'numeric';
        case 'email':
          return 'email-address';
        default:
          return keyboardType || 'default';
      }
    })();
  
    const validateInput = (text: string) => {
      if (validationType) {
        switch (validationType) {
          case 'text':
            if (text.trim().length === 0) setError(errorMessage || 'Campo requerido');
            else setError('');
            break;
          case 'password':
            if (text.length < 6)
              setError(errorMessage || 'La contraseña debe tener al menos 6 caracteres');
            else setError('');
            break;
          case 'number':
            if (!/^\d+$/.test(text))
              setError(errorMessage || 'Solo se permiten números');
            else setError('');
            break;
          case 'date':
            if (!/^\d{4}-\d{2}-\d{2}$/.test(text))
              setError(errorMessage || 'Formato de fecha inválido (YYYY-MM-DD)');
            else setError('');
            break;
          case 'email':
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text))
              setError(errorMessage || 'Correo electrónico inválido');
            else setError('');
            break;
          default:
            setError('');
            break;
        }
      }
    };
  
    const handleBlur = () => {
      setIsFocused(false);
      validateInput(value);
    };
  
    const handleFocus = () => setIsFocused(true);
  
    return (
      <View style={[styles.container, style]}>
        <TextInput
          style={[
            styles.input,
            isFocused && styles.focusedInput,
            inputStyle,
          ]}
          placeholder={placeholder}
          placeholderTextColor="#888"
          value={value}
          onChangeText={(text) => {
            onChangeText(text);
            validateInput(text);
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={dynamicSecureTextEntry}
          keyboardType={dynamicKeyboardType}
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
