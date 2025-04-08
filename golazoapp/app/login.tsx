import React from 'react';
import { router } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { View, TextInput } from 'react-native';
import { useSession } from '../ctx';
import { Text } from '~/components/ui/text';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { Button } from '~/components/ui/button';

export default function Login() {
    const { signIn } = useSession();
    const { control, handleSubmit } = useForm();

    const enviarInfo = handleSubmit((data) => {
        console.log(data);
    });

    return (
        <View className='flex-1 items-center justify-center p-6'>
            <Card className='w-full max-w-2xl'>
                <CardHeader className='bg-red-500 rounded-xl flex items-center justify-center'>
                    <CardTitle className='text-white'>¡Hola!</CardTitle>
                    <CardDescription className='text-white text-base'>Bienvenido de vuelta</CardDescription>
                </CardHeader>
                <CardContent className='p-10 flex gap-2'>
                    <View className='w-full'>
                        <Text className='mb-1 text-sm font-medium text-slate-500'>Correo electrónico:</Text>
                        <Controller
                            control={control}
                            name="correo"
                            rules={{ required: true }}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    className="mb-3 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2"
                                    placeholder="ejemplo@correo.com"
                                    keyboardType="email-address"
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )}
                        />

                        <Text className='mb-1 text-sm font-medium text-slate-500'>Contraseña:</Text>
                        <Controller
                            control={control}
                            name="contraseña"
                            rules={{ required: true }}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    className="mb-3 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2"
                                    placeholder="********"
                                    secureTextEntry
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )}
                        />
                    </View>

                    <Text
                        className='bg-white text-center rounded-md py-1.5 text-white border-none bg-red-500 w-full max-w-[200px] self-center'
                        onPress={() => {
                            enviarInfo(); // se ejecuta la función del formulario
                            signIn();
                            router.replace('/');
                        }}
                    >
                        Sign In
                    </Text>

                    <Text className='text-center mt-2'>o</Text>

                    <Button className='bg-white text-red-500 border-2 border-red-500 w-full max-w-[200px] self-center'>
                        Crear una cuenta
                    </Button>
                </CardContent>
            </Card>
        </View>
    );
}