import React from "react";
import styled from "styled-components";

export interface ProjectProps {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
}

const ProjectContainer = styled.div`
  background-color: #6a6d88;
  padding: 5%;
  border-radius: 25px;

  &:hover {
    i {
      color: #f72585;
      transition: transform 0.5s, color 0.5s;
      transform: translateY(-3px);
    }
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;

  h3 {
    margin: 0;
    color: rgb(173, 89, 247);
  }

  i {
    font-size: 25px;
    color: #888cb0;
    transition: transform 0.5s, color 0.5s;
  }
`;

const Project: React.FC<ProjectProps> = (props) => {
  return (
    <>
      <ProjectContainer>
        <ProjectHeader>
          <h3>{props.title}</h3>
          <i className="fas fa-folder"></i>
        </ProjectHeader>
        <h4>
          {props.startDate} - {props.endDate}
        </h4>
        <p>{props.description}</p>
      </ProjectContainer>
    </>
  );
};

export default Project;
