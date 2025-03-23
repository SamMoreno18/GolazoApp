import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#E63946" />
      <View style={styles.header}>
        <Text style={styles.title}>¡Hola!</Text>
        <Text style={styles.subtitle}>Bienvenido de vuelta.</Text>
      </View>
      
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nombre de usuario</Text>
        <TextInput style={styles.input} placeholder="marcolopez.24" />
        
        <Text style={styles.label}>Contraseña</Text>
        <TextInput style={styles.input} placeholder="********" secureTextEntry />
        
        <Text style={styles.forgotPassword}>Olvidé mi contraseña</Text>
        
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Iniciar sesión</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.createAccountText}>Crear una cuenta</Text>
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
    width: '100%',
    height: '35%',
    backgroundColor: '#E63946',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
  },
  subtitle: {
    fontSize: 16,
    color: '#FFF',
  },
  formContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 20,
    fontSize: 14,
    color: '#333',
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
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#E63946',
    marginBottom: 20,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#E63946',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  createAccountButton: {
    marginTop: 15,
    borderColor: '#E63946',
    borderWidth: 1,
    borderRadius: 8,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccountText: {
    color: '#E63946',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;