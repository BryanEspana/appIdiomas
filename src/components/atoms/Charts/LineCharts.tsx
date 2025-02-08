import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";

type CustomLineChartProps = {
  title: string; // Título de la gráfica
  labels: string[]; // Etiquetas en el eje X
  data: number[]; // Valores para la gráfica
  showLabels?: boolean; // Opción para mostrar etiquetas
  width?: number; // Ancho personalizado
  height?: number; // Altura de la gráfica
  yAxisLabel?: string; // Prefijo para el eje Y
  yAxisSuffix?: string; // Sufijo para el eje Y
  backgroundColor?: string; // Color de fondo de la gráfica
  backgroundGradientFrom?: string; // Color inicial del gradiente
  backgroundGradientTo?: string; // Color final del gradiente
  containerStyle?: object; // Estilo del contenedor principal
};

export const CustomLineChart: React.FC<CustomLineChartProps> = ({
  title,
  labels,
  data,
  showLabels = true, // Mostrar etiquetas por defecto
  width = 200, // Ancho predeterminado para la gráfica
  height = 120,
  yAxisLabel = "",
  yAxisSuffix = "",
  backgroundColor = "#ffff",
  backgroundGradientFrom = "#fff",
  backgroundGradientTo = "#fff",
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <LineChart
        data={{
          labels: showLabels ? labels : [], // Condicional para mostrar u omitir etiquetas
          datasets: [
            {
              data,
            },
          ],
        }}
        width={width} // Ancho dinámico
        height={height} // Altura dinámica
        yAxisLabel={yAxisLabel}
        yAxisSuffix={yAxisSuffix}
        chartConfig={{
          backgroundColor,
          backgroundGradientFrom,
          backgroundGradientTo,
          decimalPlaces: 2, // Redondeo a 2 decimales
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#000",
          },
        }}
        bezier
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  chart: {
    borderRadius: 16,
  },
});