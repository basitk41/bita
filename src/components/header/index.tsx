import React from "react";
import { HeaderContainer, LogoAndLinks, NavLinks } from "./index.styles";
import Link from "@/components/design-components/link";
import Logo from "@/components/design-components/logo";
import Button from "@/components/design-components/button";

const Header: React.FC = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <HeaderContainer>
      <LogoAndLinks>
        <Logo />
        <NavLinks>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </NavLinks>
      </LogoAndLinks>
      <Button variat="danger" onClick={handleLogout}>
        Logout
      </Button>
    </HeaderContainer>
  );
};

export default Header;
