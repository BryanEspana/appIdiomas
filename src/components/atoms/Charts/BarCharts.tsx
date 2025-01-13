import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarChart } from "react-native-chart-kit";

type CustomBarChartProps = {
  title: string; // Título del gráfico
  labels: string[]; // Etiquetas del eje X
  data: number[]; // Datos del gráfico
  showLabels?: boolean; // Mostrar etiquetas
  width?: number; // Ancho del gráfico
  height?: number; // Altura del gráfico
  yAxisLabel?: string; // Prefijo en el eje Y
  yAxisSuffix?: string; // Sufijo en el eje Y
  barColor?: string; // Color de las barras
  backgroundColor?: string; // Color de fondo
  backgroundGradientFrom?: string; // Gradiente inicial
  backgroundGradientTo?: string; // Gradiente final
  containerStyle?: object; // Estilo personalizado del contenedor
};

export const CustomBarChart: React.FC<CustomBarChartProps> = ({
  title,
  labels,
  data,
  showLabels = true,
  width = 300,
  height = 220,
  yAxisLabel = "",
  yAxisSuffix = "",
  barColor = "#000",
  backgroundColor = "#ffffff00",
  backgroundGradientFrom = "#ffffff00",
  backgroundGradientTo = "#ffffff00",
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <BarChart
        data={{
          labels: showLabels ? labels : [],
          datasets: [
            {
              data,
            },
          ],
        }}
        width={width}
        height={height}
        yAxisLabel={yAxisLabel}
        yAxisSuffix={yAxisSuffix}
        chartConfig={{
          backgroundColor,
          backgroundGradientFrom,
          backgroundGradientTo,
          decimalPlaces: 2,
          color: (opacity = 1) => barColor,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
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