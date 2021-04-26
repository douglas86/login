import { GoogleLogin } from "react-google-login";

import { Provider } from "./Context.jsx";
import Submit from "./Submit";

const Login = () => {
  const { handleSubmit } = Submit();
  return (
    <div>
      <Provider>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Sign in with Google"
          onSuccess={handleSubmit}
        />
      </Provider>
    </div>
  );
};

export default Login;
