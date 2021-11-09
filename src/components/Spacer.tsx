import styled from "styled-components";

interface SpacerProps {
  url: string;
  flip?: boolean;
}

export const Spacer = styled.div<SpacerProps>`
  aspect-ratio: 960/300;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  background-image: url(${(props) => props.url});
  transform: rotate(${(props) => (props.flip ? "180deg" : "0deg")});
`;
