import '~/global.css';

import { Drawer } from "expo-router/drawer";
import {  GestureHandlerRootView } from "react-native-gesture-handler";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useSession } from '../../ctx';
import { Text } from 'react-native';
import { Redirect, Stack } from 'expo-router';

export default function AppLayout() {
  const { session, isLoading } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/login" />;
  }

  // This layout can be deferred because it's not the root layout.
  return  (
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
          drawerIcon: ({ color }: { color: string }) => <FontAwesome name="home" size={20} color={color}/>
        }}/>
        <Drawer.Screen name="hoteles" options={{
          title: "Hoteles",
          drawerLabel: "Hoteles",
          drawerIcon: ({ color }: { color: string }) => <FontAwesome name="hotel" size={20} color={color}/>
        }}/>
        <Drawer.Screen name="transporte" options={{
          title: "Transporte",
          drawerLabel: "Transporte",
          drawerIcon: ({ color }: { color: string }) => <FontAwesome name="bus" size={20} color={color}/>
        }}/>
        <Drawer.Screen name="turismo" options={{
          title: "Lugares Interesantes",
          drawerLabel: "Lugares Interesantes",
          drawerIcon: ({ color }: { color: string }) => <FontAwesome name="plane" size={20} color={color}/>
        }}/>
        <Drawer.Screen name="perfil" options={{
          title: "Mi Perfil",
          drawerLabel: "Mi Perfil",
          drawerIcon: ({ color }: { color: string }) => <FontAwesome name="user" size={20} color={color}/>
        }}/>
      </Drawer>
    </GestureHandlerRootView>
  );
}
