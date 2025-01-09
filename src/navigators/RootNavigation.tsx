import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../context/auth/AuthContext'; // Asegúrate que la ruta sea correcta
import { PublicNavigator } from './PublicNavigator';
import { PrivateNavigator } from './PrivateNavigator';

const RootStack = createStackNavigator();

export function RootNavigator() {
  const { isAuthenticated } = useAuth(); // Este es el punto donde se usa useAuth

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <RootStack.Screen name="Private" component={PrivateNavigator} />
      ) : (
        <RootStack.Screen name="Public" component={PublicNavigator} />
      )}
    </RootStack.Navigator>
  );
}