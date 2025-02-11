import { ViewStyle, View } from "react-native";

type CustomDividerProps = {
    color?: string;
    thickness?: number;
    style?: ViewStyle;
  };
  
  export const CustomDivider: React.FC<CustomDividerProps> = ({
    color = '#ccc',
    thickness = 1,
    style,
  }) => (
    <View
      style={[
        {
          height: thickness,
          backgroundColor: color,
          marginVertical: 8,
        },
        style,
      ]}
    />
  );
  