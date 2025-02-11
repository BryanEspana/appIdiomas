import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { Button } from 'react-native';
import { AuthProvider } from './context/auth/AuthContext';
import { RootNavigator } from './navigators/RootNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';

export const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? DefaultTheme : DefaultTheme;

  return (
    <AuthProvider>
      <NavigationContainer theme={theme}>
        <RootNavigator />
        {/*
        <Button 
          title="Cambiar Tema" 
          onPress={() => setIsDarkMode(!isDarkMode)} 
        />
        */}
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;