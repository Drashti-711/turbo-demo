import React from 'react';
import { Select as ChakraSelect, FormControl, FormLabel, SelectProps } from '@chakra-ui/react';

interface Option {
  label: string;
  value: string | number;
}

interface CustomSelectProps extends SelectProps {
  label?: string;
  name: string;
  option: Option[];
}

export const Select: React.FC<CustomSelectProps> = ({
  label = '',
  name = '',
  option = [],
  size = 'md',
  ...rest
}) => {
  return (
    <FormControl id={name}>
      {label && <FormLabel>{label}</FormLabel>}
      <ChakraSelect placeholder={`Select ${label}`} size={size} {...rest}>
        {option.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </ChakraSelect>
    </FormControl>
  );
};
