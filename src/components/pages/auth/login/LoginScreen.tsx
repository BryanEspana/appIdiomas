import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { CustomImage } from '../../../atoms/CustomImage'
import { CustomLabel } from '../../../atoms/CustomLabel'
import { CustomTextInput } from '../../../atoms/CustomInput'
import { CustomButton } from '../../../atoms/CustomButton'



export const LoginScreen = () => {

  //useStates
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <View style={styles.container}>
        <CustomImage source='https://picsum.photos/201' width={200} height={200} />
        <CustomLabel text='NOMBRE APP' fontSize={30} />
        <CustomLabel text='Aplicación de aprendizaje' fontSize={20} />
        {/* Formulario */}
        <View style={styles.formContainer}>
          {/* Email */}
          <CustomLabel text='Correo electrónico' />
          <CustomTextInput
            placeholder="Introduce tu correo electrónico"
            value={email}
            onChangeText={setEmail}
            validationType="email"
            errorMessage="El correo electrónico debe de ser válido"
          />
            {/* Password */}
            <CustomLabel text='Contraseña' />
            <CustomTextInput
              placeholder="Introduce tu contraseña"
              value={password}
              onChangeText={setPassword}
              validationType="password"
              errorMessage="La contraseña debe de ser válida"
            />
            {/*Boton Logear*/}
            <CustomButton 
            title='Iniciar sesión'
            onPress={handleLogin}/>
            <View style={styles.containerRow}>
              <CustomLabel text='¿Olvidaste tu contraseña?' color='blue'  />
              <CustomLabel text='¿No tienes cuenta?'  color='blue' />
            </View>
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
    containerRow:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
});