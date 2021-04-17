import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile"

const router = {
  "/": () => <Home />,
  "/register": () => <Register />,
  "/profile": () => <Profile />,
};

export default router;
