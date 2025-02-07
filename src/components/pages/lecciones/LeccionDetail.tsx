import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ProgressBarAndroidBase } from 'react-native';
import { CustomImage } from '../../atoms/CustomImage';
import SoundBar from '../../molecules/soundBar';
import { CustomIcon } from '../../atoms/CustomIcon';
import { faChevronLeft, faChevronRight, faRefresh } from "@fortawesome/free-solid-svg-icons";
import * as Progress from 'react-native-progress';

type LessionDetailsRouteProp = RouteProp<{ LessionDetails: { lessonId: number } }, 'LessionDetails'>;


const LessionDetailsScreen = () => {
    const route = useRoute<LessionDetailsRouteProp>();
    const { lessonId } = route.params;
    const imageSource = "https://picsum.photos/201";
    const [progress, setProgress] = useState(0.3); // Simulación del progreso (40%)

    return (
        <View style={styles.container}>
            <View style={styles.divLeft}>
            <Text style={styles.title}>Lección #{lessonId}</Text>
            </View>
            <View style={styles.containerLeccion}>
            <CustomImage source={imageSource} width={300} height={300} />
            <Text 
            numberOfLines={1} 
            adjustsFontSizeToFit 
            style={styles.Subtitle}
            >
                Episodio 2: clase #2 - Estudio de lenguajes
            </Text>
            <SoundBar></SoundBar>
            {/* Botones de control */}
            <View style={styles.buttonContainer}>
                <CustomIcon icon={faChevronLeft} onPress={() => console.log('Regresar')} />
                <CustomIcon icon={faRefresh}  onPress={() => console.log('Repetir')} />
                <CustomIcon icon={faChevronRight}  onPress={() => console.log('Siguiente')} />
            </View>
            </View>

               {/* Progreso de la lección */}
            <View style={styles.progressContainer}>
                <Text style={styles.progressLabel}>Progreso de la lección</Text>
                <Progress.Bar progress={progress} color="#000" width={370} height={12}  />
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    containerLeccion:{
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        
    },
    divLeft:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
        paddingVertical: 20,
        paddingLeft: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',

    },
    Subtitle:{
         fontSize: 28,
        fontWeight: 'bold',
        flexShrink: 1, 
        paddingVertical: 10, 
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 20,
    },
      progressContainer: {
        width: '100%',
        marginTop: 20,
        padding: 20,
        alignItems: 'center',
    },
    progressLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
  
});

export default LessionDetailsScreen;