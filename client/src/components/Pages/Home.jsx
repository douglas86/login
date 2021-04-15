import GoogleBtn from "../Google/login.jsx";
import LoginForm from "../Login/Form.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <LoginForm />
      <GoogleBtn />
    </div>
  );
};

export default Home;
