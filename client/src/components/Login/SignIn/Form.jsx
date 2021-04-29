import { Provider } from "./Context";
import useStyles from "./styling";
import Inputs from "./Inputs";
import Btn from "./Button";

const Form = () => {
  const classes = useStyles();
  return (
    <div className={classes.form}>
      <h2 className={classes.heading}>Sign In</h2>
      <Provider>
        <Inputs />
        <Btn />
      </Provider>
    </div>
  );
};

export default Form;
