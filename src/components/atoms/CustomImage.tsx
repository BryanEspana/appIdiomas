import React from "react";
import { Image } from "react-native";

type CustomImageProps = {
    source: string; // URL o recurso local
    width?: number;
    height?: number;
    borderRadius?: number;
  };
  
  export const CustomImage: React.FC<CustomImageProps> = ({
    source,
    width = 100,
    height = 100,
    borderRadius = 0,
  }) => (
    <Image
      source={{ uri: source }}
      style={{
        width,
        height,
        borderRadius,
      }}
    />
  );
  