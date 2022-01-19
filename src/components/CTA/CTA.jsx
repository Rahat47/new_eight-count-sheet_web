import {
    Box,
    Button,
    Heading,
    Link,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

export const CTA = () => (
    <Box as='section' bg={useColorModeValue('gray.200', 'gray.900')}>
        <Box
            maxW='6xl'
            mx='auto'
            px={{ base: '6', lg: '8' }}
            py={{ base: '16', sm: '20' }}
            textAlign='center'
        >
            <Heading
                size='3xl'
                fontWeight='extrabold'
                letterSpacing='tight'
                bgGradient='linear(to-l, #ec008c , #9e2ff7 )'
                bgClip='text'
                py={4}
            >
                Ready to get started?
            </Heading>
            <Text my='6' fontSize='3xl'>
                TO GET YOUR CUSTOM 8 COUNT SHEET MADE PLEASE EMAIL US AT{' '}
                <Link href='mailto:info@8countsheets.com'>
                    info@8countsheets.com
                </Link>
            </Text>
            <Button
                mt='8'
                size='lg'
                colorScheme='pink'
                fontWeight='bold'
                rounded='full'
            >
                Get Started Now
            </Button>
        </Box>
    </Box>
);
