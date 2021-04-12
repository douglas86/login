import { useContext } from 'react';
import { Context } from './Context';

const Submit = () => {
    const User = useContext(Context);

    const handleSubmit = () => {
        console.log(User.data);
        if (User.data.pName !== User.data.p2Name) {
            alert('Passwords do not match');
        } else {
            alert('Passwords match');
        }
    };

    const handleInputChange = (e) => {
        e.persist();
        User.setData((i) => ({
            ...i,
            [e.target.name]: e.target.value,
        }));
    };

    return {
        handleSubmit,
        handleInputChange,
    };
};

export default Submit;
