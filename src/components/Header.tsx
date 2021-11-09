import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 9vh;
  align-items: center;
  margin: 1vh 10px;

  @media (min-width: 768px) {
    margin: 1vh 20px;
  }
`;

const LinksContainer = styled.ul`
  display: none;
  @media (min-width: 768px) {
    display: block;
    list-style-type: none;
    margin: 0;
  }
`;

const LinkContainer = styled.li`
  display: inline;
  padding: 0 10px;

  a {
    text-decoration: none;
  }
`;

const Header: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <span>Alexander Chang</span>

        {/* Links for desktop and tablet  */}
        <LinksContainer>
          <LinkContainer>
            <a href="place">Link 1</a>
          </LinkContainer>
          <LinkContainer>
            <a>Link 2</a>
          </LinkContainer>
        </LinksContainer>

        {/* TODO: Links for mobile */}
      </HeaderContainer>
    </>
  );
};

export default Header;
