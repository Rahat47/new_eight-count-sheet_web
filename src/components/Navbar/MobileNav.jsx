import { Stack, useColorModeValue } from '@chakra-ui/react';
import { NAV_ITEMS } from '../../assets/dev_data/nav';
import MobileNavItem from './MobileNavItem';

const MobileNav = ({ onToggle }) => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}
        >
            {NAV_ITEMS.map(navItem => (
                <MobileNavItem
                    onToggle={onToggle}
                    key={navItem.label}
                    {...navItem}
                />
            ))}
        </Stack>
    );
};

export default MobileNav;
