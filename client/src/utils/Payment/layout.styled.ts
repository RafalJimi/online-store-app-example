import styled from "styled-components";
import { width } from "../../helpers/mediaQueries";

export const PaypalButtonContainer = styled.div`
  width: 30%;

  @media only screen and ${width[1000]} {
    width: 50%;
  }
`;
