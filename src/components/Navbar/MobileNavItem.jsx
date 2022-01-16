import { Flex, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const MobileNavItem = ({ label, href, onToggle }) => {
    return (
        <Stack spacing={4}>
            <Flex
                py={2}
                as={Link}
                to={href ?? '/'}
                justify={'center'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}
                onClick={onToggle}
            >
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}
                >
                    {label}
                </Text>
            </Flex>
        </Stack>
    );
};

export default MobileNavItem;
