import styled from 'styled-components';
import Rocketseat from './assets/GridPhotos/Rocketseat.jpg';
import BaltaIo from './assets/GridPhotos/Balta.png';
import Alura from './assets/GridPhotos/Alura.png';
import Udemy from './assets/GridPhotos/Udemy.png';

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

const GridArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 180px);
  gap: 10px;
`;

const GridElement = styled.div`
  background: linear-gradient(to top, #444, #888);
  padding: 20px;
  font-size: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridImg = styled.img`
  width: 100px;
  margin-top: 0;
`;

const Btn = styled.div`
  display: block;
  width: 100px;
  margin-left: 230px;
  margin-top: 40px;
  border: 0;
  background-color: #d4af37;
  color: #000;
  border-radius: 10px;
  padding: 2px;
`;

export const BenefitsSection = () => {
  return (
    <Section>
      <GridArea>
        <GridElement>
          <GridImg src={Rocketseat} />
        </GridElement>
        <GridElement>
          <GridImg src={BaltaIo} />
        </GridElement>
        <GridElement>
          <GridImg src={Alura} />
        </GridElement>
        <GridElement>
          <GridImg src={Udemy} />
        </GridElement>
        <GridElement>
          <GridImg src={Rocketseat} />
        </GridElement>
        <GridElement>
          <GridImg src={BaltaIo} />
        </GridElement>
        <GridElement>
          <GridImg src={Alura} />
        </GridElement>
        <GridElement>
          <GridImg src={Udemy} />
        </GridElement>
        <GridElement>
          <GridImg src={Rocketseat} />
        </GridElement>
      </GridArea>
      <TextSection>
        Tenha acesso ao BeneXtagi, um programa repleto de benefícios para você estagiário.
        <a href='' style={{ fontSize: '16px', display: 'block' }}>
          Saiba mais
        </a>
      </TextSection>
    </Section>
  );
};
