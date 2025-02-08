import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { CustomButton } from '../../../atoms/CustomButton';
import { CustomTextInput } from '../../../molecules/CustomTextInput';
import { CustomLabel } from '../../../atoms/CustomLabel';
import CustomDatePicker from '../../../atoms/CustomDatePicker';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../../../navigators/routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { PublicStackParamList } from '../../../../core/interfaces/types';

export const RegisterScreen = () => {
    type PublicNavigationProp = StackNavigationProp<PublicStackParamList>;
    const navigationPage = useNavigation<PublicNavigationProp>();
  

    //useStates
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (newDate: React.SetStateAction<Date>) => {
      setSelectedDate(newDate);
    };
  
    const handleBack = () => {
      navigationPage.goBack();
    };
    
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

         <CustomLabel text='Escribe tu fecha de nacimiento'/>
         <CustomDatePicker
            value={selectedDate}
            onDateChange={handleDateChange}
            placeholder="Haz clic para seleccionar una fecha"
         />

         <CustomLabel text='País' />
          <CustomTextInput
            placeholder="Introduce tu país"
            value={name}
            onChangeText={(text) => {
              setName(text);
              setError('');
            }}
            validationType="text"
            errorMessage="El país debe de ser válido"
          />
 
         <CustomButton 
           title='Registrarse'
           onPress={() => {}}
         />
 
         <View style={styles.center}>
           <CustomLabel 
             text='¿Ya tienes una cuenta?' 
             color='blue'  
             onPress={handleBack}           
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
      width: "100%",
      padding: 20,
      marginTop: 20,
      marginHorizontal: 20, 
      borderRadius: 10, 
      backgroundColor: "#fff", 
    },
    center: {
      alignItems: 'center',
    }
 
});