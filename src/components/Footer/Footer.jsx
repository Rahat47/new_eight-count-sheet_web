import {
    Box,
    Container,
    Heading,
    IconButton,
    Link,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { FOOTER_SOCIAL_LINKS } from '../../assets/dev_data/footer';

const SocialButton = ({ children, href, color }) => {
    return (
        <IconButton
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded='full'
            as={Link}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            isExternal
            transition={'background 0.3s ease'}
            _hover={{
                bg: color,
                color: 'white',
            }}
            icon={children}
        />
    );
};

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}
        >
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
            >
                <Heading as='h1' size='lg'>
                    8 Count Sheet
                </Heading>
                <Text fontFamily='body'>
                    &copy; {new Date().getFullYear()} 8 Count Sheet. All rights
                    reserved
                </Text>
                <Stack direction={'row'} spacing={3}>
                    {FOOTER_SOCIAL_LINKS.map(item => (
                        <SocialButton
                            label={item.label}
                            href={item.href}
                            color={item.color}
                            key={item.label}
                        >
                            {item.Icon}
                        </SocialButton>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
