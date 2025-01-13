import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { CustomPieChart } from '../../atoms/Charts/PieCharts';
import { CustomLabel } from '../../atoms/CustomLabel';
import { LessonCard } from '../../organisms/LessonCards';
import { CustomIcon } from '../../atoms/CustomIcon';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import * as Progress from 'react-native-progress';
import CustomLoader from '../../atoms/CustomLoader';

const LeccionesScreen = () => {

    //variables
    const screenWidth = Dimensions.get('window').width;
    const [isLoading, setIsLoading] = useState(true);
      

     //Metodos para llamar a la API
        const [lessons, setLessons] = useState<
        { id: number; image: string; name: string, description: string }[]
      >([]);
    
      useEffect(() => {
        setTimeout(() => {
          setLessons([
            { id: 1, image: "https://picsum.photos/201", name: "Lección 1", description: 'Lección 1 lorem impsun' },
            { id: 2, image: "https://picsum.photos/202", name: "Lección 2", description: 'Lección 2 lorem impsun' },
            { id: 3, image: "https://picsum.photos/203", name: "Lección 3", description: 'Lección 3 lorem impsun' },
          ]);
          setIsLoading(false);
        }, 1000);
      }, []);
    
    return (
        <ScrollView>
             <View style={styles.container}>
               {isLoading ? (
                     <CustomLoader size="large" color="#007BFF" />
                   ) : (
                    <View>
                          <View > 
                 <CustomLabel 
                   text='Nombre del curso'
                   fontSize={24} 
                   onPress={()=>{}}/>
               </View>

                <View style={styles.containerRowSpaceBtw}> 
                 <CustomLabel 
                   text='Progreso del curso'
                   fontSize={15} 
                   onPress={()=>{}}/>
                <CustomIcon
                     icon={faEye} 
                     size={20}
                     color="#000"
                     onPress={()=>{}}
                  /> 
               </View>
                <Progress.Bar
                        progress={0.3}
                        width={screenWidth - 32} // Resta un margen opcional (32px)
                        color="#007BFF" 
                        borderWidth={1}
                        borderColor="#ccc"
                        unfilledColor="#f3f3f3" 
                        height={12} 
                    />
             
               {/*-------------------Lecciones-------------------------- */}
               <CustomLabel 
                   style={{marginTop: 20}}
                   text='Lecciones disponibles'
                   fontSize={24} 
                   onPress={()=>{}}/>
               <View >
              {lessons.map((lesson) => (
               <LessonCard
                    key={lesson.id}
                    imageSource={lesson.image}
                    descriptionLesson={lesson.description}
                    lessonName={lesson.name}
                    onPress={() => console.log(`Seleccionaste ${lesson.name}`)}
                    onButtonPress={() => console.log("Ingresar a la lección")}
               />
             ))}
               </View>
                {/*-------------------Evaluaciones-------------------------- */}
               <CustomLabel 
                   text='Evaluaciones disponibles'
                   fontSize={24} 
                   onPress={()=>{}}/>
               <View >
              {lessons.map((lesson) => (
               <LessonCard
                 key={lesson.id}
                 imageSource={lesson.image}
                 lessonName={lesson.name}
                 descriptionLesson={lesson.description}
                 onButtonPress={() => console.log("Ingresar a la lección")}
               />
             ))}
               </View>
                    {/*-------------------Evaluaciones-------------------------- */}
               <CustomLabel 
                   text='Información del curso'
                   fontSize={24} 
                   onPress={()=>{}}/>
               <View >
              {lessons.map((lesson) => (
               <LessonCard
                key={lesson.id}
                imageSource={lesson.image}
                lessonName={lesson.name}
                descriptionLesson={lesson.description}
                onPress={() => console.log(`Seleccionaste ${lesson.name}`)}
                onButtonPress={() => console.log("Ingresar a la lección")}

               />
             ))}
               </View>
                    </View>
                   )}
             </View>
           </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    },
    containerRowSpaceBtw:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      alignItems: 'flex-end',
      paddingVertical: 10,
    },
    containerRow:{
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
      gap: 10,
    },
    containerChart:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      overflow: 'scroll',
      }
});

export default LeccionesScreen;