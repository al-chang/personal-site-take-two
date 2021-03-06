import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60vh;
  margin: auto;
  max-width: 900px;
  margin-top: 20vh;

  @media screen and (max-width: 450px) {
    margin: 15vh 10px;
    width: auto;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const NameContainer = styled.h1`
  font-size: 6em;
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
    max-width: 60%;
  }
`;

const StyledSubHeader = styled.h3`
  font-weight: 700;
  font-size: 4em;
  margin: 5px 0;

  color: #8d3fd0;
`;

const Hero: React.FC = () => {
  return (
    <>
      <HeroContainer className="hero-container">
        <HeroContent>
          <Fade top cascade>
            <p style={{ margin: 0 }}>Hi, my name is</p>
            <NameContainer>Alexander Chang.</NameContainer>
            <StyledSubHeader>I like to build websites.</StyledSubHeader>
            <AboutContainer>
              I'm a software developer based in Boston, MA. My interests
              primarily are in front-end and full stack development, although I
              am always open to learning new things!
            </AboutContainer>
          </Fade>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;
