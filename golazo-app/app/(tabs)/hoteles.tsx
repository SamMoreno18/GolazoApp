import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TextInput } from 'react-native';

interface Hotel {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  calificacion: number; // Calificación de estrellas
}

const hoteles: Hotel[] = [
  {
    id: '1',
    nombre: 'Hotel Xcaret México',
    descripcion: 'Un resort todo incluido que combina la naturaleza, cultura y diversión.',
    imagen: 'https://www.hotelxcaret.com/wp-content/uploads/2020/08/hotelxcaretmexico_hero.jpg',
    calificacion: 5,
  },
  {
    id: '2',
    nombre: 'Hotel Azul Beach Resort Riviera Maya',
    descripcion: 'Un hotel todo incluido frente al mar, ideal para vacaciones familiares.',
    imagen: 'https://www.royalholiday.com/wp-content/uploads/2019/10/azul-beach-resort-riviera-maya.jpg',
    calificacion: 4,
  },
  {
    id: '3',
    nombre: 'The Ritz-Carlton, Cancún',
    descripcion: 'Lujo y elegancia en un entorno exclusivo con una hermosa vista al mar.',
    imagen: 'https://www.ritzcarlton.com/ritz-carlton-cancun.jpg',
    calificacion: 5,
  },
  {
    id: '4',
    nombre: 'Grand Velas Los Cabos',
    descripcion: 'Un resort de lujo con vistas impresionantes y opciones gastronómicas de clase mundial.',
    imagen: 'https://www.grandvelas.com/cabo/images/cabo.jpg',
    calificacion: 5,
  },
];

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Text key={i} style={i < rating ? styles.starFilled : styles.starEmpty}>
        ★
      </Text>
    );
  }
  return stars;
};

export default function App() {
  const [searchText, setSearchText] = useState('');

  const filteredHoteles = hoteles.filter((hotel) =>
    hotel.nombre.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Título principal */}
      <Text style={styles.mainTitle}>¿Buscas dónde pasar el rato?</Text>

      {/* Barra de búsqueda */}
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar hoteles..."
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Título de lugares destacados */}
      <Text style={styles.subTitle}>Hoteles destacados</Text>

      {/* Lista de hoteles */}
      <FlatList
        data={filteredHoteles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.imagen }} style={styles.image} />
            <Text style={styles.title}>{item.nombre}</Text>
            <Text style={styles.description}>{item.descripcion}</Text>
            {/* Calificación con estrellas */}
            <View style={styles.starsContainer}>
              {renderStars(item.calificacion)}
            </View>
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
  starsContainer: { flexDirection: 'row', marginTop: 5 },
  starFilled: { color: '#FFD700', fontSize: 18 },
  starEmpty: { color: '#ddd', fontSize: 18 },
});
