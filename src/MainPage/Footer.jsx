import styled from "styled-components";
import { FaFacebookF } from "react-icons/fa";

const Section = styled.div`
  height: 150px;
  background: linear-gradient(120deg, #333, #666);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Footer1 = styled.div`
  background-color: red;
  width: 150px;
  height: 150px;
`;
const Footer2 = styled.div`
  background-color: red;
  width: 150px;
  height: 150px;
`;
const Footer3 = styled.div`
  background-color: red;
  width: 150px;
  height: 150px;
`;

export const Footer = () => {
  return (
    <Section>
      <Footer1>
        <div>
          <FaFacebookF style={{ color: "#fff" }} />
        </div>
      </Footer1>
      <Footer2></Footer2>
      <Footer3></Footer3>
    </Section>
  );
};
