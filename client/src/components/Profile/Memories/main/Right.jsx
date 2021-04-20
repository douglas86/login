// import { Form, Button } from 'react-bootstrap';
import useStyles from './style.jsx';
import { Provider } from '../Right/Context';
import Inputs from '../Right/Inputs';
import Btn from '../Right/Btn';

const Right = () => {
    const classes = useStyles();

    return (
        <div className={classes.rightForm}>
            <h6>Create a new Memory below</h6>
            <Provider>
                <Inputs />
                <Btn />
            </Provider>
        </div>
    );
};

export default Right;
