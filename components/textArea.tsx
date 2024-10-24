import { FormControl, FormLabel, Textarea, TextareaProps } from '@chakra-ui/react'
import React from 'react'

interface CustomTextAreaProps extends TextareaProps {
    label?: string;
    name: string;
    props?: any; // Additional props to pass down to the textarea component.
}


export const TextArea: React.FC<CustomTextAreaProps> = ({ label, name, ...props }) => {
    return (
        <>
            <FormControl id={name}>
                {label && <FormLabel>{label}</FormLabel>}
                <Textarea name={name} placeholder='Here is a sample placeholder' {...props}  />
            </FormControl>
        </>
    )
}
