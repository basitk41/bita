import { FC, Fragment } from "react";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <Fragment>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </Fragment>
  );
};

export default Layout;
