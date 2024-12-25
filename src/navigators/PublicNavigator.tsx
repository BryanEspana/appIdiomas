import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../components/pages/auth/login/LoginScreen';
import { Routes } from './routes';
import { RegisterScreen } from '../components/pages/auth/register/RegisterScreen';
import { ForgotPasswordScreen } from '../components/pages/auth/password/ForgotPasswordScreen';

const PublicStack = createStackNavigator();

export function PublicNavigator() {
  return (
    <PublicStack.Navigator screenOptions={{ headerShown: false }}>
      <PublicStack.Screen name={Routes.PUBLIC.LOGIN} component={LoginScreen} />
      <PublicStack.Screen name={Routes.PUBLIC.REGISTER} component={RegisterScreen} />
      <PublicStack.Screen name={Routes.PUBLIC.FORGOT_PASSWORD} component={ForgotPasswordScreen} />
    </PublicStack.Navigator>
  );
}
