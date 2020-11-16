import styled from "styled-components";
import { width, maxHeight } from "../../helpers/mediaQueries";

export const ActivatePageLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 30px 0px 30px;
  overflow-y: hidden;
  height: calc(100vh - 362px);

  @media only screen and ${width[1300]} {
    height: calc(100vh - 275px);
  }

  @media only screen and ${width[1000]} {
    justify-content: flex-start;
  }

  @media only screen and ${maxHeight[600]} {
    justify-content: flex-start;
    min-height: 300px;
  }
`;

export const ActivatePageContent = styled.main`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
`;

export const ActivatePageForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  align-items: center;
  padding: 20px 30px;
`;

export const ImageContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  height: 500px;

  img {
    height: 100%;
  }

  @media only screen and ${width[1300]} {
    height: 350px;
  }

  @media only screen and ${width[1000]} {
    display: none;
  }
`;

export const ActivatePageButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: black;
  color: white;
  font-size: 1em;
  border-radius: 5px;
  padding: 10px 20px;

  :hover {
    cursor: pointer;
    background-color: #00000050;
  }
`;
