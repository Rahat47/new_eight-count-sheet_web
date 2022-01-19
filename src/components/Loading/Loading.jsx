import { Center, Text } from '@chakra-ui/react';
import { Triangle } from 'react-loader-spinner';

const Loading = ({ message }) => {
    return (
        <Center minH='100vh' flexDirection='column'>
            <Triangle
                heigth='120'
                width='120'
                color='#F94892'
                arialLabel='loading'
            />
            <Text fontSize='2xl' fontWeight='bold'>
                {message ? message : 'Loading Greatness...'}
            </Text>
        </Center>
    );
};

export default Loading;
