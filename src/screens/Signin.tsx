import { Center, Image, VStack, Text, Heading, ScrollView } from "@gluestack-ui/themed";
import BackGroundImage from "../assets/background.png"
import Logo from "@assets/logo.svg" //aixar a bibliotexa e tipar par ausar como componente
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes"

export function SignIn() {

    const { navigate } = useNavigation<AuthNavigatorRoutesProps>()

    function handleNewAccount () {
        navigate("signUp")
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1}}
        //esse show vertical tem q tirar a barra de rolagem colocando false
        showsVerticalScrollIndicator={false}>
        {/* // vstack poe os elementos na vertical um emabixo do outro */}
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

                    <Center gap="$2">
                        {/* component para titulo guestack ja poe em negrito e deixa maior */}
                        <Heading color="$gray100">Log In to Ignite Gym</Heading>
                        <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" />
                        <Input placeholder="Password" secureTextEntry />

                        <Button title="Log In" />
                    </Center>

                    <Center flex={1} justifyContent="flex-end" mt="$4">
                        <Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$body">Don't have an account? Sign up</Text>
                        <Button title="Create Account" variant="outline" onPress={handleNewAccount}/>
                    </Center>

                </VStack>
            </VStack>
        </ScrollView>
    )
}