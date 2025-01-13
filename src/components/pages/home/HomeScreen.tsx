import React, { useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { CustomButton } from '../../atoms/CustomButton'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { CustomAvatar } from '../../atoms/CustomAvatar'
import { CustomDivider } from '../../atoms/CustomDivider'
import { CustomIcon } from '../../atoms/CustomIcon'
import { CustomLabel } from '../../atoms/CustomLabel'
import { CustomLoader } from '../../atoms/CustomLoader'
import { CustomSwitch } from '../../atoms/CustomSwitch'
import { CustomImage } from '../../atoms/CustomImage'

export const HomeScreen = () => {
  const [password, setPassword] = useState('');
  return (
    <View>
      <View style={styles.containerRow}> 
        <CustomLabel 
        text='Tu progreso'
        fontSize={20} 
        onPress={()=>{}}/>
      <CustomLabel 
        text='Cambiar curso' 
        color='blue'  
        fontSize={14}
        onPress={()=>{}}/>
      </View>
      <View>
        <CustomLabel
        style={{paddingVertical: 40, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center', alignContent: 'center', paddingHorizontal: 20}} 
        text='Sección de graficos' 
        fontSize={22}
        onPress={()=>{}}/>
      </View>
        <CustomLabel 
        style={{paddingStart: 20, paddingVertical: 20}}
        text='Lecciones completas'
        fontSize={20} 
        onPress={()=>{}}/>

 
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
      alignContent: 'center',
      alignItems: 'flex-end',
      paddingHorizontal: 20,
      
    }
});