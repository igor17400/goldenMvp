import LandingPage from "./pages/LandingPage/LandingPage";

//Auth Pages
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import PasswordForget from "./pages/Auth/PasswordForget";

const routes = [
  { path: "/password-forget", component: PasswordForget },
  { path: "/login", component: Login },
  { path: "/registrar", component: Signup },
  { path: "/", component: LandingPage },
];

export default routes;
