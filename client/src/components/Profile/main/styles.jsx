import { makeStyles } from '@material-ui/core/styles';
import mem from '../Images/mem.jpeg';

const useStyles = makeStyles({
    memories: {
        backgroundImage: `url(${mem})`,
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
    },
    root: {
        maxWidth: 300,
        margin: '10px 1%',
    },
    media: {
        height: 140,
    },
    cards: {
        display: 'flex',
        marginLeft: '15%',
        marginRight: '15%',
    },
});

export default useStyles;
