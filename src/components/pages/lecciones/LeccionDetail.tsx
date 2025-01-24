import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LeccionDetail = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lección Detalle</Text>
            {/* Add more components and logic here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default LeccionDetail;