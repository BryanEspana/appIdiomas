import { Routes } from "../../navigators/routes";

// Definir los parámetros para el Stack de Home
export type HomeStackParamList = {
  HomeStack: undefined;
};

// Definir los parámetros para el Stack de Lessons
export type LessonsStackParamList = {
  LessonsStack: undefined;
  LessionDetails: { lessonId: number };
  Evaluation: { evaluationId: number };
  ResultEvaluation: { resultados: any[] };
};

// Definir los parámetros para el Stack de Profile
export type ProfileStackParamList = {
  ProfileStack: undefined;
  Notifications: undefined; // Pantalla de notificaciones
};

// Definir los parámetros para el BottomTabNavigator
export type PrivateTabParamList = {
  Home: undefined; 
  Lessons: undefined; 
  Profile: undefined; 
};

// Definir los parámetros para el Stack de Navegación Pública
export type PublicStackParamList = {
  Login: undefined; 
  Register: undefined; 
  ForgotPassword: undefined;
};