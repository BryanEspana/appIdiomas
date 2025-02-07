import React from "react";
import { SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { Routes } from "./routes";
import { HomeScreen } from "../components/pages/home/HomeScreen";
import { CustomIcon } from "../components/atoms/CustomIcon";
import TopBar from "../components/organisms/CustomTopbar";
import LeccionesScreen from "../components/pages/lecciones/leccionesScreen";
import PerfilScreen from "../components/pages/Perfil/PerfilScreen";
import { faHome, faBook, faUser } from '@fortawesome/free-solid-svg-icons';
import NotificationScreen from "../components/pages/Perfil/Notifications";
import { useNavigation } from "@react-navigation/native";
import LessionDetailsScreen from "../components/pages/lecciones/LeccionDetail";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const LessonsStack = createStackNavigator();
const ProfileStack = createStackNavigator();

// Stack Navigator para la pestaña Home
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeStack" component={HomeScreen} />
      <HomeStack.Screen name={Routes.PRIVATE.LESSION_DETAIL} component={LessionDetailsScreen} />
      
    </HomeStack.Navigator>
  );
}

// Stack Navigator para la pestaña Lessons
function LessonsStackScreen() {
  return (
    <LessonsStack.Navigator screenOptions={{ headerShown: false }}>
      <LessonsStack.Screen name="LessonsStack" component={LeccionesScreen} />
    </LessonsStack.Navigator>
  );
}

// Stack Navigator para la pestaña Profile
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileStack" component={PerfilScreen} /> 
    </ProfileStack.Navigator>
  );
}

export function PrivateMainNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Privates" component={PrivateNavigator} />
      <Stack.Screen name="Notifications" component={NotificationScreen} options={{ headerShown: true, title: "Notificaciones" }}  />
    </Stack.Navigator>
  );
}

export function PrivateNavigator() {
  type MainStackNav = StackNavigationProp<any, "Notifications">;
  
    const navigation = useNavigation<MainStackNav>();

    const handleNoti = () => {
      navigation.navigate("Notifications");
      console.log("Notificaciones");
    }

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <TopBar
          title="App Idiomas"
          onLeftPress={() => console.log("Left Button Pressed")}
          onRightPress={() => console.log("Right Button Pressed")}
          handleNotification={handleNoti}
        />
        <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // Asignar icono basado en la ruta
            switch (route.name) {
              case Routes.PRIVATE.HOME:
                iconName = faHome;
                break;
              case Routes.PRIVATE.LESSONS:
                iconName = faBook;
                break;
              case Routes.PRIVATE.PROFILE:
                iconName = faUser;
                break;
              default:
                iconName = faHome;
            }

            // Retorna el CustomIcon con los estilos dinámicos
            return (
              <CustomIcon
                icon={iconName}
                size={size || 20}
                color={focused ? "#007BFF" : "#999"}
              />
            );
          },
          tabBarActiveTintColor: "#007BFF", // Color del texto cuando está activo
          tabBarInactiveTintColor: "#999", // Color del texto cuando no está activo
        })}
        
      >
          <Tab.Screen name={Routes.PRIVATE.HOME} component={HomeStackScreen} />
          <Tab.Screen name={Routes.PRIVATE.LESSONS} component={LessonsStackScreen} />
          <Tab.Screen name={Routes.PRIVATE.PROFILE} component={ProfileStackScreen} />
          
        </Tab.Navigator>
        </SafeAreaView>

  );
}