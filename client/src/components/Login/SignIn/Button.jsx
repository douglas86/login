import Submit from "./Submit";
import { Button } from "react-bootstrap";
import useStyles from "./styling.jsx";

const Btn = () => {
  const classes = useStyles();
  const { handleSubmit } = Submit();

  return (
    <div>
      <Button
        className={classes.button}
        variant="primary"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </Button>
      <p>
        Don't have an account? <a href="/register">Sign Up</a>
      </p>
    </div>
  );
};

export default Btn;
