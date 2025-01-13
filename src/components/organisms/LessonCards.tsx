import React from "react";
import { View, StyleSheet } from "react-native";
import { CustomImage } from "../atoms/CustomImage";
import { CustomLabel } from "../atoms/CustomLabel";

type LessonCardProps = {
  imageSource: string; // URL de la imagen
  lessonName: string; // Nombre de la lección
  descriptionLesson: string; // Descripción de la lección
  onPress?: () => void; // Acción al presionar
};

export const LessonCard: React.FC<LessonCardProps> = ({ imageSource, lessonName, descriptionLesson, onPress }) => {
  return (
    <View style={styles.containerRow}>
      <CustomImage source={imageSource} width={50} height={50} />
      <View>
      <CustomLabel text={lessonName} fontSize={16} onPress={onPress} />
      <CustomLabel text={descriptionLesson} fontSize={12} onPress={onPress} />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  containerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
    paddingHorizontal: 10,
    gap: 10,
  },
});