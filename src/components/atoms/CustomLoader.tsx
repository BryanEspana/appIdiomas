import { ActivityIndicator, StyleSheet } from "react-native";

type CustomLoaderProps = {
    size?: 'small' | 'large';
    color?: string;
  };
  
  export const CustomLoader: React.FC<CustomLoaderProps> = ({
    size = 'small',
    color = '#007BFF',
  }) => (
    <ActivityIndicator size={size} color={color} style= {styles.loader}/>
  );

  export default CustomLoader;

  const styles = StyleSheet.create({

      loader: {
          flex: 1,
          alignContent: 'center',
          textAlignVertical: 'center',
          justifyContent: 'center',
          alignItems: 'center',
      }
  });
  
  