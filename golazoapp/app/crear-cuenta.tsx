import React from 'react';
import { useForm } from 'react-hook-form';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';
import { Text } from '~/components/ui/text';
import { Button } from '~/components/ui/button';
import { View } from 'react-native';

export default function CrearCuenta() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const enviarInfo = handleSubmit((data) => {
        console.log(data);
    });

    return (
        <View className="flex-1 items-center justify-center p-6">
            <Card className="w-full max-w-2xl">
                <CardHeader className="flex items-center justify-center p-10 pb-0">
                    <CardTitle className="text-slate-700">Crea una cuenta aquí</CardTitle>
                    <CardDescription className="text-slate-500 text-base font-normal">
                        ¡Únete y vive la experiencia completa del Mundial!
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-10">
                    <form onSubmit={enviarInfo} className="flex flex-col">
                        {/* Nombre */}
                        <label htmlFor="nombre" className="mb-1 text-sm font-medium text-slate-500">Nombre:</label>
                        <input
                            type="text"
                            className="mb-1 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2"
                            {...register('nombre', {
                                required: 'Por favor inserta tu nombre.',
                            })}
                        />
                        {errors.nombre?.message && (
                            <Text className="text-red-400 font-medium text-xs mb-3">
                                {errors.nombre.message.toString()}
                            </Text>
                        )}

                        {/* Correo */}
                        <label className="mb-1 text-sm font-medium text-slate-500">Correo electrónico:</label>
                        <input
                            type="email"
                            className="mb-1 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2"
                            {...register('correo', {
                                required: {
                                    value: true,
                                    message: 'Correo es requerido',
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Correo no válido',
                                },
                            })}
                        />
                        {errors.correo?.message && (
                            <Text className="text-red-400 font-medium text-xs mb-3">
                                {errors.correo.message.toString()}
                            </Text>
                        )}

                        {/* Contraseña */}
                        <label className="mb-1 text-sm font-medium text-slate-500">Contraseña:</label>
                        <input
                            type="password"
                            className="mb-1 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2"
                            {...register('contraseña', {
                                required: {
                                    value: true,
                                    message: 'La contraseña es requerida.',
                                },
                                minLength: {
                                    value: 6,
                                    message: 'La contraseña debe ser de al menos 6 dígitos',
                                },
                            })}
                        />
                        {errors.contraseña?.message && (
                            <Text className="text-red-400 font-medium text-xs mb-3">
                                {errors.contraseña.message.toString()}
                            </Text>
                        )}

                        {/* Confirmar contraseña */}
                        <label className="mb-1 text-sm font-medium text-slate-500">Confirma contraseña:</label>
                        <input
                            type="password"
                            className="mb-1 w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2"
                            {...register('confirmarContraseña', {
                                required: {
                                    value: true,
                                    message: 'Por favor confirma la contraseña que ingresaste.',
                                },
                                validate: (value) => {
                                    if (value === watch('contraseña')) {
                                        return true;
                                    } else {
                                        return 'Las contraseñas no coinciden.';
                                    }
                                },
                            })}
                        />
                        {errors.confirmarContraseña?.message && (
                            <Text className="text-red-400 font-medium text-xs mb-3">
                                {errors.confirmarContraseña.message.toString()}
                            </Text>
                        )}

                        {/* Botón */}
                        <Button
                            onPress={enviarInfo}
                            className="py-2 mt-4 bg-red-500 text-white font-medium rounded-md"
                        >
                            Crear mi cuenta
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </View>
    );
}
