import React from "react";
import { Image } from "react-native";

type CustomAvatarProps = {
    imageUrl: string;
    size?: number; // Tamaño de la imagen
    borderColor?: string; // Borde opcional
  };
  
  export const CustomAvatar: React.FC<CustomAvatarProps> = ({
    imageUrl,
    size = 50,
    borderColor = '#ccc',
  }) => (
    <Image
      source={{ uri: imageUrl }}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: 2,
        borderColor: borderColor,
      }}
    />
  );
  