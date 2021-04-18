import react, { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "react-bootstrap";
import logo from "../../images/logo.svg";

const Profile = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/profile")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  // console.log(data);

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
      <h1>This is the profile page</h1>
    </div>
  );
};

export default Profile;
