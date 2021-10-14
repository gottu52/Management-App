import { Config } from "../pages/Config";
import { Home } from "../pages/Home";
import { Users } from "../pages/Users";
import { Page404 } from "../pages/Page404";

export const HomeRoute = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/users",
    exact: false,
    children: <Users />
  },
  {
    path: "/config",
    exact: false,
    children: <Config />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];
