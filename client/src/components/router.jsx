import Home from './Pages/Home';
import Register from './Pages/Register';

const router = {
    '/': () => <Home />,
    '/register': () => <Register />,
};

export default router;
