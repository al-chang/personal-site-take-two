import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

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

const StyledAboutText = styled.p`
  a {
    text-decoration: none;
  }
`;

const About: React.FC = () => {
  return (
    <>
      <AboutContainer>
        <ImageContainer>
          <div style={{ width: "70%" }}>
            <StaticImage
              src="../images/profile-modified.png"
              alt={"Profile image"}
            />
          </div>
        </ImageContainer>
        <div style={{ maxWidth: "50%" }}>
          <StyledAboutText>
            Hey! Welcome to my website. I am currently a third-year computer
            science major at
            <a href="https://www.northeastern.edu/" target="_blank">
              <strong id="northeastern"> Northeastern University</strong>
            </a>
            . I have strong interests in web development, software engineering,
            and data science.
          </StyledAboutText>
          <StyledAboutText>
            In July I started working at
            <a href="https://www.blueport.com/" target="_blank">
              <strong id="blueport"> Blueport Commerce </strong>
            </a>
            as a front-end development co-op. At Blueport, I mainly utilize a
            tech stack of Angular and SCSS to implement mobile-first web
            components. This September I also started working with
            <a href="https://www.c4cneu.com/" target="_blank">
              <strong id="c4c"> Code4Community</strong>
            </a>
            , an organization that aids non-profits in the Boston area.
          </StyledAboutText>
          <StyledAboutText>
            I have experience working with React, Angular, TypeScript, Node.js,
            and many other technologies. Currently learning Vert.x, PostgreSQL,
            and Redux!
          </StyledAboutText>
          <StyledAboutText>
            Outside of school I am an active runner and soccer player. My
            favorite sports teams are Arsenal and the New York Red Bulls.
          </StyledAboutText>
        </div>
      </AboutContainer>
    </>
  );
};

export default About;
