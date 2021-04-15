import { useContext } from "react";
import { Context } from "./Context";
import axios from "axios";

const Submit = () => {
  const User = useContext(Context);

  const handleSubmit = () => {
    console.log(User.data);
    axios.post("http://localhost:5000/profile/login", { user: User.data });
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
