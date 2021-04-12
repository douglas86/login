import { Provider } from './Context';
import Inputs from './Inputs';
import Btn from './Button';

const Form = () => {
    return (
        <div>
            <h6>This form is to Register a new User</h6>
            <Provider>
                <Inputs />
                <Btn />
            </Provider>
        </div>
    );
};

export default Form;
