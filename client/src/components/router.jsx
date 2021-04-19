import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";

// importing files from Profile
import Memories from "./Profile/Pages/Memories.jsx";
import Istore from "./Profile/Pages/Istore.jsx";
import Student from "./Profile/Pages/StudentDashboard.jsx";

const router = {
  "/": () => <Home />,
  "/register": () => <Register />,
  "/profile": () => <Profile />,
  "/memories": () => <Memories />,
  "/istore": () => <Istore />,
  "/student": () => <Student />,
};

export default router;
