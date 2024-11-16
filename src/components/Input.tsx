import { ComponentProps } from "react"
import { Input as GluestackInput, InputField, FormControl, FormControlErrorText, FormControlError } from "@gluestack-ui/themed" //input do gluestack e separado por partes 


type Props = ComponentProps<typeof InputField> & {
    errorMessage?: string | null;
    isInvalid?: boolean
    isReadOnly?: boolean
}

export function Input({ isReadOnly = false, errorMessage = null, isInvalid = false, ...props }: Props) {

    const invalid = !!errorMessage || isInvalid

    return (
        <FormControl isInvalid={invalid} w="$full" mb="$4">
            <GluestackInput bg="$gray700" h="$14" px="$4" borderWidth="$0" borderRadius="$md" isInvalid={invalid}
                $focus={{
                    borderWidth: 1,
                    borderColor: invalid ? "$red500" : "$green500"
                }}
                $invalid={{
                    borderWidth: 1,
                    borderColor: "$red500"
                }}
                isReadOnly={isReadOnly}
                opacity={isReadOnly ? 0.5 : 1}
              
            >
                <InputField color="$white" fontFamily="$body" placeholderTextColor="$gray300" {...props} px="$4"
                    bg="$gray700" />
            </GluestackInput>
            <FormControlError>
                <FormControlErrorText color="$red500">
                    {errorMessage}
                </FormControlErrorText>
            </FormControlError>
        </FormControl>
    )
}