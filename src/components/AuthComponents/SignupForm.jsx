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
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
    .object({
        username: yup.string().required('username is required'),
        email: yup
            .string()
            .email('email is invalid')
            .required('email is required'),
        password: yup.string().required('password is required'),
    })
    .required('Please fill out all fields');

const SignupForm = props => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
    });

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
                        {...register('username')}
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
                        {...register('email')}
                    />
                    <FormErrorMessage>
                        {errors.email && errors.email.message}
                    </FormErrorMessage>
                </FormControl>

                <PasswordField errors={errors} register={register} />
                <Button
                    type='submit'
                    colorScheme='pink'
                    size='lg'
                    fontSize='md'
                    isLoading={isSubmitting}
                >
                    Sign up
                </Button>
            </Stack>
        </chakra.form>
    );
};

export default SignupForm;
