import {
    Button,
    chakra,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Stack,
    useToast,
} from '@chakra-ui/react';
import PasswordField from './PasswordField';
import { useForm } from 'react-hook-form';

const SignupForm = props => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const toast = useToast({
        position: 'top-right',
        duration: 5000,
        isClosable: true,
    });

    const onSubmit = data => {
        // your login logic here
        return new Promise((resolve, reject) => {
            console.log(data);
            setTimeout(() => {
                toast({
                    title: 'Success',
                    description: 'You have successfully Registered.',
                    status: 'success',
                });
                resolve();
            }, 2000);
        });
    };

    return (
        <chakra.form onSubmit={handleSubmit(onSubmit)} {...props}>
            <Stack spacing='6'>
                <FormControl
                    id='username'
                    isRequired
                    isInvalid={errors?.username}
                >
                    <FormLabel htmlFor='username'>Username</FormLabel>
                    <Input
                        id='username'
                        type='text'
                        required
                        placeholder='Enter your username'
                        {...register('username', {
                            required: 'username is required',
                            minLength: {
                                value: 3,
                                message:
                                    'username must be at least 3 characters',
                            },
                        })}
                    />
                    <FormErrorMessage>
                        {errors.username && errors.username.message}
                    </FormErrorMessage>
                </FormControl>

                <FormControl id='email' isRequired isInvalid={errors?.email}>
                    <FormLabel htmlFor='email'>Email address</FormLabel>
                    <Input
                        id='email'
                        type='email'
                        autoComplete='email'
                        required
                        placeholder='Email address'
                        {...register('email', {
                            required: 'Email is required',
                        })}
                    />
                    <FormErrorMessage>
                        {errors.email && errors.email.message}
                    </FormErrorMessage>
                </FormControl>

                <PasswordField errors={errors} register={register} />
                <Button
                    type='submit'
                    colorScheme='blue'
                    size='lg'
                    fontSize='md'
                    isLoading={isSubmitting}
                >
                    Sign in
                </Button>
            </Stack>
        </chakra.form>
    );
};

export default SignupForm;
