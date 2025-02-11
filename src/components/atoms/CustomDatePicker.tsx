import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Platform, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import { es } from "date-fns/locale"; // Localización en español

interface CustomDatePickerProps {
  label?: string;
  value?: Date;
  onDateChange: (date: Date) => void;
  placeholder?: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ label, value, onDateChange, placeholder }) => {
  const [date, setDate] = useState(value || new Date());
  const [show, setShow] = useState(false);

const onChange = (event: any, selectedDate?: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios"); // Para que en iOS el picker quede visible
    setDate(currentDate);
    onDateChange(currentDate); // Llamar a la función onDateChange para pasar la fecha seleccionada
};

  const showDatePicker = () => {
    setShow(true);
  };

  // Formatear la fecha a español
  const formattedDate = format(date, "PPP", { locale: es });

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TouchableOpacity onPress={showDatePicker} style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={formattedDate}
          editable={false} // Para que el input no sea editable manualmente
          placeholder={placeholder || "Selecciona una fecha"}
        />
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={date}
          mode="date" // Modo 'date', puedes cambiarlo a 'time' o 'datetime' si lo necesitas
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: "center",
    width: "100%",
  },
  input: {
    fontSize: 16,
    color: "#333",
  },
});

export default CustomDatePicker;