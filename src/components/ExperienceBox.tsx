import { graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { calculateTimeDifference, ExperinceBoxProps } from "../util/Util";
import { StyledLink } from "./Components";

const ExperienceBox: React.FC<ExperinceBoxProps> = (props) => {
  const monthsWorked = calculateTimeDifference(props.startDate, props.endDate);

  const months = monthsWorked % 12;
  const year = (monthsWorked - months) / 12;

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

  let timeFrame = timeFrameString();

  const ExperienceBoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    border: 2px solid #f72585;
    border-radius: 20px;
    padding: 2%;
    transition: background-color 0.5s;
  `;

  const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 20%;
    padding: 2%;
    /* background-color: white; */
    border-radius: 20px 0 0 20px;
    /* border: 2px solid white; */
  `;

  const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2%;
    justify-content: space-around;
  `;

  return (
    <>
      <ExperienceBoxContainer>
        <ImageContainer>
          <GatsbyImage
            image={props.imageData?.node?.gatsbyImageData}
            alt="company logo"
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
          <p style={{ margin: "0" }}>
            {props.notStarted
              ? `Expected Start: ${props.startDate}`
              : `${props.startDate} - ${
                  props.endDate || "Present"
                } • ${timeFrame}`}
          </p>
          <p style={{ margin: "0" }}>{props.description}</p>
        </InformationContainer>
      </ExperienceBoxContainer>
    </>
  );
};

export default ExperienceBox;
