import { Container, Row, Col } from 'react-bootstrap';
import useStyles from './style.jsx';
import Memory from '../../Images/memories.jpg';

// Left and Right handside of display
import Left from './Left.jsx';
import Right from './Right.jsx';

const Display = () => {
    const classes = useStyles();

    return (
        <div>
            <h5 className={classes.display}>
                Memories
                <img className={classes.image} src={Memory} alt="Memories" />
            </h5>
            <Container>
                <Row>
                    <Col lg={9}>
                        <Left />
                    </Col>
                    <Col lg={3}>
                        <Right />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Display;
