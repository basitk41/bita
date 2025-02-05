import React from "react";
import { HeaderContainer, LogoAndLinks, NavLinks } from "./index.styles";
import Link from "@/components/design-components/link";
import Logo from "@/components/design-components/logo";
import Button from "@/components/design-components/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { token } from "@/utils";

const Header: React.FC = () => {
  const [isAuth, setAuth] = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    token.remove();
    setAuth(false);
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <LogoAndLinks>
        <Logo />
        {isAuth && (
          <NavLinks>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </NavLinks>
        )}
      </LogoAndLinks>
      {isAuth && (
        <Button variat="danger" onClick={handleLogout}>
          Logout
        </Button>
      )}
    </HeaderContainer>
  );
};

export default Header;
