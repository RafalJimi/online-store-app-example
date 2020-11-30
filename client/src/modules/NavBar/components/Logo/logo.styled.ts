import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

export const LogoContainer = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  margin-left: 50%;
  transform: translate(-50%);
  margin-top: 11px;
  font-size: 1.3em;
  letter-spacing: 2px;
  text-align: center;
  font-family: Dancing Script, cursive;
  font-weight: 700;

  h2:hover {
    cursor: pointer;
  }

  @media only screen and ${width[1300]} {
    font-size: 0.8em;
    transform: translate(0px, 0px);
    margin-left: 20px;
    margin-top: 18.5px;
  }
`;
