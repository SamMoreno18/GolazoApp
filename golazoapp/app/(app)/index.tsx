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
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';
import { useSession } from '../../ctx'
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';

const GITHUB_AVATAR_URI =
  'https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg';

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
          <Card className="">
            <CardHeader>
              <CardTitle>Juego en vivo</CardTitle>
              <CardDescription>¡Observa el partido que está jugándose ahora mismo!</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                className="w-full h-[250px] object-cover rounded-lg mb-4"
                src="https://raw.githubusercontent.com/kevtorres23/GolazoAppImages/main/Partidos/estadio1.jpg"
                alt="Partido en vivo"
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

              {/* agregar más partidos aquí: */}

            </CardContent>
            <CardFooter>
              <Button className='bg-red-500'>
                <Text>Ver el partido</Text>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="linea2 grid md:grid-cols-2 grid-cols-1 w-full gap-4">
          <Card className="w-full h-auto">
            <CardHeader>
              <CardTitle>Los más recientes</CardTitle>
              <CardDescription>¡Por si te perdiste alguno!</CardDescription>
            </CardHeader>
            <CardContent className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <img
                  className="w-full h-[200px] object-cover rounded-lg"
                  src="https://raw.githubusercontent.com/kevtorres23/GolazoAppImages/main/Partidos/partido3.jpg"
                  alt="Partido 3"
                />
                <img
                  className="w-full h-[200px] object-cover rounded-lg"
                  src="https://raw.githubusercontent.com/kevtorres23/GolazoAppImages/main/Partidos/partido2.jpg"
                  alt="Partido 2"
                />
                <img
                  className="w-full h-[200px] object-cover rounded-lg"
                  src="https://raw.githubusercontent.com/kevtorres23/GolazoAppImages/main/Partidos/partido6.jpg"
                  alt="Partido 6"
                />
                <img
                  className="w-full h-[200px] object-cover rounded-lg"
                  src="https://raw.githubusercontent.com/kevtorres23/GolazoAppImages/main/Partidos/partido4.jpg"
                  alt="Partido 4"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className='bg-red-500'>
                <Text>Ver más</Text>
              </Button>
            </CardFooter>
          </Card>



          <Card className=''>
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

                            {/* Partido China vs España */}
                            <View className="flex flex-row items-center justify-center gap-4">
                <View className="items-center">
                  <Avatar className="w-16 h-16" alt="Bandera de China">
                    <AvatarImage source={{ uri: 'https://raw.githubusercontent.com/kevtorres23/GolazoAppImages/main/Equipos/mexico.png' }} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Text className="mt-1 text-sm font-semibold">México</Text>
                </View>

                <Text className="text-xl font-bold">VS</Text>

                <View className="items-center">
                  <Avatar className="w-16 h-16" alt="Bandera de España">
                    <AvatarImage source={{ uri: 'https://raw.githubusercontent.com/kevtorres23/GolazoAppImages/main/Equipos/usa.png' }} />
                    <AvatarFallback>ES</AvatarFallback>
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
        </div>
      </View>
    </ScrollView>
  );
}
