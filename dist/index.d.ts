import React, { ReactNode } from 'react';
import { InputProps, SelectProps, TextareaProps, SwitchProps, CardProps, ModalProps } from '@chakra-ui/react';

declare function setupCounter(element: HTMLButtonElement): void;

declare function Header({ title }: {
    title: string;
}): string;

declare function Counter(): string;

declare const Button: () => React.JSX.Element;

interface CustomInputProps extends InputProps {
    label?: string;
    name: string;
}
declare const Input: React.FC<CustomInputProps>;

interface Option {
    label: string;
    value: string | number;
}
interface CustomSelectProps extends SelectProps {
    label?: string;
    name: string;
    option: Option[];
}
declare const Select: React.FC<CustomSelectProps>;

interface CustomTextAreaProps extends TextareaProps {
    label?: string;
    name: string;
    props?: any;
}
declare const TextArea: React.FC<CustomTextAreaProps>;

interface CustomSwitchProps extends SwitchProps {
    label?: string;
}
declare const CustomSwitch: React.FC<CustomSwitchProps>;

interface CustomCardProps extends CardProps {
    isHeader?: boolean;
    isFooter?: boolean;
    headerContent?: ReactNode;
    footerContent?: ReactNode;
    cardMainContent?: ReactNode;
}
declare const CustomCard: React.FC<CustomCardProps>;

interface CustomModalProps extends ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
declare const CustomModal: React.FC<CustomModalProps>;

export { Button, Counter, CustomCard, CustomModal, CustomSwitch, Header, Input, Select, TextArea, setupCounter };
