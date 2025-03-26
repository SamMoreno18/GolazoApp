import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from './app/(tabs)';
import LugInteresantes from './app/(tabs)/lug-interes';
import "./global.css";

const Drawer = createDrawerNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomePage} />
                <Drawer.Screen name="Lugares" component={LugInteresantes}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}