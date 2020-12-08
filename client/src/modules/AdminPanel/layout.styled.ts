import styled from "styled-components";
import { width, maxHeight } from "../../helpers/mediaQueries";

export const PanelLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

export const AdminPanelContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  height: auto;
  padding: 40px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  justify-content: center;

  @media only screen and ${width[1300]} {
    padding: 120px 0px 0px 0px;
  }

  @media only screen and ${width[1000]} {
    justify-content: flex-start;
    height: auto;
  }

  @media only screen and ${maxHeight[600]} {
    justify-content: flex-start;
    min-height: 300px;
    width: 100%;
    margin: 0px;
  }
`;

export const AdminPanelTitle = styled.h3`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const AdminPanelSections = styled.div`
  width: 100%;
  height: auto;
  padding-top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and ${width[750]} {
    justify-content: center;
  }
`;

export const AdminPanelSectionName = styled.div`
  width: 45%;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #00000050;
  color: #00000050;

  :hover {
    border-bottom: 1px solid black;
    cursor: pointer;
    color: #000000;
  }

  @media only screen and ${width[750]} {
    width: 80%;
  }
`;
