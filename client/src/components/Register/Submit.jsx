import { useContext } from "react";
import { Context } from "./Context";
import axios from "axios";

const Submit = () => {
  const User = useContext(Context);

  const handleSubmit = () => {
    console.log(User.data);
    if (User.data.pName !== User.data.p2Name) {
      alert("Passwords do not match");
    } else {
      alert("Passwords match");
      axios
        .post("http://localhost:5000/user/regular", { user: User.data })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
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
