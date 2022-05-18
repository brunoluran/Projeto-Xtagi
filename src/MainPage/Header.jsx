import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoXtagi from "./assets/Images/logoWeb.png";

const HeaderContainer = styled.div`
  width: 100%;
  height: 10vh;
  background: linear-gradient(120deg, #222, #666);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 9;
`;
const HeaderLogoImg = styled.img`
  padding: 5px 10px;
  width: 100px;
  height: 100px;
`;

const NavItems = styled.nav`
  padding: 5px 10px;

  .signIn,
  .signUp {
    background-color: #d4af37;
    color: #000;
    border-radius: 5px;

    &:hover {
      background-color: transparent;
      color: #d4af37;
      border-top: 2px solid #d4af37;
      border-bottom: 2px solid #d4af37;
      transition: all ease 0.4s;
    }
  }
`;

const NavAncora = styled.a`
  padding: 5px 10px;
  margin: 0 5px;
  background-color: transparent;
  text-decoration: none;
  color: #d4af37;
  border-radius: 5px;

  &:hover {
    border-bottom: 1px solid #d4af37;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogoImg src={LogoXtagi} alt="Logo da Xtagi Bank" />
      <NavItems>
        <NavAncora href="#MainSection">Home</NavAncora>
        <NavAncora href="#AboutSection">Sobre</NavAncora>
        <NavAncora href="#BeneSection">Benefícios</NavAncora>
        <NavAncora href="#AppSection">Aplicativo</NavAncora>
        <NavAncora className="signIn">Acesse</NavAncora>
        <NavAncora className="signUp">Criar conta</NavAncora>
      </NavItems>
    </HeaderContainer>
  );
};
