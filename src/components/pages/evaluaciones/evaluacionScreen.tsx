import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { CustomImage } from '../../atoms/CustomImage';
import SoundBar from '../../molecules/soundBar';
import * as Progress from 'react-native-progress';

type EvaluacionRouteProp = RouteProp<{ Evaluation: { evaluationId: number } }, 'Evaluation'>;

const preguntas = [
    {
        id: 1,
        texto: '¿Cuál es la traducción del audio?',
        opciones: ['Hello World', 'Hola Mundo', 'Hola tierra '],
        respuestaCorrecta: 0,
    },
    {
        id: 2,
        texto: '¿Qué significa "Hello" en español?',
        opciones: ['Adiós', 'Hola', 'Gracias'],
        respuestaCorrecta: 1,
    },
    {
        id: 2,
        texto: '¿Qué significa "Word" en español?',
        opciones: ['Mundo', 'Tierra', 'Planeta'],
        respuestaCorrecta: 0,
    }
];

const EvaluacionesScreen = () => {
    const route = useRoute<EvaluacionRouteProp>();
    const [indicePregunta, setIndicePregunta] = useState(0);
    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<number | null>(null);
    const [progreso, setProgreso] = useState(0);
    const preguntaActual = preguntas[indicePregunta];
    const totalPreguntas = preguntas.length;
    const { evaluationId } = route.params;
    const imageSource = "https://picsum.photos/201";
    const [progress, setProgress] = useState(0.3); // Simulación del progreso (40%)

     const manejarSiguiente = () => {
        if (indicePregunta < totalPreguntas - 1) {
            setIndicePregunta(indicePregunta + 1);
            setRespuestaSeleccionada(null);
            setProgreso((indicePregunta + 1) / totalPreguntas);
        } else {
            Alert.alert('Evaluación completa', 'Has completado la evaluación');
        }
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pregunta #{preguntaActual.id}</Text>
            <Text style={styles.question}>{preguntaActual.texto}</Text>
            <CustomImage source={'https://picsum.photos/200'} width={250} height={150} />
            <SoundBar />
            <Text>¿Cual es la traducción del audio?</Text>
            {/* Opciones de respuesta */}
            {preguntaActual.opciones.map((opcion, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.option,
                        respuestaSeleccionada === index && styles.selectedOption
                    ]}
                    onPress={() => setRespuestaSeleccionada(index)}
                >
                    <Text>{opcion}</Text>
                </TouchableOpacity>
            ))}
            
            <TouchableOpacity
                style={styles.button}
                onPress={manejarSiguiente}
                disabled={respuestaSeleccionada === null}
            >
                <Text style={styles.buttonText}>Siguiente Pregunta</Text>
            </TouchableOpacity>

            {/* Progreso */}
            <View style={styles.progressContainer}>
                <Text style={styles.progressLabel}>Progreso de la evaluación</Text>
                <Progress.Bar progress={progreso} color="#000" width={370} height={12} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    question: {
        fontSize: 18,
        marginVertical: 10,
        textAlign: 'center',
    },
    option: {
        width: '90%',
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginVertical: 5,
        alignItems: 'center',
    },
    selectedOption: {
        backgroundColor: '#d3d3d3',
    },
    button: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#000',
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    progressContainer: {
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
    },
    progressLabel: {
        fontSize: 16,
        marginBottom: 5,
    }
});

export default EvaluacionesScreen;