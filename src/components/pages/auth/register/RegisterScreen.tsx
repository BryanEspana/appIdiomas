import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CustomButton } from '../../../atoms/CustomButton';
import { CustomImage } from '../../../atoms/CustomImage';
import { CustomTextInput } from '../../../atoms/CustomInput';
import { CustomLabel } from '../../../atoms/CustomLabel';
import { CustomDatePicker } from '../../../atoms/CustomDatePicker';

export const RegisterScreen = () => {


    //useStates
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
    
 return (
     <View style={styles.container}>
       <CustomLabel text='Crear cuenta' fontSize={40} />
       
       <View style={styles.formContainer}>
         {error ? <CustomLabel text={error} color="red" /> : null}
         
         <CustomLabel text='Nombre completo:' />
         <CustomTextInput
           placeholder="Introduce tu nombre completo"
           value={name}
           onChangeText={(text) => {
             setName(text);
             setError('');
           }}
           validationType="text"
           errorMessage="El nombre debe de ser válido"
         />
 
         
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
 
         <CustomLabel text='Confirmar contraseña' />
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

          <CustomDatePicker
            label="Select your birth date"
            value={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minimumDate={new Date(1900, 0, 1)}
            maximumDate={new Date()} 
            format="DD-MM-YYYY"
          />
 
         <CustomButton 
           title='Iniciar sesión'
           onPress={() => {}}
         />
 
         <View style={styles.containerRow}>
           <CustomLabel 
             text='¿Olvidaste tu contraseña?' 
             color='blue'  
             onPress={()=>{}}
           />
           <CustomLabel 
             text='¿No tienes cuenta?' 
             color='blue' 
             onPress={()=>{}}
           />
         </View>
       </View>
     </View>
   );
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