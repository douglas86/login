import GoogleBtn from "../Login/Google/login.jsx";
import LoginForm from "../Login/SignIn/Form.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import useStyles from "./styles";
import { Provider } from "./Context.jsx";

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <Provider>
        <LoginForm />
        <GoogleBtn />
      </Provider>
    </div>
  );
};

export default Home;
