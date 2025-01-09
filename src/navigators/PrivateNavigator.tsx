import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes } from './routes';
import { HomeScreen } from '../components/pages/home/HomeScreen';
import { PrivateTabParamList } from '../core/interfaces/types';

const Tab = createBottomTabNavigator<PrivateTabParamList>();

export function PrivateNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={Routes.PRIVATE.HOME} component={HomeScreen} />
    </Tab.Navigator>
  );
}