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

export default function CrearCuenta() {
    const [value, setValue] = React.useState('');

    const onChangeText = (text: string) => {
        setValue(text);
    };

    return (
        <View className='flex-1 items-center justify-center p-6'>
            <Card className='w-full max-w-2xl'>
                <CardHeader className='flex items-center justify-center p-10 pb-0'>
                    <CardTitle className='text-slate-700'>Crea una cuenta aquí</CardTitle>
                    <CardDescription className='text-slate-500 text-base font-normal'>¡Únete y vive la experiencia completa del Mundial!</CardDescription>
                </CardHeader>
                <CardContent className='p-10 flex flex-col gap-6'>
                    <div className='campo1 flex flex-col gap-1'>
                        <Text className='text-sm font-medium text-gray-500'>Nombre de usuario</Text>
                        <Input
                            placeholder='Nuevo nombre de usuario'
                            value={value}
                            onChangeText={onChangeText}
                            aria-labelledby='inputLabel'
                            aria-errormessage='inputError'
                            className='w-full'
                        />
                    </div>
                    <div className='campo2 flex flex-col gap-1'>
                        <Text className='text-sm font-medium text-gray-500'>Nombre completo</Text>
                        <div className="grid grid-cols-2 gap-3">
                            <Input
                                placeholder='Nombre'
                                value={value}
                                onChangeText={onChangeText}
                                aria-labelledby='inputLabel'
                                aria-errormessage='inputError'
                                className='w-full'
                            />
                            <Input
                                placeholder='Apellido'
                                value={value}
                                onChangeText={onChangeText}
                                aria-labelledby='inputLabel'
                                aria-errormessage='inputError'
                                className='w-full'
                            />
                        </div>
                    </div>
                    <div className='campo3 flex flex-col gap-1'>
                        <Text className='text-sm font-medium text-gray-500'>Correo electrónico</Text>
                        <Input
                            placeholder='ejemplo@direccion.com'
                            value={value}
                            onChangeText={onChangeText}
                            aria-labelledby='inputLabel'
                            aria-errormessage='inputError'
                            className='w-full'
                        />
                    </div>
                    <div className='campo4 flex flex-col gap-1'>
                        <Text className='text-sm font-medium text-gray-500'>Contraseña</Text>
                        <div className="grid grid-cols-2 gap-3">
                            <Input
                                placeholder='Nueva contraseña'
                                value={value}
                                onChangeText={onChangeText}
                                aria-labelledby='inputLabel'
                                aria-errormessage='inputError'
                                className='w-full'
                            />
                            <Input
                                placeholder='Confirmar contraseña'
                                value={value}
                                onChangeText={onChangeText}
                                aria-labelledby='inputLabel'
                                aria-errormessage='inputError'
                                className='w-full'
                            />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className='flex flex-col gap-2 p-10 pt-0'>
                    <Button className='bg-red-500 text-white w-full max-w-[200px]'>Crear una cuenta</Button>
                </CardFooter>
            </Card>
        </View>
    )
}