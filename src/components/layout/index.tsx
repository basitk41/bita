import { FC, Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/header";

const Layout: FC = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </Fragment>
  );
};

export default Layout;
