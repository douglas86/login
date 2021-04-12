import Inputs from './Inputs';
import { Provider } from './Context';

const Form = () => {
    return (
        <div>
            <h2>Please, SignIn below:</h2>
            <Provider>
                <Inputs />
            </Provider>
        </div>
    );
};

export default Form;
