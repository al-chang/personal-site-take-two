import React from "react";
import styled from "styled-components";
import { ResumeLink } from "../util/Util";
import ExperienceBox from "./TimeLineBox";
import { experience } from "../util/Util";

// Credit to https://www.w3schools.com/howto/howto_css_timeline.asp for styling

const AboutTextContainer = styled.div`
  max-width: 400px;
  margin: auto;
  text-align: center;
  padding: 20px;
  border: 2px solid red;
`;

interface StyledExperienceBoxContainerProps {
  left: boolean;
}

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;

  /* The actualy timeline  */
  &:after {
    content: "";
    position: absolute;
    width: 6px;
    background-color: black;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }

  @media screen and (max-width: 600px) {
    &:after {
      left: 31px;
    }
  }
`;

const StyledExperienceBoxContainer = styled.div<StyledExperienceBoxContainerProps>`
  /* Container styling */
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  box-sizing: border-box;

  /* Circles */
  &:after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: white;
    border: 4px solid black;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  /* Container positioning */
  left: ${(props) => (props.left ? "0" : "50%")};

  /* Fix the position of the circle on right side */
  &:after {
    ${(props) => !props.left && "left: -16px"};
  }

  /* Arrow */
  &:before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    border: medium solid red;
    ${(props) =>
      props.left
        ? "right: 30px; border-width: 10px 0 10px 10px; border-color: transparent transparent transparent red;"
        : "left: 30px; border-width: 10px 10px 10px 0; border-color: transparent red transparent transparent;"}
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;

    &:after {
      left: 15px;
    }

    &:before {
      left: 60px;
      border: medium solid red;
      border-width: 10px 10px 10px 0;
      border-color: transparent red transparent transparent;
    }
  }
`;

const StyledExperienceBox = styled.div`
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
  box-sizing: border-box;
`;

const WorkExperience: React.FC = () => {
  return (
    <>
      <TimelineContainer>
        {experience.map(
          (experience, index) =>
            !experience.hide && (
              <StyledExperienceBoxContainer key={index} left={index % 2 === 0}>
                <StyledExperienceBox>
                  <ExperienceBox {...experience} />
                </StyledExperienceBox>
              </StyledExperienceBoxContainer>
            )
        )}
      </TimelineContainer>
      <AboutTextContainer>
        <a href={ResumeLink} target="_blank">
          View My Full Resume
        </a>
      </AboutTextContainer>
    </>
  );
};

export default WorkExperience;
