import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes } from './routes';
import { HomeScreen } from '../components/pages/home/HomeScreen';
import { PrivateTabParamList } from '../core/interfaces/types';
import TopBar from '../components/organisms/CustomTopbar';
import { SafeAreaView } from 'react-native-safe-area-context';
import LeccionesScreen from '../components/pages/lecciones/leccionesScreen';
import PerfilScreen from '../components/pages/Perfil/PerfilScreen';

const Tab = createBottomTabNavigator<PrivateTabParamList>();

export function PrivateNavigator() {
  return (
    <>
    <SafeAreaView  style={{ flex: 1 }}>
    <TopBar
      title="App idiomas"
      onLeftPress={() => console.log('Left Button Pressed')}
      onRightPress={() => console.log('Right Button Pressed')} /><Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name={Routes.PRIVATE.HOME} component={HomeScreen} />
        <Tab.Screen name={Routes.PRIVATE.LESSONS} component={LeccionesScreen} />
        <Tab.Screen name={Routes.PRIVATE.PROFILE} component={PerfilScreen} />
      </Tab.Navigator>
    </SafeAreaView>
    </>



  );
}