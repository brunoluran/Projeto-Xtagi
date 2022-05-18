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

export const MainSection = () => {
  return (
    <AreaMainSection>
      <TextMainSection>
        Torne-se Xtagier e faça parte da maior rede de estagíários do Brasil.
        <TextLink href="https://www.google.com.br" target="_blank">
          Saiba mais
        </TextLink>
      </TextMainSection>
    </AreaMainSection>
  );
};
