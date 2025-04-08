import '../../global.css'

import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useSession } from '../../ctx';
import { Text } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import { View } from 'react-native';

export default function AppLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/login" />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{
        headerStyle: {
          backgroundColor: "#ffffff",
        },
        headerTintColor: "#DE3C4B",
        drawerStyle: {
          backgroundColor: "#ffffff",
        },
        drawerActiveTintColor: "#DE3C4B",
        drawerInactiveTintColor: "#64748b",
      }}>

        <Drawer.Screen name="index" options={{
          title: "GolazoApp",
          drawerLabel: "Inicio",
          drawerIcon: ({ color }: { color: string }) => <FontAwesome name="home" size={20} color={color} />
        }} />
        <Drawer.Screen name="hoteles" options={{
          title: "Hoteles",
          drawerLabel: "Hoteles",
          drawerIcon: ({ color }: { color: string }) => <FontAwesome name="hotel" size={20} color={color} />
        }} />
        <Drawer.Screen name="transporte" options={{
          title: "Transporte",
          drawerLabel: "Transporte",
          drawerIcon: ({ color }: { color: string }) => <FontAwesome name="bus" size={20} color={color} />
        }} />
        <Drawer.Screen name="turismo" options={{
          title: "Lugares Interesantes",
          drawerLabel: "Lugares Interesantes",
          drawerIcon: ({ color }: { color: string }) => <FontAwesome name="plane" size={20} color={color} />
        }} />
        <Drawer.Screen name="perfil" options={{
          title: "Mi Perfil",
          drawerLabel: "Mi Perfil",
          drawerIcon: ({ color }: { color: string }) => <FontAwesome name="user" size={20} color={color} />
        }} />

        <View>
          <Text>Logout</Text>
        </View>
      </Drawer>
    </GestureHandlerRootView>
  );
}