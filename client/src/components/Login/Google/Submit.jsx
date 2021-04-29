import { useContext } from "react";
import { Context } from "./Context.jsx";
import axios from "axios";

const Submit = () => {
  const user = useContext(Context);

  const handleSuccess = (googleData) => {
    console.log(googleData);
    axios
      .post("http://localhost:5000/google/", googleData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location = "/profile";
  };

  const handleFailure = (googleData) => {
    alert(`Failed to log in ${googleData}`);
  };

  return {
    handleSuccess,
    handleFailure,
  };
};

export default Submit;
