import { Heading, HStack, Text, VStack, Icon } from "@gluestack-ui/themed";
import { UserPhoto } from "./UserPhoto";
import { LogOut } from "lucide-react-native"

export function HomeHeader() {
    return (
        //hstack poe uma coisa do lado da outra
        <HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center" gap="$4">
            <UserPhoto
            source={{ uri: "https://github.com/felipeanselmonascimento.png" }}
            alt="PhotoProfile"
            w="$16"
            h="$16"
            />
            <VStack flex={1}>
                <Text color="$gray100" fontSize="$sm">Hello,</Text>
                <Heading color="$gray100" fontSize="$md">Felipe Anselmo</Heading>
            </VStack>

            <Icon as={LogOut} color="$gray200" size="xl"/>
            
        </HStack>
    )
}

//  <Icon as={LogOut} />  , para o LogOut reconhecer as cores do gluestackui theme