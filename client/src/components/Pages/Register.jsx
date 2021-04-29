import Form from "../Login/Register/Form";
import useStyles from "./styles";

const Register = () => {
  const classes = useStyles();
  return (
    <div className={classes.register}>
      <Form />
    </div>
  );
};

export default Register;
