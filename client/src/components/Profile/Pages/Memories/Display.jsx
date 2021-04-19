import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import useStyles from "./style.jsx";
import Memory from "../../Images/memories.jpg";
import axios from "axios"

// Left and Right handside of display
import Left from "./LeftSide/Left.jsx";
import Right from "./RightSide/Right.jsx";

const Display = () => {
  const classes = useStyles();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/profile")
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  },[]);

  console.log(data);

  return (
    <div>
      <h5 className={classes.display}>
        Memories
        <img className={classes.image} src={Memory} />
      </h5>
      <Container>
        <Row>
          <Col xl={9}>
            <Left />
          </Col>
          <Col xl={3}>
            <Right />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Display;
