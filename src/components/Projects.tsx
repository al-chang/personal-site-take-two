import React from "react";
import styled from "styled-components";
import Project from "./Project";

const project = {
  title: "Example Project",
  startDate: "December 2021",
  endDate: "January 2022",
  description: "A project that I worked on",
};

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 900px;
  margin: auto;
  gap: 5%;
`;

const Projects: React.FC = () => {
  return (
    <>
      <ProjectsContainer>
        <Project {...project} />
        <Project {...project} />
        <Project {...project} />
        <Project {...project} />
        <Project {...project} />
        <Project {...project} />
      </ProjectsContainer>
    </>
  );
};

export default Projects;
