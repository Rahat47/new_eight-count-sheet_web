import { Button, SimpleGrid, VisuallyHidden } from '@chakra-ui/react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <SimpleGrid mt='6' columns={3} spacing='3'>
            <Button colorScheme='facebook' variant='outline'>
                <VisuallyHidden>Login with Facebook</VisuallyHidden>
                <FaFacebook />
            </Button>
            <Button colorScheme='red' variant='outline'>
                <VisuallyHidden>Login with Google</VisuallyHidden>
                <FaGoogle />
            </Button>
            <Button colorScheme='gray' variant='outline'>
                <VisuallyHidden>Login with Github</VisuallyHidden>
                <FaGithub />
            </Button>
        </SimpleGrid>
    );
};

export default SocialLogin;
