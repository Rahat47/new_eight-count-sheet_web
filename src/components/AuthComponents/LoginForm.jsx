import {
    Button,
    chakra,
    FormControl,
    FormLabel,
    Input,
    Stack,
} from '@chakra-ui/react';
import PasswordField from './PasswordField';

const LoginForm = props => {
    return (
        <chakra.form
            onSubmit={e => {
                e.preventDefault();
                // your login logic here
            }}
            {...props}
        >
            <Stack spacing='6'>
                <FormControl id='email' isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                        name='email'
                        type='email'
                        autoComplete='email'
                        required
                    />
                </FormControl>
                <PasswordField showForgot />
                <Button
                    type='submit'
                    colorScheme='blue'
                    size='lg'
                    fontSize='md'
                >
                    Sign in
                </Button>
            </Stack>
        </chakra.form>
    );
};

export default LoginForm;
