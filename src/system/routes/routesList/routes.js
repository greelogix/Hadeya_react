import Login from "../../../views/register/login/login";
import Landing from "../../../views/landing/landing";
import WishListShare from "../../../views/wishListShare/wishListShare";
import MyWishList from "../../../views/myWishList/myWishList";

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
    path: "/wishListShare",
    name: "WishListShare",
    component: <WishListShare />,
    protected: true,
    hasNavBar: true,
  },
  {
    path: "/myWishList",
    name: "MyWishList",
    component: <MyWishList />,
    protected: true,
    hasNavBar: true,
  },
];

export default routes;
