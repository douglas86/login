import { GoogleLogin } from "react-google-login";
import axios from "axios";

const localhost = process.env.REACT_APP_LOCALHOST;

const handleSubmit = (googleData) => {
  console.log(googleData);
  axios
    .post(`${localhost}/api/google`, { googleInfo: googleData })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

const Login = () => {
  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Sign in with Google"
        onSuccess={handleSubmit}
      />
    </div>
  );
};

export default Login;
