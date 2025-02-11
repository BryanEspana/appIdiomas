import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type CustomIconProps = {
  icon: IconProp;
  size?: number;
  color?: string;
  onPress?: () => void; // Función opcional al presionar
};

export const CustomIcon: React.FC<CustomIconProps> = ({
  icon,
  size = 20,
  color = '#333',
  onPress, // Recibimos el onPress opcional
}) => {
  return onPress ? (
    // Si se pasa onPress, renderizamos un TouchableOpacity
    <TouchableOpacity onPress={onPress} style={styles.iconWrapper}>
      <FontAwesomeIcon icon={icon} size={size} color={color} />
    </TouchableOpacity>
  ) : (
    // Si no hay onPress, renderizamos solo el ícono
    <FontAwesomeIcon icon={icon} size={size} color={color} />
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});