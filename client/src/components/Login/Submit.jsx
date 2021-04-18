import { useContext } from "react";
import { Context } from "./Context";
import axios from "axios";

const Submit = () => {
  const User = useContext(Context);

  const handleSubmit = () => {
    let url = "http://localhost:5000/profile/login";

    // passing username and password to express
    axios
      .get(`${url}/${User.data.uName}/${User.data.pName}`)
      .then((res) => {
        // if password is true
        if (res.data) {
          window.location = "/profile";
          // if password is false
        } else {
          console.log(res.data);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleInputChange = (e) => {
    e.persist();
    User.setData((i) => ({
      ...i,
      [e.target.name]: e.target.value,
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
  };
};

export default Submit;
