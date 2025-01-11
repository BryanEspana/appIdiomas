import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { CustomImage } from '../../../atoms/CustomImage'
import { CustomLabel } from '../../../atoms/CustomLabel'
import { CustomTextInput } from '../../../atoms/CustomInput'
import { CustomButton } from '../../../atoms/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { PublicStackParamList } from '../../../../core/interfaces/types'



export const ForgotPasswordScreen = () => {
  type PublicNavigationProp = StackNavigationProp<PublicStackParamList>;
  const navigationPage = useNavigation<PublicNavigationProp>();

  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleBack = () => {
    navigationPage.goBack();
  }

  return (
     <View style={styles.container}>
          <CustomImage source='https://picsum.photos/201' width={200} height={200} />
          <CustomLabel text='Recuperación de contraseña' fontSize={30} />
          
          <View style={styles.formContainer}>
            {error ? <CustomLabel text={error} color="red" /> : null}
            
            <CustomLabel text='Correo electrónico' />
            <CustomTextInput
              placeholder="Introduce tu correo electrónico"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setError('');
              }}
              validationType="email"
              errorMessage="El correo electrónico debe de ser válido"
            />
    
            <CustomButton 
              title='Cambiar contraseña'
              onPress={()=>{}}
            />

            <CustomButton 
              title='Regresar'
              onPress={handleBack}
            />

          </View>
        </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    formContainer: {
      width: "100%", // Haz que ocupe todo el ancho disponible
      padding: 20, // Agrega espacio interno
      marginTop: 20, // Espacio superior para separarlo de otros elementos
      marginHorizontal: 20, // Margen horizontal para separarlo de los bordes
      borderRadius: 10, // Bordes redondeados
      backgroundColor: "#fff", // Fondo blanco para destacar el formulario
    },

});