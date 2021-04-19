import { Navbar, Nav } from "react-bootstrap";
import logo from "../../images/logo.svg";

const Navs = () => {
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
        <Nav.Link href="/profile">Cards Dashboard</Nav.Link>
      </Navbar>
    </div>
  );
};

export default Navs;
