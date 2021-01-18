import Index7 from "./pages/Index7/Index7";

//Auth Pages
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import PasswordForget from "./pages/Auth/PasswordForget";

const routes = [
  { path: "/password-forget", component: PasswordForget },
  { path: "/login", component: Login },
  { path: "/sign-up", component: Signup },
  { path: "/", component: Index7 },
];

export default routes;
