import 'react-native-gesture-handler';
import { useRootNavigationState, Redirect } from 'expo-router';
import * as React from 'react';
import { View, ScrollView } from 'react-native';
import Animated, { FadeInUp, FadeOutDown, LayoutAnimationConfig } from 'react-native-reanimated';
import { Info } from '~/lib/icons/Info';
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Button } from '~/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Progress } from '~/components/ui/progress';
import { Text } from '~/components/ui/text';
import { Tooltip, TooltipContent, TooltipTrigger } from '~/components/ui/tooltip';

const GITHUB_AVATAR_URI =
  'https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg';

export default function Screen() {
  const [progress, setProgress] = React.useState(78);

  function updateProgressValue() {
    setProgress(Math.floor(Math.random() * 100));
  }
  return (
    <ScrollView>
      <View className='flex-1 justify-left items-left gap-5 md:p-12 sm:p-8 p-6 bg-secondary/30'>
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
      <Text>Card Content</Text>
    </CardContent>
    <CardFooter>
      <Button className="bg-red-500">
        <Text>Ver el partido</Text>
      </Button>
    </CardFooter>
  </Card>
</div>


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

              <Text className="mx-4 text-3xl font-bold">VS</Text>

              <View className="items-center">
                <Avatar className="w-24 h-24" alt="Bandera de México">
                  <AvatarImage source={{ uri: 'https://raw.githubusercontent.com/kevtorres23/GolazoAppImages/main/Equipos/mexico.png' }} />
                </Avatar>
                <Text className="mt-1 text-xl font-semibold">México</Text>
              </View>
            </View>

            {/* Puedes agregar más partidos si quieres aquí */}
          </CardContent>
          <CardFooter>
            <Button className='bg-red-500'>
              <Text>Ver el partido</Text>
            </Button>
          </CardFooter>
        </Card>



        <div className="linea2 grid md:grid-cols-2 grid-cols-1 w-full gap-4">
  <Card className="w-full max-w-[550px] h-auto">
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