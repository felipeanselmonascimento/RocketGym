import { ComponentProps } from "react"
import { Input as GluestackInput, InputField} from "@gluestack-ui/themed" //input do gluestack e separado por partes 

type Props = ComponentProps<typeof InputField> & {
    isReadOnly?: boolean
}

export function Input({ isReadOnly = false, ...props }: Props) {
    return (
        <GluestackInput bg="$gray700" h="$14" px="$4" borderWidth="$0" borderRadius="$md"
            $focus={{
                borderWidth: 1,
                borderColor: "$green500"
            }}
            isReadOnly={isReadOnly}
            opacity={isReadOnly ? 0.5 : 1}
        >
            <InputField color="$white" fontFamily="$body" placeholderTextColor="$gray300" {...props} px="$4"
                bg="$gray700" />
        </GluestackInput>
    )
}