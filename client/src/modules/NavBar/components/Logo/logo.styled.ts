import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

export const LogoContainer = styled.div`
  width: 200px;
  position: fixed;
  left: 0;
  top: 0;
  margin-left: 50%;
  transform: translate(-100px, -5px);
  font-size: 1.3em;
  letter-spacing: 2px;
  text-align: center;
  font-family: Dancing Script, cursive;
  font-weight: 700;

  @media only screen and ${width[1300]} {
    width: 200px;
    font-size: 0.7em;
    margin-top: 15px;
    transform: translate(0px, 0px);
    margin-left: 10px;
  }

  @media only screen and ${width[500]} {
    width: 150px;
    margin-left: 0px;
  }
`;
