import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { MyTabs } from './navigators/Navigation';
import { Button } from 'react-native'; // Para agregar un botón que cambie el tema

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = isDarkMode ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={theme}>
      <MyTabs />
      {/* Botón para cambiar el tema manualmente */}
      {/*<Button title="Cambiar Tema" onPress={() => setIsDarkMode(!isDarkMode)} />*/}
    </NavigationContainer>
  );
};
