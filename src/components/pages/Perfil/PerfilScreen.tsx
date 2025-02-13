import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { CustomLabel } from '../../atoms/CustomLabel';
import { CustomAvatar } from '../../atoms/CustomAvatar';
import { CustomTextInput } from '../../molecules/CustomTextInput';
import { CustomButton } from '../../atoms/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LessonsStackParamList } from '../../../core/interfaces/types';
import { Routes } from '../../../navigators/routes';
import { useAuth } from '../../../context/auth/AuthContext';

const PerfilScreen = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState('');
    
  const { logout } = useAuth();

    return (
        <ScrollView>
            <View style={styles.container}>
                <CustomAvatar 
                    imageUrl='https://picsum.photos/201'
                    size={120}
                ></CustomAvatar>
                <CustomLabel text='Nombre de usuario' fontSize={24} ></CustomLabel>
                <CustomLabel text='nombreusuario@gmail.com' fontSize={16} ></CustomLabel>
            </View>
            <View style={styles.containerVertical}>
                <CustomLabel text='Configuración de perfil' fontSize={28} ></CustomLabel>
                    <CustomLabel text='Nombre completo:' />
                        <CustomTextInput
                        placeholder=""
                        value={name}
                        onChangeText={(text) => {
                            setName(text);
                            setError('');
                        }}
                        validationType="text"
                        errorMessage="El nombre debe de ser válido"
                        />
                    <CustomLabel text='Correo electrónico:' />
                        <CustomTextInput
                        placeholder=""
                        value={email}
                        onChangeText={(text) => {
                            setEmail(text);
                            setError('');
                        }}
                        validationType="text"
                        errorMessage="El correo debe de ser válido"
                        />
                    <CustomLabel text='Fecha de nacimiento:' />
                        <CustomTextInput
                        placeholder=""
                        value={date}
                        onChangeText={(text) => {
                            setDate(text);
                            setError('');
                        }}
                        validationType="text"
                        errorMessage="El correo debe de ser válido"
                        />
                       <TouchableOpacity 
                            style={styles.logoutButton} 
                            onPress={logout}
                        >
                            <Text style={styles.logoutText}>Cerrar Sesión</Text>
                        </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#00000010',
    },
    containerVertical: {
        flex: 1,
        marginHorizontal: 20,
        paddingVertical: 20,
    },
    text: {
        fontSize: 20,
        color: '#000',
    },
      logoutButton: {
    backgroundColor: '#950606',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PerfilScreen;