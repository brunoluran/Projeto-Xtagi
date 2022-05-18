import styled from "styled-components";
import CardImg from "./assets/Images/CardImg.png";

const Section = styled.div`
  height: 550px;
  background: linear-gradient(120deg, #222, #666);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TextSection = styled.p`
  max-width: 500px;
  font-size: 32px;
  background-image: linear-gradient(120deg, #cbaa00, #d4af37, #cdb53b);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TextLink = styled.a`
  margin-top: 10px;
  display: block;
  font-size: 16px;
  &:hover {
    border-bottom: 1px solid #d4af37;
    width: 80px;
  }
`;

const ImgSection = styled.img`
  transform: rotate(-60deg);
  margin-right: 30px;
`;

export const AboutSection = () => {
  return (
    <Section id="AboutSection">
      <TextSection>
        Somos a maior instituição financeira da América exclusiva para estagiários.
        <ol style={{ listStyleType: "circle", color: "#d4af37" }}>
          <li style={{ fontSize: "20px" }}>Zero anuidade.</li>
          <li style={{ fontSize: "20px" }}>Milhares de benefícios.</li>
          <li style={{ fontSize: "20px" }}>Conta digital.</li>
          <li style={{ fontSize: "20px" }}>Cartão de Crédito.</li>
        </ol>
        <TextLink href="https://www.google.com.br" target="_blank">
          Saiba mais
        </TextLink>
      </TextSection>
      <ImgSection src={CardImg} alt="" />
    </Section>
  );
};
