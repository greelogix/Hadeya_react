import Login from "../../../views/register/login/login";
import Landing from "../../../views/landing/landing";
import Signup from "../../../views/register/signup/signup";
import Forgot from "../../../views/register/forgot/forgot";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: <Landing />,
    protected: true,
    hasNavBar: true,
  },

  {
    path: "/login",
    name: "Login",
    component: <Login />,
    protected: false,
    hasNavBar: false,
  },
  {
    path: "/signup",
    name: "Signup",
    component: <Signup />,
    protected: false,
    hasNavBar: false,
  },
  {
    path: "/forgot-password",
    name: "FrogotPassword",
    component: <Forgot />,
    protected: false,
    hasNavBar: false,
  },
];

export default routes;
