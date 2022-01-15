import { chakra } from '@chakra-ui/react';
import { Counter } from './features/counter/Counter';

function App() {
    return (
        <div className='App'>
            <chakra.header>
                <Counter />
            </chakra.header>
        </div>
    );
}

export default App;
