import React from 'react';
import { router } from 'expo-router';
import { useForm } from 'react-hook-form';
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
import { useSession } from '../ctx';

export default function Login() {
    const { signIn } = useSession();
    // funciones de useForm para manejar los estados del formulario
    const { register, handleSubmit } = useForm();

    // al hacer clic en el botón de "Crear mi cuenta", el formulario recupera la información y la envía
    const enviarInfo = handleSubmit((data) => {
        console.log(data)
    })

    return (
        <View className='flex-1 items-center justify-center p-6'>
            <Card className='w-full max-w-2xl'>
                <CardHeader className='bg-red-500 rounded-xl flex items-center justify-center'>
                    <CardTitle className='text-white'>¡Hola!</CardTitle>
                    <CardDescription className='text-white text-base'>Bienvenido de vuelta</CardDescription>
                </CardHeader>
                <CardContent className='p-10 flex'>
                    <form onSubmit={enviarInfo} className='flex flex-col'>
                        <label className='mb-1 text-sm font-medium text-slate-500'>Correo electrónico:</label>
                        <input type="email" className="mb-3 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300"
                            {...register("correo", {
                                required: true
                            })} />

                        <label className='mb-1 text-sm font-medium text-slate-500'>Contraseña:</label>
                        <input type="password" className="mb-3 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300"
                            {...register("contraseña", {
                                required: true
                            })} />

                        <Text className='bg-white text-center rounded-md py-1.5 text-white border-none bg-red-500 w-full max-w-[200px] self-center'
                            onPress={() => {
                                signIn();
                                // Navigate after signing in. You may want to tweak this to ensure sign-in is
                                // successful before navigating.
                                router.replace('/');
                            }}>
                            Sign In
                        </Text>
                    </form>
                    <p className='self-center'>o</p>
                    <Button className='bg-white text-red-500 border-2 border-red-500 w-full max-w-[200px] self-center'>Crear una cuenta</Button>
                </CardContent>
            </Card>
        </View>
    )
}
