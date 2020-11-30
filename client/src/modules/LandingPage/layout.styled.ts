import styled from "styled-components";
import { width } from "../../helpers/mediaQueries";

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 30px;
  margin-top: 60px;
  min-height: calc(100vh - 392px);

  @media only screen and ${width[1300]} {
    margin-top: 120px;
  }
`;

export const CollectionTitle = styled.h3`
  margin: 40px 0px 20px 0px;
`;
