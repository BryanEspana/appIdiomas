import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LessonsStackParamList } from '../../../core/interfaces/types';

interface Resultado {
    id: number;
    pregunta: string;
    respuestaUsuario: string;
    respuestaCorrecta: string | number;
    correcta: boolean;
}

const ResultadosScreen = () => {
    const navigation = useNavigation<StackNavigationProp<LessonsStackParamList>>();
    const route = useRoute();
    const { resultados } = route.params as { resultados: Resultado[] };

    const totalCorrectas = resultados.filter(r => r.correcta).length;
    const nota = Math.round((totalCorrectas / resultados.length) * 100);

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Resultados</Text>

                <View style={styles.tableContainer}>
                    <View style={styles.tableHeader}>
                        <Text style={styles.tableHeaderText}>Pregunta</Text>
                        <Text style={styles.tableHeaderText}>Tu Respuesta</Text>
                        <Text style={styles.tableHeaderText}>Resultado</Text>
                    </View>
                    
                    {/* Reemplazamos FlatList por un map directo */}
                    {resultados.map((item) => (
                        <View key={item.id} style={styles.tableRow}>
                            <Text style={styles.tableText}>{item.pregunta}</Text>
                            <Text style={styles.tableText}>{item.respuestaUsuario}</Text>
                            <Text style={[styles.tableText, item.correcta ? styles.correcto : styles.incorrecto]}>
                                {item.correcta ? '✔️' : '❌'}
                            </Text>
                        </View>
                    ))}
                </View>

                <Text style={styles.notaLabel}>Nota:</Text>
                <View style={styles.notaContainer}>
                    <Text style={styles.notaTexto}>{nota}/100</Text>
                </View>

                <TouchableOpacity
                    style={styles.botonSalir}
                    onPress={() => navigation.navigate('LessonsStack')}
                >
                    <Text style={styles.botonSalirTexto}>Salir</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    tableContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden',
    },
    tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#000',
        paddingVertical: 10,
    },
    tableHeaderText: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    tableRow: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    tableText: {
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
    },
    correcto: {
        color: 'green',
        fontWeight: 'bold',
    },
    incorrecto: {
        color: 'red',
        fontWeight: 'bold',
    },
    notaLabel: {
        fontSize: 18,
        marginTop: 20,
    },
    notaContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    notaTexto: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
    },
    botonSalir: {
        marginTop: 30,
        paddingVertical: 15,
        paddingHorizontal: 40,
        backgroundColor: '#000',
        borderRadius: 10,
        marginBottom: 20,
    },
    botonSalirTexto: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ResultadosScreen;