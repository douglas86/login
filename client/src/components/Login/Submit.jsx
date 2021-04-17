import { useContext } from "react";
import { Context } from "./Context";
import axios from "axios";

let current = [];

const Submit = () => {
  const User = useContext(Context);

  const handleSubmit = () => {
    let url = "http://localhost:5000/profile/login";

    axios
      .get(`${url}/${User.data.uName}/${User.data.pName}`)
      .then((res) => {
        if (res.data) {
          window.location = "/profile";
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
