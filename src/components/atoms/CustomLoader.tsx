import { ActivityIndicator } from "react-native";

type CustomLoaderProps = {
    size?: 'small' | 'large';
    color?: string;
  };
  
  export const CustomLoader: React.FC<CustomLoaderProps> = ({
    size = 'small',
    color = '#007BFF',
  }) => (
    <ActivityIndicator size={size} color={color} />
  );
  