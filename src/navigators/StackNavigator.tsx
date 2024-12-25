import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginScreen } from '../components/pages/auth/login/LoginScreen';

const PrivateStack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Permite navegar entre las pantallas de la aplicación
export function StackNavigator() {
  return (
    <PrivateStack.Navigator screenOptions={{ headerShown: false }}>
    <PrivateStack.Screen name="Tabs" component={TabNavigator} />
  </PrivateStack.Navigator>
  );

}

//Permite crear el bottom tab navigator
export function TabNavigator() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="HomeTab" component={StackNavigator} />
        <Tab.Screen name="ProfileTab" component={LoginScreen} />
      </Tab.Navigator>
    );
  }
