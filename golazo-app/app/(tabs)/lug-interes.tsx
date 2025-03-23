import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TextInput } from 'react-native';

interface Lugar {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
}

const lugares: Lugar[] = [
  {
    id: '1',
    nombre: 'Chichen Itzá',
    descripcion: 'Una de las nuevas siete maravillas del mundo, famosa por su pirámide.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/El_Castillo%2C_Chichen_Itza_-_Jan_2006.jpg/800px-El_Castillo%2C_Chichen_Itza_-_Jan_2006.jpg',
  },
  {
    id: '2',
    nombre: 'Teotihuacán',
    descripcion: 'Ciudad prehispánica famosa por sus pirámides del Sol y la Luna.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Teotihuacan_Pyramids.jpg/800px-Teotihuacan_Pyramids.jpg',
  },
  {
    id: '3',
    nombre: 'Cenotes de Yucatán',
    descripcion: 'Los cenotes son pozos naturales de agua que se encuentran principalmente en la península de Yucatán.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Cenote_Sagrado.jpg/800px-Cenote_Sagrado.jpg',
  },
  {
    id: '4',
    nombre: 'Playa del Carmen',
    descripcion: 'Un hermoso destino de playa en la Riviera Maya, famoso por su ambiente relajado y vida nocturna.',
    imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Playa_del_Carmen_-_Mexico.jpg/800px-Playa_del_Carmen_-_Mexico.jpg',
  },
];

export default function LugInteresantes() {
  const [searchText, setSearchText] = useState('');

  const filteredLugares = lugares.filter((lugar) =>
    lugar.nombre.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Título principal */}
      <Text style={styles.mainTitle}>¿Buscas dónde pasar el rato?</Text>

      {/* Barra de búsqueda */}
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar lugares..."
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Título de lugares destacados */}
      <Text style={styles.subTitle}>Lugares destacados</Text>

      {/* Lista de lugares */}
      <FlatList
        data={filteredLugares}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagen }} style={styles.image} />
            <Text style={styles.title}>{item.nombre}</Text>
            <Text style={styles.description}>{item.descripcion}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  mainTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  card: {
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 10,
    elevation: 5, // Sombra para iOS y Android
  },
  image: { width: '100%', height: 200, borderRadius: 10 },
  title: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  description: { fontSize: 14, color: '#666' },
});
