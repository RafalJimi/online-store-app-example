import styled from "styled-components";
import { width } from "../../helpers/mediaQueries";

export const LandingPageLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 30px 0px 30px;

  @media only screen and ${width[1300]} {
    padding: 100px 30px 0px 30px;
  }
`;

export const CollectionTitle = styled.h3`
  margin-top: 40px;
`;
