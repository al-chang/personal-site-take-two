import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { ResumeLink } from "../util/Util";
// import { experience } from "../util/Util";
import ExperienceBox from "./ExperienceBox";

const ExperienceContainer = styled.div`
  margin: auto;
  max-width: 800px;
  position: relative;
`;

const Experience: React.FC = () => {
  const result = useStaticQuery(query);

  const experience = result?.site?.siteMetadata?.workExperience?.map(
    (experience) => {
      experience.imageData = result.allImageSharp?.edges?.find(
        (imageData) => imageData.node?.parent?.name === experience.imageURL
      );
      return experience;
    }
  );

  return (
    <>
      <ExperienceContainer>
        {experience
          .reverse()
          .map(
            (exp, index) => !exp.hide && <ExperienceBox key={index} {...exp} />
          )}
        <a target="_blank" href={ResumeLink}>
          View My Full Resume
        </a>
      </ExperienceContainer>
    </>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        workExperience {
          title
          company
          companyLink
          startDate
          endDate
          description
          hide
          imageURL
          notStarted
        }
      }
    }
    allImageSharp(filter: {}) {
      edges {
        node {
          id
          gatsbyImageData
          original {
            src
          }
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  }
`;

export default Experience;
