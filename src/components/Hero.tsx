import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 90vh;
  margin: auto;
  max-width: 900px;
`;

const HeroContent = styled.div`
  /* position: relative;
  top: 20%; */
  padding-top: 20%;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const NameContainer = styled.h1`
  font-size: 5em;
  margin: 20px 0;
  font-weight: 700;
  line-height: 90%;

  @media screen and (max-width: 600px) {
    font-size: 4em;
  }
`;

const AboutContainer = styled.p`
  max-width: 100%;
  margin: 20px 0;
  @media (min-width: 768px) {
    max-width: 60%;
  }
`;

const StyledSubHeader = styled.h3`
  font-weight: 500;
  font-size: 3em;
  margin: 20px 0;
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
