import Navbar from "../Navbar.jsx";
import useStyles from "./styles.jsx";
import Display from "./Memories/Display.jsx";

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
