import styled from "styled-components";
import MainPhoto from "./assets/Images/MainPhoto.png";

const AreaMainSection = styled.div`
  display: flex;
  height: 800px;
  background-image: url(${MainPhoto});
  background-size: cover;
`;

const TextMainSection = styled.p`
  margin-top: 18%;
  padding-left: 50px;
  max-width: 500px;
  font-size: 35px;
  background-image: linear-gradient(120deg, #000, #666, #d4af37);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TextLink = styled.a`
  margin-top: 5px;
  display: block;
  font-size: 16px;
  &:hover {
    border-bottom: 2px solid #d4af37;
    width: 80px;
  }
`;

const HelpButton = styled.a`
  position: fixed;
  width: 150px;
  height: 40px;
  bottom: 40px;
  right: 20px;
  background-color: #d4af37;
  color: #000;
  border-radius: 50px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
    width: 160px;
    transition: all 0.5s ease-in-out;
  }
`;

export const MainSection = () => {
  return (
    <AreaMainSection id="MainSection">
      <TextMainSection>
        Torne-se Xtagier e faça parte da maior rede de estagíários do Brasil.
        <TextLink href="https://www.google.com.br" target="_blank">
          Saiba mais
        </TextLink>
      </TextMainSection>
      <HelpButton href="https://google.com.br">Precisa de ajuda?</HelpButton>
    </AreaMainSection>
  );
};
