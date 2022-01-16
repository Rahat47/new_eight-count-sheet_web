import { Link, useNavigate } from 'react-router-dom';
import {
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    useColorModeValue,
    useColorMode,
    useBreakpointValue,
    useDisclosure,
    Box,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export default function Navbar() {
    const navigate = useNavigate();

    const { isOpen, onToggle } = useDisclosure();

    const { toggleColorMode } = useColorMode();
    const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);
    const text = useColorModeValue('dark', 'light');

    return (
        <Box
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
        >
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                align={'center'}
                as='nav'
                maxW='7xl'
                mx='auto'
            >
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? (
                                <CloseIcon w={3} h={3} />
                            ) : (
                                <HamburgerIcon w={5} h={5} />
                            )
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex
                    flex={{ base: 1 }}
                    justify={{ base: 'center', md: 'start' }}
                >
                    <Link to='/'>
                        <Text
                            textAlign={useBreakpointValue({
                                base: 'center',
                                md: 'left',
                            })}
                            fontFamily={'heading'}
                            color={useColorModeValue('gray.800', 'white')}
                        >
                            8 Count Sheet
                        </Text>
                    </Link>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}
                >
                    <IconButton
                        size='md'
                        fontSize='lg'
                        aria-label={`Switch to ${text} mode`}
                        variant='ghost'
                        color='current'
                        ml={{ base: '0', md: '3' }}
                        onClick={toggleColorMode}
                        icon={<SwitchIcon />}
                    />
                    <Button
                        fontSize={'sm'}
                        fontWeight={400}
                        variant={'link'}
                        onClick={() => {
                            navigate('/auth/login');
                        }}
                    >
                        Sign In
                    </Button>
                    <Button
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg='brand.primary'
                        onClick={() => {
                            navigate('/auth/register');
                        }}
                        _hover={{
                            bg: 'pink.300',
                        }}
                    >
                        Sign Up
                    </Button>
                </Stack>
            </Flex>

            <Collapse in={isOpen} animateOpacity>
                <MobileNav onToggle={onToggle} />
            </Collapse>
        </Box>
    );
}
