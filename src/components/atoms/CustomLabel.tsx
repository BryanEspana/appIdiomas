import { StyleSheet, Text, TextStyle } from "react-native";

type CustomLabelProps = {
    text: string; // Contenido del texto
    style?: TextStyle; // Estilo del texto
    fontSize?: number; // Tamaño de la fuente
    color?: string; //
  };
  
  export const CustomLabel: React.FC<CustomLabelProps> = ({ text, style, fontSize, color }) => (
    <Text style={[styles.label, style, { fontSize }, {color}]}>{text}</Text>
  );

  
  const styles = StyleSheet.create({
    label: {
      fontSize: 16, 
      color: '#333',
      marginVertical: 4,
    },
  });
  