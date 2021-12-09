import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Header, StyledLink } from "./Components";
import Fade from "react-reveal/Fade";

const AboutContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  max-width: 900px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  max-width: 50%;

  @media screen and (max-width: 768px) {
    margin: 0 10px;
    max-width: max-content;
  }
`;

const StyledAboutText = styled.p`
  a {
    text-decoration: none;
  }
`;

const About: React.FC = () => {
  return (
    <>
      <Fade>
        <Header style={{ maxWidth: "900px", margin: "auto" }}>About Me</Header>
        <AboutContainer>
          <ImageContainer>
            <div style={{ width: "70%" }}>
              <StaticImage
                src="../images/profile-modified.png"
                alt={"Profile image"}
                quality={100}
              />
            </div>
          </ImageContainer>
          <TextContainer>
            <StyledAboutText>
              Hey! Welcome to my website. I am currently a third-year computer
              science major at
              <StyledLink
                href="https://www.northeastern.edu/"
                target="_blank"
                color="red"
                underLine
              >
                <strong id="northeastern"> Northeastern University</strong>
              </StyledLink>
              . I have strong interests in web development, software
              engineering, and data science.
            </StyledAboutText>
            <StyledAboutText>
              In July I started working at
              <StyledLink
                href="https://www.blueport.com/"
                target="_blank"
                color="skyblue"
                underLine
              >
                <strong id="blueport"> Blueport Commerce </strong>
              </StyledLink>
              as a front-end development co-op. At Blueport, I mainly utilize a
              tech stack of Angular and SCSS to implement mobile-first web
              components. This September I also started working with
              <StyledLink
                href="https://www.c4cneu.com/"
                target="_blank"
                color="purple"
                underLine
              >
                <strong id="c4c"> Code4Community</strong>
              </StyledLink>
              , an organization that aids non-profits in the Boston area.
            </StyledAboutText>
            <StyledAboutText>
              I have experience working with React, Angular, TypeScript,
              Node.js, and many other technologies. Currently learning Vert.x,
              PostgreSQL, and Redux!
            </StyledAboutText>
            <StyledAboutText>
              Outside of school I am an active runner and soccer player. My
              favorite sports teams are Arsenal and the New York Red Bulls.
            </StyledAboutText>
          </TextContainer>
        </AboutContainer>
      </Fade>
    </>
  );
};

export default About;
