import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const HomePage = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>golazo</Text>
        <View style={styles.profileContainer}>
          <TouchableOpacity>
            <Image source={{ uri: 'https://via.placeholder.com/40' }} style={styles.profileImage} />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Welcome Message */}
      <Text style={styles.welcomeText}>Hola, Marco</Text>
      <Text style={styles.subText}>¡Bienvenido de vuelta!</Text>
      
      {/* Live Game */}
      <View style={styles.liveGameContainer}>
        <Text style={styles.sectionTitle}>Juego en Vivo</Text>
        <View style={styles.liveGameCard}>
          <Text style={styles.liveGameTitle}>México vs. Francia</Text>
          <Text style={styles.score}>1 - 3</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ver ahora</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Today's Games */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Juegos de Hoy</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.gameScroll}>
          {[...Array(7)].map((_, index) => (
            <View key={index} style={styles.gameCardLarge}>
              <Text style={styles.gameTime}>Hoy, 6:30 P.M.</Text>
              <Text style={styles.gameTeams}>Equipo 1 vs. Equipo 2</Text>
              <TouchableOpacity style={styles.buttonSecondary}>
                <Text style={styles.buttonText}>Ver detalles</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Recent Games */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Los más recientes</Text>
        {[{ team1: 'Equipo 1', score: '0 - 2', team2: 'Equipo 2' },
          { team1: 'Equipo 1', score: '1 - 3', team2: 'Equipo 2' },
          { team1: 'Equipo 1', score: '1 - 0', team2: 'Equipo 2' }].map((game, index) => (
          <View key={index} style={styles.recentGameCard}>
            <View style={styles.teamContainer}>
              <View style={styles.circle} />
              <Text style={styles.teamText}>{game.team1}</Text>
            </View>
            <Text style={styles.scoreText}>{game.score}</Text>
            <View style={styles.teamContainer}>
              <View style={styles.circle} />
              <Text style={styles.teamText}>{game.team2}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Today's Games */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Proximos eventos </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.gameScroll}>
          {[...Array(7)].map((_, index) => (
            <View key={index} style={styles.gameCardLarge}>
              <Text style={styles.gameTime}>jue a las 6:30 P.M.</Text>
              <Text style={styles.gameTeams}>Equipo 1 vs. Equipo 2</Text>
              <TouchableOpacity style={styles.buttonSecondary}>
                <Text style={styles.buttonText}>Ver detalles</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Equipos Populares */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Equipos populares</Text>
        <View style={styles.popularTeamsContainer}>
          {['Portugal', 'Alemania', 'México', 'Japón', 'Brasil'].map((team, index) => (
            <View key={index} style={styles.teamCircle}>
              <View style={styles.circle} />
              <Text style={styles.teamName}>{team}</Text>
            </View>
          ))}
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#F8F9FA', padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  logo: { fontSize: 24, fontWeight: 'bold', color: '#D72638' },
  profileContainer: { width: 40, height: 40 },
  profileImage: { width: '100%', height: '100%', borderRadius: 20 },
  welcomeText: { fontSize: 22, fontWeight: 'bold' },
  subText: { fontSize: 16, color: '#6C757D' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 20, textAlign: 'center' },
  liveGameContainer: { marginTop: 10, alignItems: 'center' },
  liveGameCard: { backgroundColor: '#FFF', padding: 15, borderRadius: 10, alignItems: 'center', width: '80%' },
  liveGameTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  score: { fontSize: 24, fontWeight: 'bold', marginVertical: 5 },
  button: { backgroundColor: '#D72638', padding: 10, borderRadius: 5, marginTop: 10 },
  buttonSecondary: { backgroundColor: '#FFF', padding: 10, borderRadius: 5, marginTop: 10 },
  buttonText: { color: 'black', fontWeight: 'bold' },
  section: { marginTop: 20 },
  gameScroll: { marginTop: 10 },
  gameCardLarge: { 
    backgroundColor: 'red', 
    paddingVertical: 100, 
    paddingHorizontal: 30, 
    borderRadius: 10, 
    marginHorizontal: 10, 
    width: 240, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  popularTeamsContainer: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 },
  teamCircle: { alignItems: 'center' },
  circle: { width: 50, height: 50, borderRadius: 25, borderWidth: 2, borderColor: '#000' },
  teamName: { marginTop: 5, fontSize: 14, fontWeight: 'bold' },

  gameTime: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  gameTeams: { fontSize: 18, marginBottom: 20, textAlign: 'center' },
  recentGameCard: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  teamText: { fontSize: 18, fontWeight: 'bold' },
  scoreText: { fontSize: 18, fontWeight: 'bold' },
});

export default HomePage;
