import { Form, Button } from "react-bootstrap";
import useStyles from "../../../style.jsx";

const Left = () => {
  const classes = useStyles();
  return (
    <div className={classes.leftForm}>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Create your Memories here</Form.Label>
          <Form.Control
            className={classes.control}
            type="text"
            placeholder="Title"
          />
          <Form.Control
            className={classes.control}
            type="text"
            placeholder="Message"
          />
          <Form.Control
            className={classes.control}
            type="text"
            placeholder="Tags"
          />
          <Form.File className={classes.control} label="Choose a file" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Left;
