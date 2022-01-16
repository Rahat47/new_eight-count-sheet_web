import { chakra } from '@chakra-ui/react';
import { Counter } from './features/counter/Counter';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <chakra.header>
                <Navbar />
            </chakra.header>

            <chakra.main>
                <Routes>
                    <Route path='/' element={<Counter />} />
                </Routes>
            </chakra.main>

            <chakra.footer>
                <Footer />
            </chakra.footer>
        </>
    );
}

export default App;
