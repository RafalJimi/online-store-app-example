import styled from "styled-components";
import { width, maxHeight } from "../../helpers/mediaQueries";

export const ActivatePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 30px;
  margin-top: 60px;
  overflow-y: hidden;
  min-height: calc(100vh - 392px);

  @media only screen and ${width[1300]} {
    margin-top: 157px;
  }

  @media only screen and ${maxHeight[600]} {
    min-height: 300px;
  }
`;

export const ActivatePageContent = styled.main`
  display: flex;
  flex-direction: row;
`;

export const ActivatePageForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  align-items: center;
  padding: 20px 30px;

  @media only screen and ${width[660]} {
    margin-top: 0px;
  }
`;

export const ImageContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  height: 500px;

  img {
    height: 100%;
  }

  @media only screen and ${width[660]} {
    display: none;
  }
`;

export const ActivatePageButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.background};
  font-size: 1em;
  border-radius: 5px;
  padding: 10px 20px;

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;
