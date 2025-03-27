import '../../global.css'

import { DarkTheme, DefaultTheme, Theme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform } from 'react-native';
import { NAV_THEME } from '~/lib/constants';
import { useColorScheme } from '~/lib/useColorScheme';
import { PortalHost } from '@rn-primitives/portal';
import { ThemeToggle } from '~/components/ThemeToggle';
import { setAndroidNavigationBar } from '~/lib/android-navigation-bar';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Screen from '../(drawer)';
import Turismo from '../(drawer)/turismo';
import Hoteles from '../(drawer)/hoteles';
import Perfil from '../(drawer)/perfil';
import Transporte from '../(drawer)/transporte';

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
};

const Drawer = createDrawerNavigator();

export {
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  const hasMounted = React.useRef(false);
  const { colorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

  useIsomorphicLayoutEffect(() => {
    if (hasMounted.current) {
      return;
    }

    if (Platform.OS === 'web') {
      document.documentElement.classList.add('bg-background');
    }
    setAndroidNavigationBar(colorScheme);
    setIsColorSchemeLoaded(true);
    hasMounted.current = true;
  }, []);

  if (!isColorSchemeLoaded) {
    return null;
  }

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#f4f4f4',
          width: 240,
        },
        drawerActiveTintColor: '#ED4352',
        drawerInactiveTintColor: '#000',
      }}
    >
      <Drawer.Screen name="Inicio" component={Screen} />
      <Drawer.Screen name="Lugares Interesantes" component={Turismo} />
      <Drawer.Screen name="Buscar Hoteles" component={Hoteles} />
      <Drawer.Screen name="Mi perfil" component={Perfil} />
      <Drawer.Screen name="Rutas de Transporte" component={Transporte} />
    </Drawer.Navigator>
  );
}

const useIsomorphicLayoutEffect =
  Platform.OS === 'web' && typeof window === 'undefined' ? React.useEffect : React.useLayoutEffect;