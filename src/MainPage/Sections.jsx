import styled from "styled-components";
import CardImg from "./assets/CardImg.png";

const SectionA = styled.div`
  height: 550px;
  background: linear-gradient(120deg, #222, #777);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`;

const SectionB = styled.div`
  height: 550px;
  background: linear-gradient(120deg, #777, #222);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
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

const GridArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const GridElement = styled.div`
  background-color: red;
  padding: 20px;
  color: #fff;
  font-size: 20px;
  border-radius: 10px;
`;

export const Sections = ({ text, img }) => {
  return (
    <>
      <SectionA>
        <TextSection>
          <p>Torne-se Xtagier e faça parte da maior rede de estagíários do Brasil.</p>
        </TextSection>
        <ImgSection src={CardImg} alt="" />
      </SectionA>
      <SectionB>
        <GridArea>
          <GridElement>
            <img
              src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/dibk1ba07iflqhldupuz"
              width="100px"
            />
          </GridElement>
          <GridElement>
            <img
              src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/dibk1ba07iflqhldupuz"
              width="100px"
            />
          </GridElement>
          <GridElement>
            <img
              src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/dibk1ba07iflqhldupuz"
              width="100px"
            />
          </GridElement>
          <GridElement>
            <img
              src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/dibk1ba07iflqhldupuz"
              width="100px"
            />
          </GridElement>
          <GridElement>
            <img
              src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/dibk1ba07iflqhldupuz"
              width="100px"
            />
          </GridElement>
          <GridElement>
            <img
              src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/dibk1ba07iflqhldupuz"
              width="100px"
            />
          </GridElement>
          <GridElement>
            <img
              src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/dibk1ba07iflqhldupuz"
              width="100px"
            />
          </GridElement>
          <GridElement>
            <img
              src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/dibk1ba07iflqhldupuz"
              width="100px"
            />
          </GridElement>
          <GridElement>
            <img
              src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/dibk1ba07iflqhldupuz"
              width="100px"
            />
          </GridElement>
        </GridArea>
        <TextSection>
          <p>Tenha acesso ao BeneXtagi, um programa repleto de benefícios para você estagiário.</p>
        </TextSection>
      </SectionB>
      <SectionA>
        <TextSection>
          <p>Torne-se Xtagier e faça parte da maior rede de estagíários do Brasil.</p>
        </TextSection>
        <ImgSection src={CardImg} alt="" />
      </SectionA>
    </>
  );
};
