import { TextStyle, TouchableOpacity, View, Text, StyleSheet } from "react-native";

type CustomCheckboxProps = {
    isChecked: boolean;
    onToggle: () => void;
    label?: string;
    labelStyle?: TextStyle;
  };
  
  export const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
    isChecked,
    onToggle,
    label,
    labelStyle,
  }) => (
    <TouchableOpacity onPress={onToggle} style={styles.container}>
      <View
        style={[
          styles.checkbox,
          isChecked ? styles.checked : styles.unchecked,
        ]}
      />
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
    </TouchableOpacity>
  );
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 4,
    },
    checkbox: {
      width: 20,
      height: 20,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: '#ccc',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8,
    },
    checked: {
      backgroundColor: '#007BFF',
    },
    unchecked: {
      backgroundColor: '#fff',
    },
    label: {
      fontSize: 16,
      color: '#333',
    },
  });
  