import {
    Box,
    Button,
    Center,
    Heading,
    LightMode,
    SimpleGrid,
    Text,
} from '@chakra-ui/react';

const HeroSection = () => {
    return (
        <Box
            as='section'
            bg='gray.800'
            py='12'
            position='relative'
            h={'100vh'}
            bgImage='url(/static/media/hero_bg.jpg)'
            bgSize='cover'
            bgPosition='center'
            _after={{
                content: `""`,
                display: 'block',
                w: 'full',
                h: 'full',
                bg: 'blackAlpha.700',
                position: 'absolute',
                inset: 0,
                zIndex: 0,
            }}
        >
            <Box
                maxW={{
                    base: 'xl',
                    md: '7xl',
                }}
                mx='auto'
                px={{
                    base: '6',
                    md: '8',
                }}
                h='full'
                zIndex={1}
                position='relative'
            >
                <Center
                    flexDirection='column'
                    textAlign='center'
                    color='white'
                    h='full'
                >
                    <Heading
                        size='3xl'
                        fontWeight='extrabold'
                        fontStyle='italic'
                    >
                        Choreography and Cheer Music
                    </Heading>
                    <Text fontSize='2xl' fontWeight='medium' mt='4'>
                        A Must Have Tool For Professionals
                    </Text>
                    <LightMode>
                        <Button
                            colorScheme='pink'
                            size='lg'
                            py='8'
                            mt='20'
                            fontWeight='bold'
                            fontSize='md'
                            rounded='full'
                        >
                            Click here to use our 8count Sheet
                        </Button>
                    </LightMode>
                </Center>
            </Box>
            <Box
                display={{
                    base: 'none',
                    md: 'block',
                }}
                position='absolute'
                zIndex={2}
                w='full'
                bottom='0'
                py='4'
                bg='blackAlpha.400'
            >
                <Box
                    maxW={{
                        base: 'xl',
                        md: '7xl',
                    }}
                    mx='auto'
                >
                    <SimpleGrid
                        columns={{
                            base: 1,
                            md: 3,
                        }}
                    >
                        <Box textAlign='center' color='white'>
                            <Text>A new User joins every</Text>
                            <Text fontSize='3xl'>10 MIN</Text>
                        </Box>
                        <Box textAlign='center' color='white'>
                            <Text>Sheets Generated</Text>
                            <Text fontSize='3xl'>50+</Text>
                        </Box>
                        <Box textAlign='center' color='white'>
                            <Text>Price Range</Text>
                            <Text fontSize='3xl'>Free Forever</Text>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSection;
