import {
    Box,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    useColorModeValue as mode,
    useDisclosure,
    useMergeRefs,
} from '@chakra-ui/react';
import { forwardRef, useRef } from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const PasswordField = forwardRef((props, ref) => {
    const { isOpen, onToggle } = useDisclosure();
    const inputRef = useRef(null);

    const mergeRef = useMergeRefs(inputRef, ref);

    const onClickReveal = () => {
        onToggle();
        const input = inputRef.current;
        if (input) {
            input.focus({ preventScroll: true });
            const length = input.value.length * 2;
            requestAnimationFrame(() => {
                input.setSelectionRange(length, length);
            });
        }
    };

    return (
        <FormControl
            id='password'
            isRequired
            isInvalid={props?.errors?.password}
        >
            <Flex justify='space-between'>
                <FormLabel htmlFor='password'>Password</FormLabel>
                {props.showForgot && (
                    <Box
                        color={mode('blue.600', 'blue.200')}
                        fontWeight='semibold'
                        fontSize='sm'
                    >
                        <Link to='/'>Forgot Password?</Link>
                    </Box>
                )}
            </Flex>
            <InputGroup>
                <InputRightElement>
                    <IconButton
                        bg='transparent !important'
                        variant='ghost'
                        aria-label={
                            isOpen ? 'Mask password' : 'Reveal password'
                        }
                        icon={isOpen ? <HiEyeOff /> : <HiEye />}
                        onClick={onClickReveal}
                    />
                </InputRightElement>
                <Input
                    ref={mergeRef}
                    id='password'
                    type={isOpen ? 'text' : 'password'}
                    autoComplete='current-password'
                    required
                    placeholder='Password'
                    {...props.register('password', {
                        required: 'Password is required',
                    })}
                />
            </InputGroup>
            <FormErrorMessage>
                {props?.errors?.password && props?.errors?.password?.message}
            </FormErrorMessage>
        </FormControl>
    );
});

PasswordField.displayName = 'PasswordField';

export default PasswordField;
