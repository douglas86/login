import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';

const LeftSide = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        axios
            .get('http://localhost:5000/profile/memories')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    // data.map((k, i) => console.log(i));

    const products = ['orange', 'apple', 'watermelon'];

    const list = [];

    products.forEach((product) => {
        list.push(<li>{product}</li>);
    });

    // const Rendering = () => {
    //     for (const [key, values] of Object.entries(data)) {
    //         // console.log(`${key}: ${values.title}`);
    //         <p>{values.title}</p>;
    //     }
    // };

    console.log(data);

    return (
        <div>
            {data.length === 0 ? (
                <Spinner animation="border" variant="dark" />
            ) : (
                Object.entries(data).map(([key, values]) => (
                    <div key={key}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    image={values.img.data}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                    >
                                        {values.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        {values.message}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                ))
            )}
        </div>
    );
};

export default LeftSide;
