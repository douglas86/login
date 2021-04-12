import Submit from './Submit';
import { Button } from 'react-bootstrap';

const Btn = () => {
    const { handleSubmit } = Submit();

    return (
        <div>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </div>
    );
};

export default Btn;
