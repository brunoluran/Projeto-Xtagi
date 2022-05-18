import styled from "styled-components";
import AppStore from "./assets/Images/AppStore.png";
import GoogleStore from "./assets/Images/GoogleStore.png";
import CardImg from "./assets/Images/CardImg.png";

const Section = styled.div`
  height: 550px;
  background: linear-gradient(120deg, #222, #666);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TextSection = styled.p`
  display: flex;
  max-width: 500px;
  font-size: 35px;
  background-image: linear-gradient(120deg, #cbaa00, #d4af37, #cdb53b);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ImgSection = styled.img`
  transform: rotate(-60deg);
  margin-right: 30px;
`;

export const AppSection = () => {
  return (
    <>
      <Section>
        <TextSection>Baixe o App</TextSection>
        <ImgSection src={CardImg} alt="" />
      </Section>
    </>
  );
};
