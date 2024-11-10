import { Center, Image, VStack, Text, Heading, ScrollView } from "@gluestack-ui/themed";
import BackGroundImage from "../assets/background.png"
import Logo from "@assets/logo.svg" //aixar a bibliotexa e tipar par ausar como componente
import { Input } from "@components/Input";
import { Button } from "@components/Button";


export function SignUp() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}
            //esse show vertical tem q tirar a barra de rolagem colocando false
            showsVerticalScrollIndicator={false}>
            {/* /* /* // vstack poe os elementos na vertical um emabixo do outro */}
            <VStack flex={1} bg="$gray700">
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
                        <Input placeholder="Name" />
                        <Input placeholder="E-mail" keyboardType="email-address" autoCapitalize="none" />
                        <Input placeholder="Password" secureTextEntry />

                        <Button title="Sign Up" />
                    </Center>

                    <Button title="Go back to Log In" variant="outline" mt="$12" />


                </VStack>
            </VStack>
        </ScrollView>
    )
}