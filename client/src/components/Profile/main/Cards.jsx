import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles.jsx';

// Images
import Memory from '../Images/memories.jpg';
import iStore from '../Images/iStore-01.jpg';
import dash from '../Images/student_dash.jpg';

// Pages to be imported
// import Memories from './Memories.jsx';
// import IStore from './Istore.jsx';
// import StudentDashboard from './StudentDashboard.jsx';

const Cards = () => {
    const classes = useStyles();
    let images = [Memory, iStore, dash];
    let titles = ['Memories', 'IStore', 'Student dashboard'];
    let texts = [
        'This is a safe place where you create new memories or ponder over the old ones.',
        'This is a section to the itunes store, click here to search',
        'This is the section on the Student Dashboard',
    ];
    let button = [
        'Add a new Memory',
        'Search the itunes store',
        'Have a look at student dashboard',
    ];
    let ahref = ['memories', 'istore', 'student'];
    return (
        <div className={classes.cards}>
            {titles.map((k, i) => (
                <Card key={k} className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={images[i]}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                {titles[i]}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                {texts[i]}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            <a href={ahref[i]}>{button[i]}</a>
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
};

export default Cards;
