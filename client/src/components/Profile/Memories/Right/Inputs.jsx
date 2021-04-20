import Submit from './Submit';
import useStyles from './style';

const Inputs = () => {
    const { handleInputChange } = Submit();
    const classes = useStyles();

    return (
        <div>
            <input
                className={classes.inputs}
                type="text"
                placeholder="Title"
                onChange={handleInputChange}
                name="title"
                required
            />
            <input
                className={classes.inputs}
                type="text"
                placeholder="Messsage"
                onChange={handleInputChange}
                name="message"
                required
            />
            <input
                className={classes.inputs}
                type="text"
                placeholder="Tags"
                onChange={handleInputChange}
                name="tags"
                required
            />
            <input
                className={classes.inputs}
                type="file"
                placeholder="choose a file"
                onChange={handleInputChange}
                name="file"
                required
            />
        </div>
    );
};

export default Inputs;
