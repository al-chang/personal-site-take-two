import styled from "styled-components";

export interface StyledLinkProps {
  color: string;
  hoverColor?: string;
  underLineColor?: string;
  underLine?: boolean;
}

export const Header = styled.h2`
  background: linear-gradient(
      to right,
      rgba(100, 200, 200, 1),
      rgba(100, 200, 200, 1)
    ),
    linear-gradient(
      to right,
      rgba(255, 0, 0, 1),
      rgba(255, 0, 180, 1),
      rgba(0, 100, 200, 1)
    );
  background-size: 100% 0.1em, 0 0.1em;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.3s;

  width: fit-content;

  &:hover,
  &:focus {
    background-size: 0 0.1em, 100% 0.1em;
  }
`;

export const StyledLink = styled.a<StyledLinkProps>`
  position: relative;
  color: ${(props) => props.color};
  text-decoration: none;

  &:hover,
  &:focus {
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

  &:hover::before,
  &:focus::before {
    transform: ${(props) => props.underLine && "scaleX(1)"};
  }
`;
