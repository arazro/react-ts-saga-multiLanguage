import Home from "../pages/home";
import Login from "../pages/auth/LoginView";
import DashboardLayout from "../pages/layout/DashboardLayout";
import MainLayout from "../pages/layout/MainLayout";
import NotFoundView from "../pages/404";
import { RouteComponentProps } from "react-router-dom";
import Users from "../pages/user/userListView"
import Account from "../pages/account"

export interface Iroutes {
  path: string
  header: boolean,
  footer: boolean,
  Component: any,
  exact: boolean,
  reverse: boolean,
  Layout: any,
  wrapperClassName: string,
  backButton?: any,
  title?:string,
  render?: ((props: RouteComponentProps<any>) => React.ReactNode),
  backLink?: string
}

const routes: Iroutes[] = [
 

 
  {
    path: "/login",
    header: false,
    footer: false,
    Component: Login,
    exact: false,
    reverse: true,
    Layout: MainLayout,
    wrapperClassName: "customContainer customBg"
  },

  {
    path: "/",
    header: true,
    footer: true,
    Component: Home,
    exact: true,
    reverse: false,
    Layout: DashboardLayout,
    wrapperClassName: "customContainer customBg"
  },
  {
    path: "/users",
    header: true,
    footer: true,
    Component: Users,
    exact: true,
    reverse: false,
    Layout: DashboardLayout,
    wrapperClassName: "customContainer customBg"
  },
  {
    path: "/account",
    header: true,
    footer: true,
    Component: Account,
    exact: true,
    reverse: false,
    Layout: DashboardLayout,
    wrapperClassName: "customContainer customBg"
  },
  {
    path: "*",
    header: true,
    footer: true,
    Component: NotFoundView,
    exact: false,
    reverse: false,
    Layout: MainLayout,
    wrapperClassName: "customContainer customBg",
    backButton: "/"
  }
];

export default routes


