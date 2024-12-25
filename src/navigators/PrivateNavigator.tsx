import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../components/pages/home/HomeScreen';
import { Routes } from './routes';

const PrivateStack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator (Home y Profile)
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={Routes.PRIVATE.HOME} component={HomeScreen} />
    </Tab.Navigator>
  );
}

// Stack Navigator para las rutas privadas
export function PrivateNavigator() {
  return (
    <PrivateStack.Navigator screenOptions={{ headerShown: false }}>
      <PrivateStack.Screen name="MainTabs" component={TabNavigator} />
    </PrivateStack.Navigator>
  );
}
