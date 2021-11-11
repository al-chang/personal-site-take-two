import React, { useState } from "react";
import styled from "styled-components";
import { ResumeLink } from "../util/Util";

const FooterContainer = styled.div`
  padding: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  color: #888cb0;

  a {
    font-size: 1.5em;
    display: inline-block;
    padding: 10px;
    color: #888cb0;
    transition: transform 0.5s, color 0.5s;

    &:hover {
      color: #f72585;
      transform: translateY(-3px);
      transition: transform 0.5s, color 0.5s;
    }

    @media screen and (min-width: 900px) {
      display: none;
    }
  }
`;

const StyledSpan = styled.span`
  background: linear-gradient(
    90deg,
    #d25359,
    #d0922b 20.31%,
    #f9d651 39.06%,
    #6bdc85 57.81%,
    #498ff7 78.65%,
    #716fd5
  );
  background-clip: text;
  -webkit-background-clip: text;

  &:hover {
    color: transparent;
    transition: color 0.5s;
  }
`;

const Footer: React.FC = () => {
  const [name, updateName] = useState(false);

  return (
    <>
      <FooterContainer>
        <p>
          Designed and developed by{" "}
          <StyledSpan
            onClick={() => updateName(!name)}
            style={{ cursor: "pointer" }}
          >
            {name ? "Al Chang" : "me"}
          </StyledSpan>
          ! Built using Gatsby.
        </p>
        <div>
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
        </div>
      </FooterContainer>
    </>
  );
};

export default Footer;
