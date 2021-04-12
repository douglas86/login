import Submit from './Submit';
import useStyles from './styles';

const Inputs = () => {
    const { handleInputSubmit } = Submit();
    const classes = useStyles();

    return (
        <div>
            <input
                className={classes.inputs}
                type="text"
                placeholder="First Name"
                onChange={handleInputSubmit}
                required
            />
            <br />
            <input
                className={classes.inputs}
                type="text"
                placeholder="Second Name"
                onChange={handleInputSubmit}
                required
            />
            <br />
            <input
                className={classes.inputs}
                type="text"
                placeholder="Username"
                onChange={handleInputSubmit}
                required
            />
            <br />
            <input
                className={classes.inputs}
                type="password"
                placeholder="Password"
                onChange={handleInputSubmit}
                required
            />
            <br />
            <input
                className={classes.inputs}
                type="password"
                placeholder="Re enter Password"
                onChange={handleInputSubmit}
                required
            />
        </div>
    );
};

export default Inputs;
