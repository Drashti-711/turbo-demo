import { Button, Card, CardBody, CardFooter, CardHeader, CardProps, Image } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface CustomCardProps extends CardProps {
    isHeader?: boolean;
    isFooter?: boolean;
    headerContent?: ReactNode;
    footerContent?: ReactNode;
    cardMainContent?: ReactNode;
}

export const CustomCard: React.FC<CustomCardProps> = ({
    isHeader = false,
    isFooter = false,
    headerContent = <></>,
    footerContent = <></>,
    cardMainContent = <></>,
    ...rest
}) => {
    return (
        <Card maxW='md' {...rest}>
            {isHeader && <CardHeader>
                {headerContent}
            </CardHeader>}
            <CardBody>
                {cardMainContent}
            </CardBody>
            <Image
                objectFit='cover'
                src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Chakra UI'
            />

            {isFooter && <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                    '& > button': {
                        minW: '136px',
                    },
                }}
            >
                <Button flex='1' variant='ghost' leftIcon={<></>}>
                    Like
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<></>}>
                    Comment
                </Button>
                <Button flex='1' variant='ghost' leftIcon={<></>}>
                    Share
                </Button>
                {footerContent}
            </CardFooter>}
        </Card>
    )
}