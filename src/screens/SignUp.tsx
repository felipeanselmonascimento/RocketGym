import { useState } from "react";
import { Center, Image, VStack, Text, Heading, ScrollView } from "@gluestack-ui/themed";
import { useForm, Controller } from 'react-hook-form'
import BackGroundImage from "../assets/background.png"
import Logo from "@assets/logo.svg" //aixar a bibliotexa e tipar par ausar como componente
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

type FormDataProps = {
    name: string;
    email: string;
    password: string;
    password_confirm: string;
}

const signUpSchema = yup.object({
    name: yup.string().required('Inform Name'),
    email: yup.string().required('Inform Email').email('E-mail invalid'),
    password: yup.string().required('Inform password').min(6, 'Password should have at least 6 character'),
    password_confirm: yup.string().required('Confirm password').oneOf([yup.ref("password"), ""], "Password does not match")
})

export function SignUp() {

    const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
        resolver: yupResolver(signUpSchema)
    }); //esse control primeiro parametro q vai dizer aos inputs quem vai controlar
    // handlesubmit pega todo conteudo do formulari e envia de uma vez
    //formState recupera os erros
    const { goBack } = useNavigation()
    function handleGoBack() {
        goBack()
    }

    function handleSignUp(data: FormDataProps) {
        console.log(data)
    }


    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}
            //esse show vertical tem q tirar a barra de rolagem colocando false
            // vstack poe os elementos na vertical um emabixo do outro
            showsVerticalScrollIndicator={false}>

            <VStack flex={1}>
                <Image
                    w="$full"
                    h={624}
                    defaultSource={BackGroundImage} // acelera o carregamento da image
                    source={BackGroundImage}
                    alt="background"
                    position="absolute"
                />

                <VStack flex={1} px="$10" pb="$16">

                    <Center my="$24">
                        <Logo />

                        <Text color="$gray100" fontSize="$sm">
                            Train your mind and your body
                        </Text>
                    </Center>

                    <Center gap="$2" flex={1}>
                        {/* component para titulo guestack ja poe em negrito e deixa maior */}
                        <Heading color="$gray100">Join Ignite Gym Today</Heading>
                        <Controller
                            control={control}
                            name="name"
                            render={({ field: { onChange, value } }) => (
                                <Input placeholder="Name"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.name?.message}
                                />
                            )} //render eu digo qual input q quero renderizar
                        />

                        <Controller
                            control={control}
                            name="email"
                            // rules={{
                            //     required: 'Inform your email.',
                            //     pattern: {
                            //         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            //         message: 'invalid email'
                            //     }
                            // }} aq quais as regras de validacao eu quero colocar pra esse input name no caso
                            render={({ field: { onChange, value } }) => (
                                <Input placeholder="E-mail"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.email?.message}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="password"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder="Password"
                                    secureTextEntry
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.password?.message}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name="password_confirm"
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder="Confirm Password"
                                    secureTextEntry
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.password_confirm?.message}
                                />
                            )}
                        />

                        <Button title="Sign Up" onPress={handleSubmit(handleSignUp)} />
                    </Center>

                    <Button title="Go back to Log In" variant="outline" mt="$12" onPress={handleGoBack} />


                </VStack>
            </VStack>
        </ScrollView>
    )
}