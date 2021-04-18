import { Navbar } from "react-bootstrap";
import logo from "../../images/logo.svg";

const Nav = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Sign Out
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Nav;
