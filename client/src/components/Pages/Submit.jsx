import { useContext } from "react";
import { Context } from "./Context.jsx";

const Submit = () => {
  const user = useContext(Context);

  const handleSubmit = (e) => {
    console.log(user.data);
  };

  return {
    handleSubmit,
  };
};

export default Submit;
