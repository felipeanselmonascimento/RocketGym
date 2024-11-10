import { Center, Spinner } from "@gluestack-ui/themed";

export function Loading() {
    return (
        <Center flex={1} bg="$gray700">
            {/* spinner e o componente q exibe como se tivesse carregando */}
            <Spinner color="$green500"/> 
        </Center>
    )
}