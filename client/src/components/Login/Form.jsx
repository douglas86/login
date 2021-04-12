import { Provider } from './Context';
import Inputs from './Inputs';
import Btn from './Button';

const Form = () => {
    return (
        <div>
            <h2>Please, SignIn below:</h2>
            <Provider>
                <Inputs />
                <Btn />
            </Provider>
        </div>
    );
};

export default Form;
