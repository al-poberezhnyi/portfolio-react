import { Route, Routes } from 'react-router';
import Layout from './pages/Layout';
import Home from './pages/home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Projects from './pages/Projects';
import NotFaund from './components/NotFaund';

function App () {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contacts />} />
                    <Route path='/project' element={<Projects />} />
                    <Route path='/*' element={<NotFaund />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
