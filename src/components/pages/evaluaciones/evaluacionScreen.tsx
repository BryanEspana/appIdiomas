import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, TextInput } from 'react-native';
import { CustomImage } from '../../atoms/CustomImage';
import SoundBar from '../../molecules/soundBar';
import * as Progress from 'react-native-progress';
import { CustomIcon } from '../../atoms/CustomIcon';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import { LessonsStackParamList } from '../../../core/interfaces/types';

const preguntas = [
    {
        id: 1,
        tipo: 'seleccion',
        texto: '¿Cuál es la traducción del audio?',
        opciones: ['Hello World', 'Hola Mundo', 'Hola tierra '],
        respuestaCorrecta: 0,
        imagen: 'https://picsum.photos/200',
        audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    },
    {
        id: 2,
        tipo: 'seleccion',
        texto: '¿Qué significa "Hello" en español?',
        opciones: ['Adiós', 'Hola', 'Gracias'],
        respuestaCorrecta: 1,
        imagen: 'https://picsum.photos/201',
        audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
    },
    {
        id: 3,
        tipo: 'imagen',
        texto: 'Pronuncia lo que ves en la imagen',
        imagen: 'https://picsum.photos/202',
        respuestaCorrecta: 'cat', // Añadida respuesta correcta para validación
        respuestaUsuario: '' // Campo para almacenar la respuesta del usuario (se llenaría con el análisis del audio)
    },
    {
        id: 4,
        tipo: 'escrito',
        texto: '¿Cómo se llama este objeto en inglés?',
        imagen: 'https://picsum.photos/203',
        respuestaCorrecta: 'dog'
    }
];

const EvaluacionesScreen = () => {
    const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<number | null>(null);
    const [respuestaEscrita, setRespuestaEscrita] = useState('');
    const [respuestaAudio, setRespuestaAudio] = useState(''); // Para almacenar la respuesta del audio
    const navigation = useNavigation<StackNavigationProp<LessonsStackParamList>>();
    const [resultados, setResultados] = useState<any[]>([]);
    const [indicePregunta, setIndicePregunta] = useState(0);
    const [progreso, setProgreso] = useState(0);

    const route = useRoute();

    const preguntaActual = preguntas[indicePregunta];
    const totalPreguntas = preguntas.length;
    
const manejarSiguiente = () => {
    let esCorrecta = false;
    let respuestaUsuario = '';

    // Validar que haya una respuesta según el tipo de pregunta
    if (preguntaActual.tipo === 'seleccion' && respuestaSeleccionada !== null) {
        esCorrecta = respuestaSeleccionada === preguntaActual.respuestaCorrecta;
        respuestaUsuario = preguntaActual.opciones ? preguntaActual.opciones[respuestaSeleccionada] : '';
    } else if (preguntaActual.tipo === 'escrito' && respuestaEscrita.trim() !== '') {
        respuestaUsuario = respuestaEscrita.trim();
        esCorrecta = respuestaEscrita.trim().toLowerCase() === String(preguntaActual.respuestaCorrecta).toLowerCase();
    } else if (preguntaActual.tipo === 'imagen') {
        respuestaUsuario = respuestaAudio || 'Audio enviado';
        esCorrecta = respuestaAudio.toLowerCase() === String(preguntaActual.respuestaCorrecta).toLowerCase();
    }

    // Si no hay respuesta para preguntas de tipo escrito o selección, mostrar alerta
    if ((preguntaActual.tipo === 'escrito' && respuestaEscrita.trim() === '') ||
        (preguntaActual.tipo === 'seleccion' && respuestaSeleccionada === null)) {
        Alert.alert('Error', 'Por favor, proporciona una respuesta antes de continuar');
        return;
    }

    // Guardar el resultado
    const nuevoResultado = {
        id: preguntaActual.id,
        pregunta: preguntaActual.texto,
        respuestaUsuario: respuestaUsuario,
        respuestaCorrecta: preguntaActual.respuestaCorrecta,
        correcta: esCorrecta
    };

    setResultados(prevResultados => [...prevResultados, nuevoResultado]);

    if (indicePregunta < totalPreguntas - 1) {
        setIndicePregunta(indicePregunta + 1);
        setRespuestaSeleccionada(null);
        setRespuestaEscrita('');
        setRespuestaAudio('');
        setProgreso((indicePregunta + 1) / totalPreguntas);
    } else {
        // Asegurarnos de que todos los resultados estén incluidos antes de navegar
        navigation.navigate('ResultEvaluation', { 
            resultados: [...resultados, nuevoResultado] 
        });
    }
};
    const simularEnvioAudio = () => {
        // Aquí simularíamos el envío y análisis del audio
        setRespuestaAudio(String(preguntaActual.respuestaCorrecta)); // Simulación
        Alert.alert('Audio grabado', 'Audio enviado para análisis');
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pregunta #{preguntaActual.id}</Text>

            {preguntaActual.tipo === 'seleccion' ? (
                <>
                    <Text style={styles.question}>{preguntaActual.texto}</Text>
                    <CustomImage source={preguntaActual.imagen} width={250} height={150} />
                    <SoundBar audioSource={preguntaActual.audio} />
                    {preguntaActual.opciones && preguntaActual.opciones.map((opcion, index) => (
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
                </>
            ) : preguntaActual.tipo === 'imagen' ? (
                <>
                    <CustomImage source={preguntaActual.imagen} width={250} height={150} />
                    <Text style={styles.question}>{preguntaActual.texto}</Text>
                    <TouchableOpacity 
                        style={styles.micButton}
                        onPress={simularEnvioAudio}
                    >
                        <CustomIcon icon={faMicrophone} size={32} color="#fff" />
                    </TouchableOpacity>
                </>
            ) : preguntaActual.tipo === 'escrito' ? (
                <>
                    <Text style={styles.question}>{preguntaActual.texto}</Text>
                    <CustomImage source={preguntaActual.imagen} width={250} height={150} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Escribe tu respuesta aquí"
                        value={respuestaEscrita}
                        onChangeText={setRespuestaEscrita}
                    />
                </>
            ) : null}
            
            <TouchableOpacity
                style={styles.button}
                onPress={manejarSiguiente}
            >
                <Text style={styles.buttonText}>
                    {indicePregunta < totalPreguntas - 1 ? 'Siguiente Pregunta' : 'Finalizar'}
                </Text>
            </TouchableOpacity>
            
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
    },
    micButton: {
        marginTop: 20,
        padding: 15,
        backgroundColor: '#ff5733',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        width: '90%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        fontSize: 16,
        textAlign: 'center',
    }
});

export default EvaluacionesScreen;