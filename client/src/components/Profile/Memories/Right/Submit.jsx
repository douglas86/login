import { useContext, useState, useEffect } from 'react';
import { Context } from './Context';
import axios from 'axios';

const Submit = () => {
    const User = useContext(Context);
    const [data, setData] = useState({});

    useEffect(() => {
        axios
            .get('http://localhost:5000/profile')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    const handleSubmit = () => {
        axios
            .post('http://localhost:5000/profile/memories', {
                username: data.username,
                User: User.data,
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        console.log(data.username);
        // .then((res) => {
        //     console.log('Get requests: ', res);
        // })
        // .catch((err) => console.log(err));
        // axios
        //     .get('http://localhost:5000/profile')
        //     .then((res) => setData(res))
        //     .catch((err) => console.log(err));
        // axios
        //     .post('http://localhost:5000/profile/memories', { User: User.data })
        //     .then((res) => console.log(res))
        //     .catch((err) => console.log(err));
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
