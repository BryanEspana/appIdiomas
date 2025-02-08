import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import Sound from "react-native-sound";
import { faVolumeUp, faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import { CustomIcon } from "../atoms/CustomIcon";

interface SoundBarProps {
  audioSource?: string;
}

const SoundBar: React.FC<SoundBarProps> = ({ audioSource }) => {
  const [volume, setVolume] = useState(0.5);
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioSource) return;

    Sound.setCategory("Playback");

    const newSound = new Sound(audioSource, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log("Error al cargar el sonido", error);
        return;
      }
      newSound.setVolume(volume);
      setSound(newSound);
    });

    return () => {
      if (newSound) {
        newSound.release();
      }
    };
  }, [audioSource]);

  const togglePlayPause = () => {
    if (!sound) return;

    if (isPlaying) {
      sound.pause();
    } else {
      sound.play((success) => {
        if (!success) {
          console.log("Error al reproducir el audio");
        }
        setIsPlaying(false);
      });
    }

    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (value: number) => {
    setVolume(value);
    if (sound) {
      sound.setVolume(value);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={togglePlayPause}>
        <CustomIcon
          icon={isPlaying ? faPause : faPlay}
          size={20}
          color={"#000000"}
        />
      </TouchableOpacity>

      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        value={volume}
        onValueChange={handleVolumeChange}
      />

      <CustomIcon icon={faVolumeUp} size={20} color={"#000000"} />
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
    marginHorizontal: 10,
  },
});

export default SoundBar;