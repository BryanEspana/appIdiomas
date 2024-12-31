import React, { useState } from 'react'
import { Alert, Text, View } from 'react-native'
import { CustomButton } from '../../atoms/CustomButton'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { CustomTextInput } from '../../atoms/CustomInput'
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
      <Text>HomeScreen</Text>
        <CustomButton title="Presionar" 
         icon={faUser}
         iconPosition="left"
         iconColor="black"
         iconSize={24}
          onPress={()=>Alert.alert("Boton")}/>
        <CustomTextInput
          placeholder="Introduce tu contraseña"
          value={password}
          onChangeText={setPassword}
          validationType="password"
          errorMessage="La contraseña debe ser de al menos 6 caracteres"
        />
      <CustomAvatar imageUrl="https://picsum.photos/200" size={100} borderColor="black" />
      <CustomDivider color="black" />
      <CustomIcon icon={faUser} size={50} color="black" />
      <CustomLabel text="Hola mundo" />
      <CustomLoader />
      <CustomSwitch isEnabled={true} onToggle={()=>Alert.alert("Switch")}/>
      <CustomImage source="https://picsum.photos/200" width={200} height={100} borderRadius={10} />
     
    </View>
  )
}
