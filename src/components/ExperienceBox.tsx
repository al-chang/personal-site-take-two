import { graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import { calculateTimeDifference, ExperinceBoxProps } from "../util/Util";

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

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", margin: "20px 0" }}>
        <div
          style={{
            flexBasis: "10%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <GatsbyImage
            image={props.imageData?.node?.gatsbyImageData}
            alt="company logo"
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", marginLeft: "5%" }}
        >
          <h3 style={{ fontWeight: "normal", margin: "0" }}>
            {props.title}{" "}
            <a
              target="_blank"
              href={props.companyLink}
              style={{ textDecoration: "none" }}
            >
              @ {props.company}
            </a>
          </h3>
          <p style={{ margin: "0" }}>
            {props.notStarted
              ? `Expected Start: ${props.startDate}`
              : `${props.startDate} - ${
                  props.endDate || "Present"
                } • ${timeFrame}`}
          </p>
          <p style={{ margin: "0" }}>{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default ExperienceBox;
