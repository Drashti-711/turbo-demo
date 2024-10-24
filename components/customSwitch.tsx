import React from 'react'
import { FormControl, FormLabel, Switch, SwitchProps } from '@chakra-ui/react'

interface CustomSwitchProps extends SwitchProps {
  label?: string;
}

export const CustomSwitch: React.FC<CustomSwitchProps> = ({
  label = 'Enable email alerts?',
  ...rest
}) => {
    return (
        <FormControl display='flex' alignItems='center'>
            <FormLabel htmlFor='email-alerts' mb='0'>
                {label}
            </FormLabel>
            <Switch id='email-alerts' {...rest} />
        </FormControl>
    )
}