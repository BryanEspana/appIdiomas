import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle, Text } from 'react-native';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { CustomImage } from '../atoms/CustomImage';
import { CustomIcon } from '../atoms/CustomIcon';
import { faBell } from '@fortawesome/free-solid-svg-icons'


type TopBarProps = {
  title: string;
  onLeftPress?: () => void; // Acción al presionar el botón izquierdo (ej. regresar)
  onRightPress?: () => void; // Acción al presionar el botón derecho (ej. abrir menú)
  leftIcon?: IconProp; // Ícono del botón izquierdo (nombre de ícono FontAwesome)
  rightIcon?: IconProp; // Ícono del botón derecho (nombre de ícono FontAwesome)
  style?: StyleProp<ViewStyle>; // Estilo personalizado del contenedor
};

const TopBar: React.FC<TopBarProps> = ({
  title,
  onLeftPress,
  onRightPress,
  leftIcon = 'arrow-left',
  rightIcon = 'bars',
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <CustomImage source='https://picsum.photos/201' width={50} height={50} />
      <Text style={styles.title}>{title}</Text>
      <CustomIcon 
        icon={faBell} 
        size={24} 
        color="#000" 
        onPress={() => console.log('Icon pressed')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#FFFF0',
  },
  title: {
    paddingStart: 16,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
    flex: 1,
  },
  iconButton: {
    padding: 8,
  },
});

export default TopBar;