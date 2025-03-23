import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/Header';

const HomePage = () => {
    return (
        <View style={styles.container}> 
            <ScrollView contentContainerStyle={{ paddingTop: 60 }}>
                <Header />
                {/* Header */}
                <View style={styles.header}>
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

                {/* Próximos Eventos */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Próximos eventos</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={true} style={styles.gameScroll}>
                        {[...Array(7)].map((_, index) => (
                            <View key={index} style={styles.gameCardLarge}>
                                <Text style={styles.gameTime}>Jue a las 6:30 P.M.</Text>
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
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFF', 
  },
  scrollContainer: {
      paddingTop: 60, // Mantiene el espacio arriba sin afectar el Header
      paddingHorizontal: 20, // Mantiene los márgenes laterales sin afectar el Header
  },
  header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    profileContainer: {
        width: 40,
        height: 40,
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    welcomeText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: 'black',
    },
    subText: {
        fontSize: 26,
        color: 'black',
    },
    sectionTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 30,
        textAlign: 'center',
        color: 'black',
    },
    liveGameContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    liveGameCard: {
        backgroundColor: '#efefef',
        padding: 55,
        borderRadius: 10,
        alignItems: 'center',
        width: '80%',
    },
    liveGameTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black',
    },
    score: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 5,
        color: 'black',
    },
    button: {
        backgroundColor: '#DE3C4B',
        padding: 15,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonSecondary: {
        backgroundColor: '#DE3C4B',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    section: {
        marginTop: 20,
    },
    gameScroll: {
        marginTop: 10,
    },
    gameCardLarge: {
        backgroundColor: '#efefef',
        paddingVertical: 100,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginHorizontal: 10,
        width: 240,
        alignItems: 'center',
        justifyContent: 'center',
    },
    popularTeamsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    teamCircle: {
        alignItems: 'center',
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#DE3C4B',
    },
    teamName: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
    },
    gameTime: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: 'black',
    },
    gameTeams: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
        color: 'black',
    },
    recentGameCard: {
        backgroundColor: 'white',
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
    teamText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    scoreText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
});

export default HomePage;
