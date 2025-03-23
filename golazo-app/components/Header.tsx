import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Feather name="menu" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>GolazoApp</Text>
      <View style={styles.rightSection}>
        <TouchableOpacity>
          <Feather name="bell" size={24} color="black" />
        </TouchableOpacity>
        {/* Aquí usamos require() para evitar errores */}
        <Image source={require("../assets/images/imgperfil.png")} style={styles.avatar} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingVertical: 50,
    height: 60,
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "black",
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
});

export default Header;
