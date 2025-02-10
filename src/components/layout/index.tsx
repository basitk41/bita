import { FC, Fragment, lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "../design-components/spinner";

const Header = lazy(() => import("@/components/header"));
const Footer = lazy(() => import("@/components/footer"));

const Layout: FC = () => {
  return (
    <Fragment>
      <Suspense fallback={<Spinner align="center" />}>
        <Header />
      </Suspense>
      <Outlet />
      <Suspense fallback={<Spinner align="center" />}>
        <Footer />
      </Suspense>
    </Fragment>
  );
};

export default Layout;
