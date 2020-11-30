import styled from "styled-components";
import { width } from "../../helpers/mediaQueries";

export const LoadingContainer = styled.div`
  width: 100vw;
  min-height: calc(100vh - 392px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 60px;

  i {
    font-size: 1.5em;
  }

  span {
    font-size: 1.2em;
    margin-left: 10px;
  }

  @media only screen and ${width[1300]} {
    margin-top: 157px;
  }
`;
