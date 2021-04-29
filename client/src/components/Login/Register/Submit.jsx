import { useContext } from 'react';
import { Context } from './Context';
import axios from 'axios';

const localhost = process.env.REACT_APP_LOCALHOST;

const Submit = () => {
    const User = useContext(Context);

    const handleSubmit = () => {
        if (User.data.pName !== User.data.p2Name) {
            alert('Passwords do not match');
        } else {
            alert('Passwords match');
            axios
                .post(`${localhost}/user/regular`, { user: User.data })
                .then((res) => console.log(res.data))
                // once post to db redirect to home page
                .then((window.location = '/'))
                .catch((err) => console.log(err));
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
