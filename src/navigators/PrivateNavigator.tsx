import React from "react";
import { SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Routes } from "./routes";
import { HomeScreen } from "../components/pages/home/HomeScreen";
import { CustomIcon } from "../components/atoms/CustomIcon";
import TopBar from "../components/organisms/CustomTopbar";
import LeccionesScreen from "../components/pages/lecciones/leccionesScreen";
import PerfilScreen from "../components/pages/Perfil/PerfilScreen";
import { faHome, faBook, faUser } from '@fortawesome/free-solid-svg-icons';
const Tab = createBottomTabNavigator();

export function PrivateNavigator() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <TopBar
          title="App Idiomas"
          onLeftPress={() => console.log("Left Button Pressed")}
          onRightPress={() => console.log("Right Button Pressed")}
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
          <Tab.Screen name={Routes.PRIVATE.HOME} component={HomeScreen} />
          <Tab.Screen name={Routes.PRIVATE.LESSONS} component={LeccionesScreen} />
          <Tab.Screen name={Routes.PRIVATE.PROFILE} component={PerfilScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </>
  );
}