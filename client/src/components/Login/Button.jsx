import Submit from './Submit';
import { Button } from 'react-bootstrap';

const Btn = () => {
    const { handleSubmit } = Submit();

    return (
        <div>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
            <Button variant="primary" style={{ marginLeft: '10px' }} type="">
                <a href="/register" style={{ color: 'white' }}>
                    Register
                </a>
            </Button>
        </div>
    );
};

export default Btn;
