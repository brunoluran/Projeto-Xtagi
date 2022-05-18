import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoXtagi from "./assets/Images/logo-Xtagi.png";

const HeaderContainer = styled.div`
  width: 100%;
  height: 10vh;
  background: linear-gradient(120deg, #222, #666);
  //background-color: transparent;
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

  .signInBtn,
  .signUpBtn {
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

const NavButton = styled.button`
  width: 120px;
  height: 30px;
  margin-left: 5px;
  background-color: transparent;
  border: none;
  color: #d4af37;
  font-size: 16px;
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
        <NavButton>Home</NavButton>
        <NavButton>Sobre</NavButton>
        <NavButton>Benefícios</NavButton>
        <NavButton>Aplicativo</NavButton>
        <NavButton className="signInBtn">Acesse</NavButton>
        <NavButton className="signUpBtn">Criar Conta</NavButton>
      </NavItems>
    </HeaderContainer>
  );
};
