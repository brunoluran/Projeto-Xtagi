import styled from "styled-components";
import MainPhoto from "./assets/MainPhoto.png";

const AreaMainSection = styled.div`
  width: 100%;
  height: 800px;
  background-image: url(${MainPhoto});
  background-size: cover;
`;

const TextMainSection = styled.p`
  font-size: 30px;
`;

export const MainSection = () => {
  return <AreaMainSection></AreaMainSection>;
};
