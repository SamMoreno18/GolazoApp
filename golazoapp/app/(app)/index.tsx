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
import { View, Image } from 'react-native';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';
import { useSession } from '../../ctx'
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';

const GITHUB_AVATAR_URI =
  'https://i.pinImage.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg';

export default function Screen() {
  const { signOut } = useSession();

  const [progress, setProgress] = React.useState(78);

  function updateProgressValue() {
    setProgress(Math.floor(Math.random() * 100));
  }

  return (
    <ScrollView>
      <View className='flex-1 justify-left items-left gap-5 md:p-12 sm:p-8 p-6 bg-secondary/30'>
        <Text onPress={() => signOut()}>Sign Out</Text>

        <View className="saludo-usuario flex flex-col">
          <Text className='text-3xl font-medium mb-1'>Hola, Marco</Text>
          <Text className='text-lg font-normal text-slate-400 m-0'>¡Bienvenido de vuelta!</Text>
        </View>

        <View className="linea1 grid md:grid-cols-2 grid-cols-1 w-full gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Juego en vivo</CardTitle>
              <CardDescription>¡Observa el partido que está jugándose ahora mismo!</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                className="w-full h-[250px] object-cover rounded-lg mb-4"
                source={{ uri: 'https://raw.githubusercontent.com/kevtorres23/GolazoAppImages/main/Partidos/estadio1.jpg' }}
              />
            </CardContent>
            <CardFooter>
              <Button className="bg-red-500">
                <Text>Ver el partido</Text>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Juegos de hoy</CardTitle>
              <CardDescription>Conoce los partidos que jugarán el día de hoy</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>

              {/* Partido Alemania vs México */}
              <View className="flex flex-row items-center justify-center">
                <View className="items-center">
                  <Avatar className="w-24 h-24" alt="Bandera de Alemania">
                    <AvatarImage source={{ uri: 'https://raw.githubusercontent.com/kevtorres23/GolazoAppImages/main/Equipos/alemania.png' }} />
                  </Avatar>
                  <Text className="mt-1 text-xl font-semibold">Alemania</Text>
                </View>

                <Text className="mx-4 text-2xl font-bold">VS</Text>

                <View className="items-center">
                  <Avatar className="w-24 h-24" alt="Bandera de México">
                    <AvatarImage source={{ uri: 'https://raw.githubusercontent.com/kevtorres23/GolazoAppImages/main/Equipos/mexico.png' }} />
                  </Avatar>
                  <Text className="mt-1 text-xl font-semibold">México</Text>
                </View>
              </View>

              {/* Partido Qatar vs China */}
              <View className="flex flex-row items-center justify-center">
                <View className="items-center">
                  <Avatar className="w-24 h-24" alt="Bandera de España">
                    <AvatarImage source={{ uri: 'https://raw.githubusercontent.com/kevtorres23/GolazoAppImages/main/Equipos/espana.png' }} />
                  </Avatar>
                  <Text className="mt-1 text-xl font-semibold">España</Text>
                </View>

                <Text className="mx-4 text-2xl font-bold">VS</Text>

                <View className="items-center">
                  <Avatar className="w-24 h-24" alt="Bandera de China">
                    <AvatarImage source={{ uri: 'https://raw.githubusercontent.com/kevtorres23/GolazoAppImages/main/Equipos/china.png' }} />
                  </Avatar>
                  <Text className="mt-1 text-xl font-semibold">China</Text>
                </View>
              </View>
            </CardContent>
            <CardFooter>
              <Button className='bg-red-500'>
                <Text>Ver el partido</Text>
              </Button>
            </CardFooter>
          </Card>
        </View>

        <View className="linea2 grid md:grid-cols-2 grid-cols-1 w-full gap-4">
          <Card className="w-full h-auto">
            <CardHeader>
              <CardTitle>Los más recientes</CardTitle>
              <CardDescription>¡Por si te perdiste alguno!</CardDescription>
            </CardHeader>
            <CardContent className="w-full">
              <View className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Image
                  className="w-full h-[200px] object-cover rounded-lg"
                  source={{ uri: 'https://raw.githubusercontent.com/kevtorres23/GolazoAppImages/main/Partidos/partido3.jpg' }}
                />
                <Image
                  className="w-full h-[200px] object-cover rounded-lg"
                  source={{ uri: 'https://raw.githubusercontent.com/kevtorres23/GolazoAppImages/main/Partidos/partido2.jpg' }}
                />
                <Image
                  className="w-full h-[200px] object-cover rounded-lg"
                  source={{ uri: 'https://raw.githubusercontent.com/kevtorres23/GolazoAppImages/main/Partidos/partido6.jpg' }}
                />
                <Image
                  className="w-full h-[200px] object-cover rounded-lg"
                  source={{ uri: 'https://raw.githubusercontent.com/kevtorres23/GolazoAppImages/main/Partidos/partido4.jpg' }}
                />
              </View>
            </CardContent>
            <CardFooter>
              <Button className='bg-red-500'>
                <Text>Ver más</Text>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Próximos eventos</CardTitle>
              <CardDescription>Conoce los partidos que jugarán el día de hoy</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>

              {/* Partido Albania vs Armenia */}
              <View className="flex flex-row items-center justify-center gap-4">
                <View className="items-center">
                  <Avatar className="w-16 h-16" alt="Bandera de Albania">
                    <AvatarImage source={{ uri: 'https://raw.githubusercontent.com/kevtorres23/GolazoAppImages/main/Equipos/albania.png' }} />
                    <AvatarFallback>AL</AvatarFallback>
                  </Avatar>
                  <Text className="mt-1 text-sm font-semibold">Albania</Text>
                </View>

                <Text className="text-xl font-bold">VS</Text>

                <View className="items-center">
                  <Avatar className="w-16 h-16" alt="Bandera de Armenia">
                    <AvatarImage source={{ uri: 'https://raw.githubusercontent.com/kevtorres23/GolazoAppImages/main/Equipos/armenia.png' }} />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <Text className="mt-1 text-sm font-semibold">Armenia</Text>
                </View>
              </View>

              {/* Partido Australia vs Canadá */}
              <View className="flex flex-row items-center justify-center gap-4">
                <View className="items-center">
                  <Avatar className="w-16 h-16" alt="Bandera de Australia">
                    <AvatarImage source={{ uri: 'https://raw.githubusercontent.com/kevtorres23/GolazoAppImages/main/Equipos/australia.png' }} />
                    <AvatarFallback>AU</AvatarFallback>
                  </Avatar>
                  <Text className="mt-1 text-sm font-semibold">Australia</Text>
                </View>

                <Text className="text-xl font-bold">VS</Text>

                <View className="items-center">
                  <Avatar className="w-16 h-16" alt="Bandera de Canadá">
                    <AvatarImage source={{ uri: 'https://raw.githubusercontent.com/kevtorres23/GolazoAppImages/main/Equipos/canada.png' }} />
                    <AvatarFallback>CA</AvatarFallback>
                  </Avatar>
                  <Text className="mt-1 text-sm font-semibold">Canadá</Text>
                </View>
              </View>

              {/* Partido China vs España */}
              <View className="flex flex-row items-center justify-center gap-4">
                <View className="items-center">
                  <Avatar className="w-16 h-16" alt="Bandera de China">
                    <AvatarImage source={{ uri: 'https://raw.githubusercontent.com/kevtorres23/GolazoAppImages/main/Equipos/china.png' }} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Text className="mt-1 text-sm font-semibold">China</Text>
                </View>

                <Text className="text-xl font-bold">VS</Text>

                <View className="items-center">
                  <Avatar className="w-16 h-16" alt="Bandera de España">
                    <AvatarImage source={{ uri: 'https://raw.githubusercontent.com/kevtorres23/GolazoAppImages/main/Equipos/espana.png' }} />
                    <AvatarFallback>ES</AvatarFallback>
                  </Avatar>
                  <Text className="mt-1 text-sm font-semibold">España</Text>
                </View>
              </View>

              {/* Partido México vs Estados Unidos */}
              <View className="flex flex-row items-center justify-center gap-4">
                <View className="items-center">
                  <Avatar className="w-16 h-16" alt="Bandera de México">
                    <AvatarImage source={{ uri: 'https://raw.githubusercontent.com/kevtorres23/GolazoAppImages/main/Equipos/mexico.png' }} />
                    <AvatarFallback>MX</AvatarFallback>
                  </Avatar>
                  <Text className="mt-1 text-sm font-semibold">México</Text>
                </View>

                <Text className="text-xl font-bold">VS</Text>

                <View className="items-center">
                  <Avatar className="w-16 h-16" alt="Bandera de Estados Unidos">
                    <AvatarImage source={{ uri: 'https://raw.githubusercontent.com/kevtorres23/GolazoAppImages/main/Equipos/usa.png' }} />
                    <AvatarFallback>US</AvatarFallback>
                  </Avatar>
                  <Text className="mt-1 text-sm font-semibold">Estados Unidos</Text>
                </View>
              </View>

            </CardContent>
            <CardFooter>
              <Button className='bg-red-500'>
                <Text>Ver los partidos</Text>
              </Button>
            </CardFooter>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
}