import Nav from "../Profile/Navbar.jsx";
import Cards from "../Profile/Cards.jsx";
import useStyles from "./styles.jsx";

const Profile = () => {
  const classes = useStyles();
  return (
    <div>
      <Nav />
      <h1 className={classes.profile}>
        Different Dashboards are displayed below:
      </h1>
      <Cards />
    </div>
  );
};

export default Profile;
