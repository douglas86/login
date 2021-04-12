import 'bootstrap/dist/css/bootstrap.min.css';
import { useRoutes } from 'hookrouter';
import routes from './router';
import NotFound from './Pages/NotFound.jsx';

const App = () => {
    const routerRoutes = useRoutes(routes);
    return routerRoutes || <NotFound />;
};

export default App;
