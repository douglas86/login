import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: "1%",
    textAlign: "center",
  },
  inputs: {
    marginTop: "3px",
    marginBottom: "3px",
    width: "20%",
  },
  button: {
    width: "20%",
    marginBottom: "2px",
  },
  heading: {
    ...theme.typography.button,
    fontFamily: "Orelega One cursive",
    fontSize: "30px",
  },
}));

export default useStyles;
