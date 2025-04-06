import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';
import { Text } from '~/components/ui/text';
import { Button } from '~/components/ui/button';
import { View } from 'react-native';
import { Input } from '~/components/ui/input';
import { useNavigation } from '@react-navigation/native'; 
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';
import { useSession } from '../../ctx'

const GITHUB_AVATAR_URI =
  'https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg';

export default function LoginScreen() {
    const navigation = useNavigation(); 

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        if (!username || !password) {
            alert('Por favor ingresa usuario y contraseña');
            return;
        }

        (navigation as any).navigate('Login'); 
    };

    const handleCreateAccount = () => {
        (navigation as any).navigate('Crear cuenta'); 
    };

    return (
        <View className='flex-1 items-center justify-center p-6'>
            <Card className='w-full max-w-2xl'>
                <CardHeader className='bg-red-500 rounded-xl flex items-center justify-center'>
                    <CardTitle className='text-white'>¡Hola!</CardTitle>
                    <CardDescription className='text-white text-base'>Bienvenido de vuelta</CardDescription>
                </CardHeader>
                <CardContent className='p-10 flex flex-col gap-6'>
                    <div className='campo1 flex flex-col gap-1'>
                        <Text className='text-sm font-medium text-gray-500'>Username</Text>
                        <Input
                            placeholder='Username'
                            value={username}
                            onChangeText={setUsername}
                            className='w-full'
                        />
                    </div>
                    <div className='campo1 flex flex-col gap-1'>
                        <Text className='text-sm font-medium text-gray-500'>Contraseña</Text>
                        <Input
                            placeholder='Contraseña'
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            className='w-full'
                        />
                    </div>
                </CardContent>
                <CardFooter className='flex flex-col gap-2 p-10 pt-0'>
                    <Button
                        onPress={handleLogin}
                        className='bg-red-500 text-white w-full max-w-[200px]'
                    >
                        Iniciar sesión
                    </Button>
                    <p>o</p>
                    <Button
                        onPress={handleCreateAccount}
                        className='bg-white text-red-500 border-2 border-red-500 w-full max-w-[200px]'
                    >
                        Crear una cuenta
                    </Button>
                </CardFooter>
            </Card>
        </View>
    );
export default function Screen() {
  const { signOut } = useSession();
  
  const [progress, setProgress] = React.useState(78);

  function updateProgressValue() {
    setProgress(Math.floor(Math.random() * 100));
  }
  return (
    <ScrollView>
      <View className='flex-1 justify-left items-left gap-5 md:p-12 sm:p-8 p-6 bg-secondary/30'>
        <Text
          onPress={() => {
            // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
            signOut();
          }}>
          Sign Out
        </Text>
        <div className="saludo-usuario flex flex-col">
          <p className='text-3xl font-medium mb-1'>Hola, Marco</p>
          <p className='text-lg font-normal text-slate-400 m-0'>¡Bienvenido de vuelta!</p>
        </div>

        <div className="linea1 grid md:grid-cols-2 grid-cols-1 w-full gap-4">
          <Card className=''>
            <CardHeader>
              <CardTitle>Juego en vivo</CardTitle>
              <CardDescription>¡Observa el partido que está jugándose ahora mismo!</CardDescription>
            </CardHeader>
            <CardContent>
              <Text>Card Content</Text>
            </CardContent>
            <CardFooter>
              <Button className='bg-red-500'>
                <Text>Ver el partido</Text>
              </Button>
            </CardFooter>
          </Card>

          <Card className=''>
            <CardHeader>
              <CardTitle>Juegos de hoy</CardTitle>
              <CardDescription>Conoce los partidos que jugarán el día de hoy</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
              <div className='w-full'>Partido 1</div>
              <div className='w-full'>Partido 2</div>
              <div className='w-full'>Partido 3</div>
            </CardContent>
            <CardFooter>
              <Button className='bg-red-500'>
                <Text>Ver el partido</Text>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="linea2 grid md:grid-cols-2 grid-cols-1 w-full gap-4">
          <Card className=''>
            <CardHeader>
              <CardTitle>Los más recientes</CardTitle>
              <CardDescription>¡Por si te perdiste alguno!</CardDescription>
            </CardHeader>
            <CardContent>
              <Text>Card Content</Text>
            </CardContent>
            <CardFooter>
            </CardFooter>
          </Card>

          <Card className=''>
            <CardHeader>
              <CardTitle>Próximos eventos</CardTitle>
              <CardDescription>Conoce los partidos que jugarán el día de hoy</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
              <div className='w-full'>Partido 1</div>
              <div className='w-full'>Partido 2</div>
              <div className='w-full'>Partido 3</div>
            </CardContent>
            <CardFooter>
              <Button className='bg-red-500'>
                <Text>Ver el partido</Text>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </View>
    </ScrollView>
  );
}
