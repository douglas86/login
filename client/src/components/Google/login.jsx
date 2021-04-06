import { GoogleLogin } from "react-google-login";
import axios from "axios";

const handleSubmit = (googleData) => {
  console.log(googleData);
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
