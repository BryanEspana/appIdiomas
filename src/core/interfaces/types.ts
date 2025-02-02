import { Routes } from "../../navigators/routes";

// Definir los parámetros para el Stack de Home
export type HomeStackParamList = {
  HomeStack: undefined;
  // Otras pantallas dentro del HomeStack
};

// Definir los parámetros para el Stack de Lessons
export type LessonsStackParamList = {
  LessonsStack: undefined;
  // Otras pantallas dentro del LessonsStack
};

// Definir los parámetros para el Stack de Profile
export type ProfileStackParamList = {
  ProfileStack: undefined;
  Notifications: undefined; // Pantalla de notificaciones
};

// Definir los parámetros para el BottomTabNavigator
export type PrivateTabParamList = {
  Home: undefined; // Corresponde al HomeStack
  Lessons: undefined; // Corresponde al LessonsStack
  Profile: undefined; // Corresponde al ProfileStack
};

// Definir los parámetros para el Stack de Navegación Pública
export type PublicStackParamList = {
  Login: undefined; // Pantalla de inicio de sesión
  Register: undefined; // Pantalla de registro
  ForgotPassword: undefined; // Pantalla de recuperación de contraseña
};