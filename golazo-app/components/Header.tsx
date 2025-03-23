import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuIcon}>
        <Text style={styles.menuIconText}>☰</Text> 
      </TouchableOpacity>
      <Text style={styles.logo}>Golazo</Text>
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.notificationIcon}>
          <Text style={styles.notificationIconText}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileImageContainer}>
          <Image
            source={{ uri: 'OmarMain.jpg' }} 
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white', 
  },
  menuIcon: {
    padding: 10,
  },
  menuIconText: {
    fontSize: 24,
    color: 'gray', 
  },
  logo: {
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcon: {
    padding: 10,
  },
  notificationIconText: {
    fontSize: 24,
    color: 'gray', 
  },
  profileImageContainer: {
    marginLeft: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20, 
  },
});

export default Header;