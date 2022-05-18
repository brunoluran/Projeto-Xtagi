import styled from 'styled-components';
import CardImg from './assets/CardImg.png';

const Section = styled.div`
  height: 550px;
  background: linear-gradient(120deg, #222, #666);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TextSection = styled.p`
  max-width: 500px;
  font-size: 40px;
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
        <TextSection>
          Torne-se Xtagier e faça parte da maior rede de estagíários do Brasil.
          <a href='' style={{ fontSize: '16px', display: 'block' }}>
            Saiba mais
          </a>
        </TextSection>
        <ImgSection src={CardImg} alt='' />
      </Section>
    </>
  );
};
