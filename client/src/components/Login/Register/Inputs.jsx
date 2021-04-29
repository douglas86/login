import Submit from "./Submit";
import useStyles from "./styles";

const Inputs = () => {
  const { handleInputChange } = Submit();
  const classes = useStyles();

  return (
    <div>
      <input
        className={classes.inputs}
        type="text"
        placeholder="First Name"
        onChange={handleInputChange}
        name="fName"
        required
      />
      <br />
      <input
        className={classes.inputs}
        type="text"
        placeholder="Second Name"
        onChange={handleInputChange}
        name="lName"
        required
      />
      <br />
      <input
        className={classes.inputs}
        type="text"
        placeholder="Username"
        onChange={handleInputChange}
        name="uName"
        required
      />
      <br />
      <input
        className={classes.inputs}
        type="email"
        placeholder="email address"
        onChange={handleInputChange}
        name="email"
        required
      />
      <br />
      <input
        className={classes.inputs}
        type="password"
        placeholder="Password"
        onChange={handleInputChange}
        name="pName"
        required
      />
      <br />
      <input
        className={classes.inputs}
        type="password"
        placeholder="Re enter Password"
        onChange={handleInputChange}
        name="p2Name"
        required
      />
    </div>
  );
};

export default Inputs;
