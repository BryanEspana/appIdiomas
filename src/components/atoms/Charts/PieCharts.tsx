import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PieChart } from "react-native-chart-kit";

type PieChartData = {
  name: string; // Nombre del segmento
  value: number; // Valor del segmento
  color: string; // Color del segmento
  legendFontColor?: string; // Color de la fuente de la leyenda
  legendFontSize?: number; // Tamaño de la fuente de la leyenda
};

type CustomPieChartProps = {
  title: string; // Título del gráfico
  data: PieChartData[]; // Datos del gráfico
  width?: number; // Ancho del gráfico
  height?: number; // Altura del gráfico
  showLegend?: boolean; // Mostrar la leyenda
  containerStyle?: object; // Estilo del contenedor
};

export const CustomPieChart: React.FC<CustomPieChartProps> = ({
  title,
  data,
  width = 300,
  height = 220,
  showLegend = true,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <PieChart
        data={data.map((item) => ({
          name: item.name,
          population: item.value,
          color: item.color,
          legendFontColor: item.legendFontColor || "#7F7F7F",
          legendFontSize: item.legendFontSize || 12,
        }))}
        width={width}
        height={height}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        chartConfig={{
          color: () => `rgba(255, 255, 255, 0.5)`,
        }}
        hasLegend={showLegend}
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