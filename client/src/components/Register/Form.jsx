import { Provider } from './Context';
import Inputs from './Inputs';
import Btn from './Button';
import useStyles from './styles';

const Form = () => {
    const classes = useStyles();
    return (
        <div className={classes.form}>
            <h6>This form is to Register a new User</h6>
            <Provider>
                <Inputs />
                <Btn />
            </Provider>
        </div>
    );
};

export default Form;
