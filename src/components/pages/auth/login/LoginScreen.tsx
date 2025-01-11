import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { CustomImage } from '../../../atoms/CustomImage'
import { CustomLabel } from '../../../atoms/CustomLabel'
import { CustomTextInput } from '../../../atoms/CustomInput'
import { CustomButton } from '../../../atoms/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '../../../../context/auth/AuthContext'
import { Routes } from '../../../../navigators/routes'
import { StackNavigationProp } from '@react-navigation/stack'
import { PublicStackParamList } from '../../../../core/interfaces/types'



export const LoginScreen = () => {
  type PublicNavigationProp = StackNavigationProp<PublicStackParamList>;
  const navigationPage = useNavigation<PublicNavigationProp>();
  const { login } = useAuth();
  //useStates
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, introduce un email válido');
      return;
    }
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    if (email === 'test@test.com' && password === '123456') {
      setError('');
      login();
    } else {
      setError('Credenciales incorrectas');
    }
    console.log('Email:', email, 'Password:', password);
  };

  const handleForgotPassword = () => {
    navigationPage.navigate(Routes.PUBLIC.FORGOT_PASSWORD);
  };

  const handleRegister = () => {
    navigationPage.navigate(Routes.PUBLIC.REGISTER);
  };
  
  return (
    <View style={styles.container}>
      <CustomImage source='https://picsum.photos/201' width={200} height={200} />
      <CustomLabel text='NOMBRE APP' fontSize={30} />
      <CustomLabel text='Aplicación de aprendizaje' fontSize={20} />
      
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

        <CustomLabel text='Contraseña' />
        <CustomTextInput
          placeholder="Introduce tu contraseña"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setError('');
          }}
          validationType="password"
          errorMessage="La contraseña debe de ser válida"
          secureTextEntry
        />

        <CustomButton 
          title='Iniciar sesión'
          onPress={handleLogin}
        />

        <View style={styles.containerRow}>
          <CustomLabel 
            text='¿Olvidaste tu contraseña?' 
            color='blue'  
            onPress={handleForgotPassword}
          />
          <CustomLabel 
            text='¿No tienes cuenta?' 
            color='blue' 
            onPress={handleRegister}
          />
        </View>
      </View>
    </View>
  );
};

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