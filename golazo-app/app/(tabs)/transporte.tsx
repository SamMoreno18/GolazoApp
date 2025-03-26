import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const PantallaBuscarRutas = () => {
    const [transporte, setTransporte] = useState('autobus');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>golazo</Text>
            </View>

            <View style={styles.searchContainer}>
                <Text style={styles.title}>Buscar una ruta</Text>
                <Text style={styles.subtitle}>Encuentra las rutas disponibles para transportarte.</Text>

                <Text style={styles.label}>Viajo en</Text>
                <View style={styles.radioContainer}>
                    <TouchableOpacity onPress={() => setTransporte('autobus')} style={[styles.radioButton, transporte === 'autobus' && styles.radioButtonSelected]}>
                        <Text style={[styles.radioText, transporte === 'autobus' && styles.radioTextSelected]}>Autobús</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setTransporte('metro')} style={[styles.radioButton, transporte === 'metro' && styles.radioButtonSelected]}>
                        <Text style={[styles.radioText, transporte === 'metro' && styles.radioTextSelected]}>Metro</Text>
                    </TouchableOpacity>
                </View>

                <TextInput style={styles.input} placeholder="¿Cuál es tu ubicación?" />
                <TextInput style={styles.input} placeholder="¿A dónde quieres llegar?" />

                <TouchableOpacity style={styles.searchButton}>
                    <Text style={styles.searchButtonText}>Buscar rutas</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.routesContainer}>
                <Text style={styles.sectionTitle}>Rutas concurridas</Text>
                <View style={styles.routeCard}>
                    <Text style={styles.routeTitle}>Autobús amarillo No. 1</Text>
                    <Text>Punto A - Punto B</Text>
                    <TouchableOpacity style={styles.detailsButton}>
                        <Text style={styles.detailsButtonText}>Ver detalles</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.routeCard}>
                    <Text style={styles.routeTitle}>Autobús amarillo No. 2</Text>
                    <Text>Punto A - Punto B</Text>
                    <TouchableOpacity style={styles.detailsButton}>
                        <Text style={styles.detailsButtonText}>Ver detalles</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F5F5F5', padding: 20 },
    header: { height: 60, justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
    logo: { fontSize: 24, fontWeight: 'bold', color: '#E63946' },
    searchContainer: { marginBottom: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    subtitle: { fontSize: 14, marginBottom: 20 },
    label: { fontSize: 16, marginBottom: 5 },
    radioContainer: { flexDirection: 'row', marginBottom: 10 },
    radioButton: { padding: 10, marginRight: 10, borderRadius: 8, backgroundColor: '#FFF', borderWidth: 1, borderColor: '#999' },
    radioButtonSelected: { backgroundColor: '#E63946' },
    radioText: { color: '#333' },
    radioTextSelected: { color: '#FFF', fontWeight: 'bold' },
    input: { height: 50, backgroundColor: '#FFF', borderRadius: 8, paddingHorizontal: 15, marginBottom: 15 },
    searchButton: { height: 50, backgroundColor: '#E63946', justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginBottom: 20 },
    searchButtonText: { color: '#FFF', fontWeight: 'bold' },
    routesContainer: { marginTop: 20 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
    routeCard: { backgroundColor: '#E63946', borderRadius: 8, padding: 15, marginBottom: 10 },
    routeTitle: { fontSize: 16, fontWeight: 'bold', color: '#FFF', marginBottom: 5 },
    detailsButton: { marginTop: 10, backgroundColor: '#FFF', borderRadius: 8, padding: 10, alignItems: 'center' },
    detailsButtonText: { color: '#E63946', fontWeight: 'bold' }
});

export default PantallaBuscarRutas;
