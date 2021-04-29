import Submit from './Submit';
import useStyles from './styling';

const Inputs = () => {
    const { handleInputChange } = Submit();
    const classes = useStyles();
    return (
        <div>
            <input
                className={classes.inputs}
                type="text"
                placeholder="Username"
                onChange={handleInputChange}
                name="uName"
                required
            />
            <br />
            <input
                className={classes.inputs}
                type="password"
                placeholder="Password"
                onChange={handleInputChange}
                name="pName"
                required
            />
        </div>
    );
};

export default Inputs;
