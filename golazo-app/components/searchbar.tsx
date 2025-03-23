import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Busca la mejor opción para ti" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default SearchBar;

