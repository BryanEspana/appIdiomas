import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import 'react-native-gesture-handler';
import { MyTabs, Navigation } from './navigators/Navigation';

export const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}
