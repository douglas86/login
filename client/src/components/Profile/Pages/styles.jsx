import { makeStyles } from "@material-ui/core/styles";
import mem from "./Images/mem.jpeg";

const useStyles = makeStyles({
  memories: {
    backgroundImage: `url(${mem})`,
    backgroundSize: "cover",
    width: "100vw",
    height: "100vh",
  },
});

export default useStyles;
