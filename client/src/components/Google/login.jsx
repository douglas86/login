import { GoogleLogin } from "react-google-login";
import axios from "axios";

const handleLogin = () => {
  axios
    .get("http://localhost:5000/api/v1/auth/google")
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

const Login = () => {
  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={() => console.log("Failure")}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Login;
