import React, { useEffect, useState } from 'react'
import {Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { CustomLabel } from '../../atoms/CustomLabel'
import { CustomLineChart } from '../../atoms/Charts/LineCharts';
import { CustomBarChart } from '../../atoms/Charts/BarCharts';
import { CustomPieChart } from '../../atoms/Charts/PieCharts';
import { CustomImage } from '../../atoms/CustomImage';
import { LessonCard } from '../../organisms/LessonCards';
import { CustomLoader } from '../../atoms/CustomLoader';
export const HomeScreen = () => {

  //variables
    const [isLoading, setIsLoading] = useState(true);
    const [lessons, setLessons] = useState<
    { id: number; image: string; name: string, description: string }[]
  >([]);

  //Metodos para llamar a la API

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
           <View style={styles.containerRowSpaceBtw}> 
          <CustomLabel 
            text='Tu progreso'
            fontSize={24} 
            onPress={()=>{}}/>
          <CustomLabel 
            text='Cambiar curso' 
            color='blue'  
            fontSize={14}
            onPress={()=>{}}/>  
        </View>
        {/*-------------------Gráficos-------------------------- */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.containerChart}>
           {/* <CustomLineChart
            title=""
            labels={["A", "B", "C", "D"]}
            data={[10, 20, 30, 40]}
            width={170} // Ajustamos el ancho para que quepa en la fila
            height={160} // Altura más pequeña
            showLabels={true}
            backgroundColor='#fff000'
          />*/}
          {/* Gráfico de barras 
           <CustomBarChart
            title=""
            labels={["Abr", "May", "Jun"]}
            data={[420, 280, 360]}
            width={170}
            height={160}
          />
          */}
           <CustomPieChart
            title=""
            data={[
              { name: "A", value: 45, color: "#FF9800" },
              { name: "B", value: 25, color: "#4CAF50" },
              { name: "C", value: 30, color: "#2196F3" },
            ]}
            width={180}
            height={100}
          />
           <CustomPieChart
            title=""
            data={[
              { name: "A", value: 45, color: "#4CAF50" },
              { name: "B", value: 25, color: "#2196F3" },
              { name: "C", value: 30, color: "#FF9800" },
            ]}
            width={180}
            height={100}
          />
           <CustomPieChart
            title=""
            data={[
              { name: "A", value: 45, color: "#4CAF50" },
              { name: "B", value: 25, color: "#2196F3" },
              { name: "C", value: 30, color: "#FF9800" },
            ]}
            width={180}
            height={100}
          />
        </View>
        </ScrollView>
        {/*-------------------Lecciones-------------------------- */}
        <CustomLabel 
            text='Lecciones completas'
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
        />
      ))}
        </View>
         {/*-------------------Evaluaciones-------------------------- */}
        <CustomLabel 
            text='Evaluaciones completas'
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
        />
      ))}
        </View>
        </View>
      )}
      
        
      </View>
    </ScrollView>
  )
}


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