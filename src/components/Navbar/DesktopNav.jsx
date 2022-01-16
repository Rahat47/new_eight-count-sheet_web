import { Box, chakra, Stack, useColorModeValue } from '@chakra-ui/react';
import { NAV_ITEMS } from '../../assets/dev_data/nav';
import { NavLink } from 'react-router-dom';

const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');

    const ChakraNavLink = chakra(NavLink);
    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map(navItem => (
                <Box key={navItem.label}>
                    <ChakraNavLink
                        p={2}
                        to={navItem.href ?? '/'}
                        fontSize={'sm'}
                        fontWeight={500}
                        color={linkColor}
                        _hover={{
                            textDecoration: 'none',
                            color: linkHoverColor,
                        }}
                    >
                        {navItem.label}
                    </ChakraNavLink>
                </Box>
            ))}
        </Stack>
    );
};

export default DesktopNav;
