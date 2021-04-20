import { Form, Button } from 'react-bootstrap';
import useStyles from '../main/style.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Right = () => {
    const classes = useStyles();
    const [data, setData] = useState({});

    // Grabs data from user.json file in express
    useEffect(() => {
        axios
            .get('http://localhost:5000/profile')
            .then((res) => setData(res))
            .catch((err) => console.log(err));
    }, []);

    console.log(data);

    return (
        <div className={classes.rightForm}>
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
                    <Form.File
                        className={classes.control}
                        label="Choose a file"
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Right;
