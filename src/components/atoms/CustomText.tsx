import React from 'react';
import { Text as RNText, StyleSheet, TextStyle, StyleProp } from 'react-native';

type Props = {
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
  [key: string]: any;
};

const Text = ({ style, children, ...props }: Props) => {
  return (
    <RNText style={StyleSheet.flatten([styles.txt, style])} {...props}>
      {children}
    </RNText>
  );
};

//Tamaño predeterminado
const styles = StyleSheet.create({
  txt: {
    fontFamily: 'System',
    fontSize: 14, 
    color: '#000', 
  },
});

export default Text;