import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const lugar = {
  nombre: 'Chichen Itzá',
  imagenes: [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Chichen_Itza_-_El_Castillo_%28Pyramid_of_Kukulk%C3%A1n%29_-_panoramio.jpg/1920px-Chichen_Itza_-_El_Castillo_%28Pyramid_of_Kukulk%C3%A1n%29_-_panoramio.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/e/e9/Chichen_Itza_Feb_2006.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/0/06/Chichen_Itza_-_Temple_of_the_Warrior_%28North_Platfrom%29.jpg',
  ],
  beneficios: [
    'Patrimonio de la Humanidad',
    'Una de las Siete Maravillas del Mundo Moderno',
    'Rico en historia y cultura maya',
    'Conocida por su imponente pirámide',
  ],
  servicios: [
    'Guías turísticos disponibles',
    'Centro de información',
    'Tiendas de souvenirs',
    'Restaurantes y áreas de descanso',
    'Servicios de transporte cercanos',
  ],
  descripcion:
    'Chichen Itzá es una antigua ciudad maya ubicada en el sureste de México, famosa por su gran pirámide conocida como El Castillo, y por su relevancia en la cultura y astronomía maya.',
  ubicacion:
    'Chichen Itzá, Yucatán, México',
  opiniones: [
    'Una de las experiencias más impresionantes que he tenido, una verdadera joya de la cultura maya.',
    'La pirámide es aún más imponente en persona, un lugar lleno de historia y magia.',
    'Increíblemente bien conservado, y el lugar es impresionante en cada detalle.',
  ],
};

export default function LugarDetail() {
  return (
    <ScrollView style={styles.container}>
      {/* Collage de imágenes del lugar */}
      <View style={styles.collageContainer}>
        {lugar.imagenes.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.collageImage} />
        ))}
      </View>

      {/* Nombre del lugar */}
      <Text style={styles.lugarName}>{lugar.nombre}</Text>

      {/* Beneficios del lugar */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Beneficios de Visitar</Text>
        {lugar.beneficios.map((beneficio, index) => (
          <Text key={index} style={styles.benefitText}>
            - {beneficio}
          </Text>
        ))}
      </View>

      {/* Servicios del lugar */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Servicios</Text>
        {lugar.servicios.map((servicio, index) => (
          <Text key={index} style={styles.benefitText}>
            - {servicio}
          </Text>
        ))}
      </View>

      {/* Descripción del lugar */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Acerca de Chichen Itzá</Text>
        <Text style={styles.descriptionText}>{lugar.descripcion}</Text>
      </View>

      {/* Ubicación */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ubicación</Text>
        <Text style={styles.descriptionText}>{lugar.ubicacion}</Text>
      </View>

      {/* Opiniones del lugar */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Opiniones</Text>
        {lugar.opiniones.map((opinion, index) => (
          <Text key={index} style={styles.descriptionText}>
            - {opinion}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  collageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  collageImage: {
    width: '48%',
    height: 200,
    margin: '1%',
    borderRadius: 10,
  },
  lugarName: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  section: {
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  benefitText: {
    fontSize: 16,
    color: '#666',
    marginVertical: 5,
  },
  descriptionText: {
    fontSize: 16,
    color: '#555',
    marginVertical: 5,
  },
});
