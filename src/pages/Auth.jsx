import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import Card from '../components/AuthComponents/Card';
import DividerWithText from '../components/AuthComponents/DividerWithText';
import LoginForm from '../components/AuthComponents/LoginForm';
import Logo from '../components/Logo/Logo';
import { useParams, Link } from 'react-router-dom';
import SocialLogin from '../components/AuthComponents/SocialLogin';
import SignupForm from '../components/AuthComponents/SignupForm';

const Auth = () => {
    const { action } = useParams();

    return (
        <Box
            bg={useColorModeValue('gray.50', 'inherit')}
            minH='100vh'
            py='12'
            px={{ base: '4', lg: '8' }}
        >
            <Box maxW='md' mx='auto'>
                <Logo
                    textAlign='center'
                    mx='auto'
                    mb={{ base: '10', md: '20' }}
                />
                <Heading textAlign='center' size='xl' fontWeight='extrabold'>
                    {action === 'login'
                        ? 'Sign in to your account'
                        : 'Create your account'}
                </Heading>
                <Text
                    mt='4'
                    mb='8'
                    align='center'
                    maxW='md'
                    fontWeight='medium'
                >
                    <Text as='span'>
                        {action === 'login'
                            ? 'Don’t have an account?'
                            : 'Already have an account?'}
                    </Text>
                    &nbsp;&mdash;&nbsp;
                    <Link
                        to={
                            action === 'login'
                                ? '/auth/register'
                                : '/auth/login'
                        }
                    >
                        {action === 'login' ? 'Get one now!' : 'Sign in'}
                    </Link>
                </Text>
                <Card>
                    {action === 'login' ? <LoginForm /> : <SignupForm />}

                    <DividerWithText mt='6'>or continue with</DividerWithText>

                    <SocialLogin />
                </Card>
            </Box>
        </Box>
    );
};

export default Auth;
