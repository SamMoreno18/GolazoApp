import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5" />
      <View style={styles.header}>
        <Text style={styles.title}>Crea una cuenta aquí</Text>
        <Text style={styles.subtitle}>¡Únete y vive la experiencia completa del Mundial!</Text>
      </View>
      
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nombre de usuario</Text>
        <TextInput style={styles.input} placeholder="Nuevo nombre de usuario" />
        
        <Text style={styles.label}>Nombre completo</Text>
        <View style={styles.nameContainer}>
          <TextInput style={[styles.input, styles.halfInput]} placeholder="Nombre" />
          <TextInput style={[styles.input, styles.halfInput]} placeholder="Apellido" />
        </View>
        
        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput style={styles.input} placeholder="email@example.com" keyboardType="email-address" />
        
        <Text style={styles.label}>Contraseña</Text>
        <TextInput style={styles.input} placeholder="Inserta una contraseña" secureTextEntry />
        
        <Text style={styles.label}>Confirmar contraseña</Text>
        <TextInput style={styles.input} placeholder="Confirma tu contraseña" secureTextEntry />
        
        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.createAccountText}>Crear cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E63946',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 5,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginTop: 10,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
  },
  createAccountButton: {
    marginTop: 20,
    width: '100%',
    height: 50,
    backgroundColor: '#E63946',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  createAccountText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
