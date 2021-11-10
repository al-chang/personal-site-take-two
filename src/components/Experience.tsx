import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { ResumeLink } from "../util/Util";
import { StyledLink } from "./Components";
import ExperienceBox from "./ExperienceBox";

const ExperienceContainer = styled.div`
  margin: auto;
  max-width: 800px;
  position: relative;
  flex-direction: column;
  display: flex;

  @media screen and (max-width: 800px) {
    margin: 0 10px;
  }
`;

const LinkContainer = styled.div`
  padding: 4%;
  border: 2px solid #f72585;
  border-radius: 20px;
  display: inline-block;
  margin: auto;
  align-self: center;
  justify-self: center;
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
        <LinkContainer>
          <StyledLink color="red" underLine target="_blank" href={ResumeLink}>
            View My Full Resume
          </StyledLink>
        </LinkContainer>
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
