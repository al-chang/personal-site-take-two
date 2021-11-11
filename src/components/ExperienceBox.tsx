import { graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import styled from "styled-components";
import { calculateTimeDifference, ExperinceBoxProps } from "../util/Util";
import { StyledLink } from "./Components";

const ExperienceBoxContainer = styled.div`
  display: grid;
  margin: 20px 0;
  border: 2px solid #f72585;
  border-radius: 20px;
  padding: 2%;
  position: relative;
  grid-template-columns: 20% 80%;

  .gatsby-image {
    object-fit: cover;
    @media screen and (min-width: 900px) {
      transition: width 0.5s, filter 0.5s;
      width: 90%;
      filter: grayscale(100%);
    }
  }

  &:not(:first-child) {
    &:before {
      content: "";
      background-color: #f72585;
      position: absolute;
      width: 5px;
      height: 25px;
      top: -25px;
      left: 50%;
      display: block;
    }
  }

  &:after {
    content: "";
    background-color: #f72585;
    position: absolute;
    width: 5px;
    height: 22px;
    bottom: -22px;
    left: 50%;
    display: block;
  }

  &:hover {
    .gatsby-image {
      filter: none;
      width: 100%;
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2%;
  /* background-color: white; */
  border-radius: 20px 0 0 20px;
  /* border: 2px solid white; */

  @media screen and (max-width: 450px) {
    flex-basis: 50%;
  }
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2%;
  justify-content: space-around;
`;

const ExperienceBox: React.FC<ExperinceBoxProps> = (props) => {
  const monthsWorked = calculateTimeDifference(props.startDate, props.endDate);

  const months = monthsWorked % 12;
  const year = (monthsWorked - months) / 12;
  const days = (monthsWorked * 30.4167).toFixed(0) + " days";
  const minutes = monthsWorked * 43800 + " minutes";

  const timeFrameString = () => {
    let timeFrame = "";
    if (year > 0) {
      if (year > 1) {
        timeFrame += year + " years ";
      } else {
        timeFrame += year + " year ";
      }
    }
    if (months > 0) {
      if (months > 1) {
        timeFrame += months + " months";
      } else {
        timeFrame += months + " month";
      }
    }

    return timeFrame;
  };

  const timeFrame = timeFrameString();

  const timeArray = [timeFrame, days, minutes];
  const [timeIndex, updateTimeIndex] = useState(0);

  return (
    <>
      <ExperienceBoxContainer>
        <ImageContainer>
          <GatsbyImage
            image={props.imageData?.node?.gatsbyImageData}
            alt="company logo"
            className="gatsby-image"
          />
        </ImageContainer>
        <InformationContainer>
          <h3
            style={{
              fontWeight: "500",
              margin: "0",
              color: "#ad59f7",
            }}
          >
            {props.title}{" "}
            <StyledLink
              target="_blank"
              href={props.companyLink}
              style={{
                textDecoration: "none",
                display: "inline-block",
                fontWeight: "normal",
              }}
              underLine
              underLineColor="#f72585"
              color="#f72585"
            >
              @ {props.company}
            </StyledLink>
          </h3>

          {props.notStarted ? (
            <p
              style={{ margin: "0" }}
            >{`Expected Start: ${props.startDate}`}</p>
          ) : (
            <p style={{ margin: "0" }}>
              {`${props.startDate} - ${props.endDate || "Present"} • `}
              <span
                onClick={() =>
                  updateTimeIndex((timeIndex + 1) % timeArray.length)
                }
                style={{ cursor: "pointer" }}
              >
                {timeArray[timeIndex]}
              </span>
            </p>
          )}
          <p style={{ margin: "0" }}>{props.description}</p>
        </InformationContainer>
      </ExperienceBoxContainer>
    </>
  );
};

export default ExperienceBox;
