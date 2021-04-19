import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: "10px 1%",
  },
  media: {
    height: 140,
  },
  cards: {
    display: "flex",
    marginLeft: "15%",
    marginRight: "15%",
  },
  leftForm: {
    backgroundColor: "white",
    padding: "10%",
    borderRadius: "10px",
    width: "100%",
    fontSize: "95%",
  },
  control: {
    marginTop: "2px",
  },
});

export default useStyles;
