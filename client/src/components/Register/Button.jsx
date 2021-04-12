import { Button } from 'react-bootstrap';
import Submit from './Submit';

const Btn = () => {
    const { handleSubmit } = Submit();
    return (
        <div>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Register
            </Button>
        </div>
    );
};

export default Btn;
