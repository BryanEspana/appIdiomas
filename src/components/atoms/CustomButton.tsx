import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type CustomButtonProps = {
  title: string; // Título del botón
  onPress: () => void; // Acción al presionar
  icon?: IconProp; // Tipo de ícono de FontAwesome
  iconPosition?: 'left' | 'right'; // Posición del ícono
  iconColor?: string; // Color del ícono
  iconSize?: number; // Tamaño del ícono
  disabled?: boolean; // Modo deshabilitado
  theme?: 'light' | 'dark'; // Tema (claro u oscuro)
  style?: ViewStyle; // Estilo personalizado del contenedor
  textStyle?: TextStyle; // Estilo personalizado del texto
};

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  icon,
  iconPosition = 'left',
  iconColor = 'white',
  iconSize = 20,
  disabled = false,
  theme = 'light',
  style,
  textStyle,
}) => {
  const isDarkMode = theme === 'dark';

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isDarkMode ? styles.darkModeButton : styles.lightModeButton,
        disabled && styles.disabledButton,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={styles.content}>
        {/* Ícono en la izquierda */}
        {icon && iconPosition === 'left' && (
          <FontAwesomeIcon
            icon={icon}
            size={iconSize}
            color={iconColor}
            style={styles.iconSpacing}
          />
        )}
        {/* Texto del botón */}
        <Text
          style={[
            styles.text,
            isDarkMode ? styles.darkModeText : styles.lightModeText,
            textStyle,
          ]}
        >
          {title}
        </Text>
        {/* Ícono en la derecha */}
        {icon && iconPosition === 'right' && (
          <FontAwesomeIcon
            icon={icon}
            size={iconSize}
            color={iconColor}
            style={styles.iconSpacing}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconSpacing: {
    marginHorizontal: 8,
  },
  darkModeButton: {
    backgroundColor: '#333',
  },
  lightModeButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  darkModeText: {
    color: '#fff',
  },
  lightModeText: {
    color: '#333',
  },
  disabledButton: {
    backgroundColor: '#ccc',
    borderColor: '#aaa',
  },
});
