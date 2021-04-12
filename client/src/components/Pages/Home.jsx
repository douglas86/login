import GoogleBtn from '../Google/login.jsx';
import LoginForm from '../Login/Form.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return (
        <div>
            <LoginForm />
            <GoogleBtn />
        </div>
    );
};

export default Home;
