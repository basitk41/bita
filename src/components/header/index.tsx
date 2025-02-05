import React from "react";
import { HeaderContainer, LogoAndLinks, NavLinks } from "./index.styles";
import Link from "@/components/design-components/link";
import Logo from "@/components/design-components/logo";
import { useAuth } from "@/hooks/useAuth";
import UserProfile from "@/components/user-profile";

const Header: React.FC = () => {
  const [isAuth, setAuth] = useAuth();

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
      {isAuth && <UserProfile setAuth={setAuth} isAuth={isAuth} />}
    </HeaderContainer>
  );
};

export default Header;
