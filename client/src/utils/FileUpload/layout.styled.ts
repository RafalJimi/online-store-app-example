import styled from "styled-components";
import { width } from "../../helpers/mediaQueries";

export const FileUploadLayoutContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
  flex-direction: row;

  @media only screen and ${width[750]} {
    flex-direction: column;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 300px;
  overflow-x: scroll;

  img {
    min-width: 300px;
    max-width: 400px;
    height: 100%;
    justify-content: space-around;
  }
`;
