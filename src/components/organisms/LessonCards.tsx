import React from "react";
import { View, StyleSheet } from "react-native";
import { CustomImage } from "../atoms/CustomImage";
import { CustomLabel } from "../atoms/CustomLabel";
import { CustomIcon } from "../atoms/CustomIcon";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

type LessonCardProps = {
  imageSource: string; // URL de la imagen
  lessonName: string; // Nombre de la lección
  descriptionLesson: string; // Descripción de la lección
  onPress?: () => void; // Acción al presionar el nombre o descripción
  onButtonPress?: () => void; // Acción al presionar el botón
};

export const LessonCard: React.FC<LessonCardProps> = ({
  imageSource,
  lessonName,
  descriptionLesson,
  onPress,
  onButtonPress,
}) => {
  return (
    <View style={styles.containerRow}>
      <CustomImage source={imageSource} width={50} height={50} />
      <View style={styles.textContainer}>
        <CustomLabel text={lessonName} fontSize={16} onPress={onPress} />
        <CustomLabel text={descriptionLesson} fontSize={12} onPress={onPress} />
      </View>
      {onButtonPress && (
        <View style={styles.btnIcon}>
          <CustomIcon
            icon={faArrowRight}
            size={20}
            color="#fff"
            onPress={onButtonPress}
            />
        </View>
      )}
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
    justifyContent: "space-between",
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  btnIcon: {
    justifyContent: "center",
    backgroundColor: "#00000050",
    padding: 8,
    borderRadius: 50,
  },

});