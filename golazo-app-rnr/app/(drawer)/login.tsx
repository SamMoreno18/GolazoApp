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

export default function Login() {
    const [value, setValue] = React.useState('');

    const onChangeText = (text: string) => {
        setValue(text);
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
                            value={value}
                            onChangeText={onChangeText}
                            aria-labelledby='inputLabel'
                            aria-errormessage='inputError'
                            className='w-full'
                        />
                    </div>
                    <div className='campo1 flex flex-col gap-1'>
                        <Text className='text-sm font-medium text-gray-500'>Contraseña</Text>
                        <Input
                            placeholder='Contraseña'
                            value={value}
                            onChangeText={onChangeText}
                            aria-labelledby='inputLabel'
                            aria-errormessage='inputError'
                            className='w-full'
                        />
                    </div>
                </CardContent>
                <CardFooter className='flex flex-col gap-2 p-10 pt-0'>
                    <Button className='bg-red-500 text-white w-full max-w-[200px]'>Iniciar sesión</Button>
                    <p>o</p>
                    <Button className='bg-white text-red-500 border-2 border-red-500 w-full max-w-[200px]'>Crear una cuenta</Button>
                </CardFooter>
            </Card>
        </View>
    )
}
