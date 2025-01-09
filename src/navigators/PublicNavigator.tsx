import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './routes';
import { LoginScreen } from '../components/pages/auth/login/LoginScreen';
import { ForgotPasswordScreen } from '../components/pages/auth/password/ForgotPasswordScreen';
import { RegisterScreen } from '../components/pages/auth/register/RegisterScreen';
import { PublicStackParamList } from '../core/interfaces/types';

const PublicStack = createStackNavigator<PublicStackParamList>();

export function PublicNavigator() {
  return (
    <PublicStack.Navigator screenOptions={{ headerShown: false }}>
      <PublicStack.Screen name={Routes.PUBLIC.LOGIN} component={LoginScreen} />
      <PublicStack.Screen name={Routes.PUBLIC.REGISTER} component={RegisterScreen} />
      <PublicStack.Screen 
        name={Routes.PUBLIC.FORGOT_PASSWORD} 
        component={ForgotPasswordScreen} 
      />
    </PublicStack.Navigator>
  );
}