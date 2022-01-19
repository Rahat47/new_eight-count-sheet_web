import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
    Flex,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { features } from '../../assets/dev_data/features';
import { GiHeadphones } from 'react-icons/gi';

export default function Features() {
    return (
        <Box p={4} py={10}>
            <Stack spacing={4} as={Container} maxW={'6xl'} textAlign={'center'}>
                <Heading fontSize={'5xl'}>Features</Heading>
                <Text
                    color={'gray.600'}
                    fontSize={{
                        base: '4xl',
                        md: '6xl',
                    }}
                    bgGradient='linear(to-l, #ec008c , #9e2ff7 )'
                    bgClip='text'
                    fontStyle='italic'
                >
                    Custom 8countsheets.com include:
                </Text>
            </Stack>

            <Container maxW={'6xl'} mt={10}>
                <Flex
                    justify='space-between'
                    direction={{
                        base: 'column',
                        md: 'row',
                    }}
                >
                    <Flex
                        my='auto'
                        justify='center'
                        align='center'
                        mx={{
                            base: 'auto',
                            md: 20,
                        }}
                        mb={{
                            base: 6,
                            md: 'auto',
                        }}
                    >
                        <Icon
                            as={GiHeadphones}
                            color={'pink.500'}
                            h={20}
                            w={20}
                        />
                    </Flex>
                    <SimpleGrid
                        columns={1}
                        spacing={10}
                        ml={{
                            base: 0,
                            md: 20,
                        }}
                    >
                        {features.map(feature => (
                            <HStack key={feature.id} align={'top'}>
                                <Box color={'green.400'} px={2}>
                                    <Icon as={CheckIcon} />
                                </Box>
                                <VStack align={'start'}>
                                    <Text fontWeight={600}>
                                        {feature.title}
                                    </Text>
                                </VStack>
                            </HStack>
                        ))}
                    </SimpleGrid>
                </Flex>
            </Container>
        </Box>
    );
}
