import { Suspense, lazy } from 'react';
import { chakra } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';
// import Auth from './pages/Auth';
// Lazy components
const Landing = lazy(() => import('./pages/Landing'));
const Auth = lazy(() => import('./pages/Auth'));

function App() {
    return (
        <>
            <chakra.header>
                <Navbar />
            </chakra.header>

            <chakra.main>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <Suspense fallback={<Loading />}>
                                <Landing />
                            </Suspense>
                        }
                    />

                    <Route
                        path={'/auth/:action'}
                        element={
                            <Suspense fallback={<Loading />}>
                                <Auth />
                            </Suspense>
                        }
                    />
                </Routes>
            </chakra.main>

            <chakra.footer>
                <Footer />
            </chakra.footer>
        </>
    );
}

export default App;
