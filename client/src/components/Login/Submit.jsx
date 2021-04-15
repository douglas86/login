import { useContext } from "react";
import { Context } from "./Context";
import axios from "axios";

const Submit = () => {
  const User = useContext(Context);

  const handleSubmit = () => {
    const url = "http://localhost:5000/profile/login";
    axios
      .post(url, { user: User.data })
      .then(axios.get(url).then((res) => console.log(res)))
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
