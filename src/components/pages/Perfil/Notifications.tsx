import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CustomLabel } from '../../atoms/CustomLabel';
import { CustomAvatar } from '../../atoms/CustomAvatar';
import { LessonCard } from '../../organisms/LessonCards';
import CustomLoader from '../../atoms/CustomLoader';

const NotificationScreen = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [lessons, setLessons] = useState<
    { id: number; image: string; name: string, description: string }[]
  >([]);

    useEffect(() => {
      setTimeout(() => {
        setLessons([
          { id: 1, image: "https://picsum.photos/204", name: "Notificacion 1", description: 'Lección 1 lorem impsun' },
          { id: 2, image: "https://picsum.photos/205", name: "Notificacion 2", description: 'Lección 2 lorem impsun' },
          { id: 3, image: "https://picsum.photos/206", name: "Notificacion 3", description: 'Lección 3 lorem impsun' },
          { id: 4, image: "https://picsum.photos/206", name: "Notificacion 3", description: 'Lección 3 lorem impsun' },
          { id: 5, image: "https://picsum.photos/206", name: "Notificacion 3", description: 'Lección 3 lorem impsun' },
          { id: 6, image: "https://picsum.photos/206", name: "Notificacion 3", description: 'Lección 3 lorem impsun' },
          { id: 7, image: "https://picsum.photos/206", name: "Notificacion 3", description: 'Lección 3 lorem impsun' },
          { id: 8, image: "https://picsum.photos/206", name: "Notificacion 3", description: 'Lección 3 lorem impsun' },
          { id: 9, image: "https://picsum.photos/206", name: "Notificacion 3", description: 'Lección 3 lorem impsun' },
          { id: 10, image: "https://picsum.photos/206", name: "Notificacion 3", description: 'Lección 3 lorem impsun' },
          { id: 11, image: "https://picsum.photos/206", name: "Notificacion 3", description: 'Lección 3 lorem impsun' },
          { id: 12, image: "https://picsum.photos/206", name: "Notificacion 3", description: 'Lección 3 lorem impsun' },
          { id: 13, image: "https://picsum.photos/206", name: "Notificacion 3", description: 'Lección 3 lorem impsun' },
          { id: 14, image: "https://picsum.photos/206", name: "Notificacion 3", description: 'Lección 3 lorem impsun' },
          { id: 15, image: "https://picsum.photos/206", name: "Notificacion 3", description: 'Lección 3 lorem impsun' },
          { id: 16, image: "https://picsum.photos/206", name: "Notificacion 3", description: 'Lección 3 lorem impsun' },
          { id: 17, image: "https://picsum.photos/206", name: "Notificacion 3", description: 'Lección 3 lorem impsun' },

        ]);
         setIsLoading(false); 
      }, 1000);
    }, []);
    return (
        <ScrollView>
                   {isLoading ? (
                        <View style={styles.padding}>
                       <CustomLoader  size="large" color="#007BFF" />
                        </View>

                     ) : (
                        <View>

          {lessons.map((lesson) => (
                  <LessonCard
                    key={lesson.id}
                    imageSource={lesson.image}
                    lessonName={lesson.name}
                    descriptionLesson={lesson.description}
                    onPress={() => console.log(`Seleccionaste ${lesson.name}`)}
                  />

                ))}
                        </View>)}

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
    padding:{
        padding: 20,
    }
});

export default NotificationScreen;