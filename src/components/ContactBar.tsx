import React from "react";
import styled from "styled-components";
import { ResumeLink } from "../util/Util";

const ContactBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  a {
    color: black;
    transition: transform 0.5s, color 0.5s;

    &:hover {
      color: red;
      transform: translateY(-3px);
      transition: transform 0.5s, color 0.5s;
    }
  }

  i {
    padding: 10px 0;
    font-size: 1.5em;
  }

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: black;
  }
`;

const ContactBar: React.FC<{ className: string }> = ({ className }) => {
  return (
    <>
      <ContactBarContainer className={className}>
        <a href={ResumeLink} target="_blank">
          <i className="fas fa-user"></i>
        </a>
        <a href="mailto:chang.alex@northeastern.edu">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/al-chang-" target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.github.com/al-chang" target="_blank">
          <i className="fab fa-github"></i>
        </a>
      </ContactBarContainer>
    </>
  );
};

export default ContactBar;
