import { FC, Fragment, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useAuth } from "@/hooks/useAuth";

const Layout: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuth] = useAuth();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    } else if (isAuth && location.pathname === "/login") {
      navigate("/");
    }
  }, [isAuth, navigate, location]);

  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Layout;
