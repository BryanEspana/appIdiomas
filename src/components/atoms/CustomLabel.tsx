import { Pressable, PressableProps, StyleSheet, Text, TextProps, TextStyle } from "react-native";

type CustomLabelProps = {
    text: string; // Contenido del texto
    style?: TextStyle; // Estilo del texto
    fontSize?: number; // Tamaño de la fuente
    color?: string; // Color del texto
    onPress?: ()=> void; // Acción al presionar
  } & PressableProps & TextProps;
  
  export const CustomLabel: React.FC<CustomLabelProps> = ({
    text,
    style,
    fontSize,
    color,
    onPress,
    ...pressableProps
  }) => {
    return (
      <Pressable onPress={onPress} {...pressableProps}>
        <Text style={[styles.label, style, { fontSize, color }]}>{text}</Text>
      </Pressable>
    );
  };
  
  const styles = StyleSheet.create({
    label: {
      fontSize: 16,
      color: "#333",
      marginVertical: 4,
    },
  });