import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const hotel = {
  nombre: 'Hotel Xcaret México',
  imagenes: [
    'https://www.hotelxcaret.com/wp-content/uploads/2020/08/hotelxcaretmexico_hero.jpg',
    'https://www.hotelxcaret.com/wp-content/uploads/2020/08/hotelxcaretmexico_2.jpg',
    'https://www.hotelxcaret.com/wp-content/uploads/2020/08/hotelxcaretmexico_3.jpg',
    'https://www.hotelxcaret.com/wp-content/uploads/2020/08/hotelxcaretmexico_4.jpg',
  ],
  beneficios: [
    'Acceso a parques temáticos exclusivos',
    'Habitaciones familiares y suites de lujo',
    'Restaurantes de alta cocina',
    'Actividades acuáticas y deportes al aire libre',
  ],
  servicios: [
    'Spa y centro de bienestar',
    'Gimnasio',
    'Piscinas al aire libre',
    'Wi-Fi gratuito en todo el hotel',
    'Servicio de transporte a los parques',
  ],
  descripcion:
    'Hotel Xcaret México es un resort todo incluido que combina la naturaleza, la cultura y la diversión en la Riviera Maya, ofreciendo una experiencia única en sus parques, actividades y el contacto con la naturaleza.',
  ubicacion:
    'Carretera Chetumal - Puerto Juárez, KM 282, 77710 Playa del Carmen, Q.R., México',
  opiniones: [
    '¡Una experiencia maravillosa! El mejor servicio y las mejores actividades en familia.',
    'Excelente lugar para relajarse y disfrutar de la naturaleza, muy recomendable.',
    'El servicio al cliente es increíble, y las instalaciones son de primer nivel.',
  ],
};

export default function HotelDetail() {
  return (
    <ScrollView style={styles.container}>
      {/* Collage de imágenes del hotel */}
      <View style={styles.collageContainer}>
        {hotel.imagenes.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.collageImage} />
        ))}
      </View>

      {/* Nombre del hotel */}
      <Text style={styles.hotelName}>{hotel.nombre}</Text>

      {/* Beneficios del hotel */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Beneficios del Hotel</Text>
        {hotel.beneficios.map((beneficio, index) => (
          <Text key={index} style={styles.benefitText}>
            - {beneficio}
          </Text>
        ))}
      </View>

      {/* Servicios del hotel */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Servicios</Text>
        {hotel.servicios.map((servicio, index) => (
          <Text key={index} style={styles.benefitText}>
            - {servicio}
          </Text>
        ))}
      </View>

      {/* Descripción del hotel */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Acerca del Hotel</Text>
        <Text style={styles.descriptionText}>{hotel.descripcion}</Text>
      </View>

      {/* Ubicación del hotel */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ubicación</Text>
        <Text style={styles.descriptionText}>{hotel.ubicacion}</Text>
      </View>

      {/* Opiniones del hotel */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Opiniones</Text>
        {hotel.opiniones.map((opinion, index) => (
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
  hotelName: {
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
