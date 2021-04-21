import { useContext, useState, useEffect } from 'react';
import { Context } from './Context';
import axios from 'axios';

const Submit = () => {
    const User = useContext(Context);
    const [data, setData] = useState({});

    // grabs the username from json file in express
    useEffect(() => {
        axios
            .get('http://localhost:5000/profile')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    // Handle submit once button is clicked for creating new memeories
    const handleSubmit = () => {
        axios
            .post('http://localhost:5000/profile/memories', {
                username: data.username,
                User: User.data,
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));

        window.location = '/memories';
    };

    // Handles input tags of new memories
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
