import { TouchableOpacity, View, StyleSheet } from "react-native";

type CustomSwitchProps = {
    isEnabled: boolean;
    onToggle: () => void;
  };
  
  export const  CustomSwitch: React.FC<CustomSwitchProps> = ({ isEnabled, onToggle }) => (
    <TouchableOpacity onPress={onToggle} style={[styles.switch, isEnabled ? styles.enabled : styles.disabled]}>
      <View style={[styles.knob, isEnabled ? styles.knobEnabled : styles.knobDisabled]} />
    </TouchableOpacity>
  );
  
  const styles = StyleSheet.create({
    switch: {
      width: 50,
      height: 25,
      borderRadius: 15,
      backgroundColor: '#ccc',
      justifyContent: 'center',
      paddingHorizontal: 4,
    },
    enabled: {
      backgroundColor: '#007BFF',
    },
    disabled: {
      backgroundColor: '#ccc',
    },
    knob: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: '#fff',
    },
    knobEnabled: {
      alignSelf: 'flex-end',
    },
    knobDisabled: {
      alignSelf: 'flex-start',
    },
  });
  