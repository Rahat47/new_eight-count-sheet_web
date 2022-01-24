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
import { useForm } from 'react-hook-form';
import PasswordField from './PasswordField';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
    .object({
        email: yup
            .string()
            .email('email is invalid')
            .required('email is required'),
        password: yup.string().required('password is required'),
    })
    .required('Please fill out all fields');

const LoginForm = props => {
    const toast = useToast({
        position: 'top-right',
        duration: 5000,
        isClosable: true,
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = data => {
        // your login logic here
        return new Promise((resolve, reject) => {
            console.log(data);
            setTimeout(() => {
                toast({
                    title: 'Success',
                    description: 'You have successfully logged in.',
                    status: 'success',
                });
                resolve();
            }, 2000);
        });
    };

    return (
        <chakra.form onSubmit={handleSubmit(onSubmit)} {...props}>
            <Stack spacing='6'>
                <FormControl id='email' isRequired isInvalid={errors?.email}>
                    <FormLabel htmlFor='email'>Email address</FormLabel>
                    <Input
                        id='email'
                        type='email'
                        placeholder='Email address'
                        {...register('email')}
                    />

                    <FormErrorMessage>
                        {errors.email && errors.email.message}
                    </FormErrorMessage>
                </FormControl>

                <PasswordField showForgot errors={errors} register={register} />

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

export default LoginForm;
