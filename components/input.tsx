import React from 'react';
import { Input as ChakraInput, FormControl, FormLabel, InputProps } from '@chakra-ui/react';

interface CustomInputProps extends InputProps {
  label?: string;
  name: string;
}

export const Input: React.FC<CustomInputProps> = ({ label, name, ...props }) => {
  return (
    <FormControl id={name}>
      {label && <FormLabel>{label}</FormLabel>}
      <ChakraInput name={name} {...props} />
    </FormControl>
  );
};
