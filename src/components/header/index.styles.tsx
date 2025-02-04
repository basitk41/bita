import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: linear-gradient(
    90deg,
    rgb(110, 94, 254) 0%,
    rgba(73, 63, 252, 1) 100%
  );
  color: #ffffff;

  @media (max-width: 600px) {
    padding: 1rem 1rem;
  }

  @media (max-width: 330px) {
    display: inline-table;
    width: 100%;
  }
`;

export const LogoAndLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 600px) {
    gap: 2.5rem;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 1rem;
`;
