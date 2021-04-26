import axios from "axios";

const localhost = process.env.REACT_APP_LOCALHOST;

const Submit = () => {
  let googleData = [];

  const handleSubmit = (e) => {
    googleData.push(e);
    axios
      .post(`${localhost}/google`, { googleInfo: googleData[0] })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    console.log("google: " + googleData[0].googleId);
    window.location = "/profile/google";
  };

  return {
    handleSubmit,
  };
};

export default Submit;
