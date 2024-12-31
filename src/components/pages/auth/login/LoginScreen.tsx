import React from 'react'
import { Alert, Text, View } from 'react-native'
import { CustomButton } from '../../../atoms/CustomButton'

export const LoginScreen = () => {
  return (
    <View>
        <Text>LoginScreen</Text>
        <CustomButton title="Presionar" onPress={()=>Alert.alert("Boton")}/>
    </View>
  )
}
