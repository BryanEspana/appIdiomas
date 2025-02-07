import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import Sound from "react-native-sound";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { CustomIcon } from "../atoms/CustomIcon";

const SoundBar = () => {
  const [volume, setVolume] = useState(0.5);
  const [sound, setSound] = useState<Sound | null>(null);

  useEffect(() => {
    Sound.setCategory("Playback"); // Para permitir sonido en segundo plano

    const newSound = new Sound("sound.mp3", Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log("Error al cargar el sonido", error);
        return;
      }
      newSound.setVolume(volume);
      newSound.play(); // Opcional, si quieres que se reproduzca al iniciar
    });

    setSound(newSound);

    return () => {
      if (newSound) {
        newSound.release();
      }
    };
  }, []);

  const handleVolumeChange = (value: number) => {
    setVolume(value);
    if (sound) {
      sound.setVolume(value);
    }
  };

  return (
    <View style={styles.container}>
        <CustomIcon
            icon={faVolumeUp}
            size={20}
            color={"#000000"}
            />
        <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        value={volume}
        onValueChange={handleVolumeChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  slider: {
    flex: 1,
    marginLeft: 10,
  },
});

export default SoundBar;