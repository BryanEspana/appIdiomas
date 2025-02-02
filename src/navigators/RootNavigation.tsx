import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../context/auth/AuthContext'; // Asegúrate que la ruta sea correcta
import { PublicNavigator } from './PublicNavigator';
import { PrivateMainNavigator } from './PrivateNavigator';

const Stack = createStackNavigator();

export function RootNavigator() {
  const { isAuthenticated } = useAuth(); // Este es el punto donde se usa useAuth

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <Stack.Screen name="Private" component={PrivateMainNavigator} />
      ) : (
        <Stack.Screen name="Public" component={PublicNavigator} />
      )}
      
    </Stack.Navigator>
  );
}