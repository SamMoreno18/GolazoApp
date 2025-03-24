import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

const DetallesPartido = () => {
  const equipo1 = 'México';
  const equipo2 = 'Brasil';
  const equipo1Goles = 2;
  const equipo2Goles = 1;
  const estadio = 'Estadio Nacional';

  const homePossession = 55;
  const awayPossession = 45;

  const standoutPlayer = 'Jugador Destacado: Jugador A';

  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>{equipo1} {equipo1Goles} - {equipo2Goles} {equipo2}</Text>
        <Text style={styles.estadio}>{estadio}</Text>
      </View>

      <View style={styles.statsContainer}>
        <Text style={styles.statsTitle}>Estadísticas del Partido</Text>
        <View style={styles.statRow}>
          <Text style={styles.statText}>{equipo1} {homePossession}%</Text>
          <Progress.Bar
            progress={homePossession / 100}
            width={200}
            color="#ED4352"
            borderWidth={0}
            height={10}
          />
        </View>
        <View style={styles.statRow}>
          <Text style={styles.statText}>{equipo2} {awayPossession}%</Text>
          <Progress.Bar
            progress={awayPossession / 100}
            width={200}
            color="#ED4352"
            borderWidth={0}
            height={10}
          />
        </View>
      </View>

      <View style={styles.playerContainer}>
        <Text style={styles.playerText}>{standoutPlayer}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  score: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ED4352',
  },
  estadio: {
    fontSize: 16,
    color: '#888',
  },
  statsContainer: {
    marginBottom: 40,
  },
  statsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  statText: {
    fontSize: 16,
    marginRight: 10,
    color: '#333',
  },
  playerContainer: {
    backgroundColor: '#ED4352',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  playerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default DetallesPartido;