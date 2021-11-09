import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80vh;
  margin: auto;
  max-width: 850px;
  margin-top: 20vh;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameContainer = styled.h1`
  font-size: 5em;
  margin: 20px 0 5px;
  font-weight: 700;
  line-height: 90%;
  color: #f72585;

  @media screen and (max-width: 600px) {
    font-size: 4em;
  }
`;

const AboutContainer = styled.p`
  max-width: 100%;
  margin: 20px 0;
  @media (min-width: 768px) {
    max-width: 80%;
  }
`;

const StyledSubHeader = styled.h3`
  font-weight: 700;
  font-size: 3em;
  margin: 5px 0;

  color: #b5179e;
`;

const Hero: React.FC = () => {
  return (
    <>
      <HeroContainer>
        <HeroContent>
          <p style={{ margin: 0 }}>Hi, my name is</p>
          <NameContainer>Alexander Chang</NameContainer>
          <StyledSubHeader>I like to build websites.</StyledSubHeader>
          <AboutContainer>
            I'm a software developer based in Boston, MA. My interests primarly
            are in front-end and full stack development, although I am always
            open to learning new things!
          </AboutContainer>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;
