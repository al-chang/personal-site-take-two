import styled from "styled-components";

export interface StyledLinkProps {
  color: string;
  hoverColor?: string;
  underLineColor?: string;
  underLine?: boolean;
}

export const StyledLink = styled.a<StyledLinkProps>`
  position: relative;
  color: ${(props) => props.color};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.hoverColor ?? props.color};
  }

  &:before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.underLineColor ?? props.color};
    transform: scaleX(0);
    transform-origin: top left;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: ${(props) => props.underLine && "scaleX(1)"};
  }
`;
