import { StyleSheet, Text, TextStyle } from "react-native";

type CustomLabelProps = {
    text: string; // Contenido del texto
    style?: TextStyle; // Estilo del texto
  };
  
  export const CustomLabel: React.FC<CustomLabelProps> = ({ text, style }) => (
    <Text style={[styles.label, style]}>{text}</Text>
  );
  
  const styles = StyleSheet.create({
    label: {
      fontSize: 16,
      color: '#333',
      marginVertical: 4,
    },
  });
  