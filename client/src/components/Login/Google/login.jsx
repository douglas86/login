import GoogleLogin from "react-google-login";
import Submit from "./Submit.jsx";

const responseGoogle = (response) => {
  console.log(response);
};

const Login = () => {
  const { handleSuccess, handleFailure } = Submit();
  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Login;
