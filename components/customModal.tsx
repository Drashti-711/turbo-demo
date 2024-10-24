import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ModalProps, Text } from '@chakra-ui/react'
import React from 'react'

interface CustomModalProps extends ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export const CustomModal: React.FC<CustomModalProps> = ({ isOpen = false, onClose, children = <></> }) => {
    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {isOpen && (
                <ModalOverlay
                    bg="blackAlpha.300"
                    backdropFilter="blur(10px) hue-rotate(90deg)"
                />
            )}
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>Custom backdrop filters!</Text>
                    {children}
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
