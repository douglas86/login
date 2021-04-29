import { Button } from "react-bootstrap";
import Submit from "./Submit";
import useStyles from "./styles";

const Btn = () => {
  const { handleSubmit } = Submit();
  const classes = useStyles();
  return (
    <div>
      <Button
        className={classes.button}
        variant="primary"
        type="submit"
        onClick={handleSubmit}
      >
        Register
      </Button>
    </div>
  );
};

export default Btn;
