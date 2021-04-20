import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    display: {
        margin: '10px 25%',
        background: 'white',
        borderRadius: '5px',
        width: '40%',
        padding: '0.5%',
        textAlign: 'center',
        color: '#5caba3',
        fontWeight: 'bold',
        fontSize: '25px',
    },
    image: {
        width: '10%',
        height: 'auto',
        marginLeft: '20px',
    },
    rightForm: {
        backgroundColor: 'white',
        padding: '10%',
        borderRadius: '10px',
        width: '100%',
        fontSize: '95%',
        marginTop: '20%',
    },
    // styling for the form tags on the lefthand side
    control: {
        marginTop: '2px',
    },
});

export default useStyles;
