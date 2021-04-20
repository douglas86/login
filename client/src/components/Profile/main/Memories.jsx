import Navbar from './Navbar';
import useStyles from './styles.jsx';
import Display from '../Memories/main/Display.jsx';

const Memories = () => {
    const classes = useStyles();
    return (
        <div className={classes.memories}>
            <Navbar />
            <Display />
        </div>
    );
};

export default Memories;
