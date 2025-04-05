import '~/global.css';

import { Drawer } from "expo-router/drawer";
import {  GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return  (
    <GestureHandlerRootView>
      <Drawer/>
    </GestureHandlerRootView>
  )
}
