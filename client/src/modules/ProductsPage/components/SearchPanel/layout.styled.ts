import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

export const SearchPanelContainer = styled.div`
  position: fixed;
  top: 60px;
  left: 0px;
  width: 300px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 30px;
  font-size: 1.2em;

  menu {
    margin-left: 55px;
  }

  ul {
    margin-top: 10px;
    margin-bottom: 30px;
  }

  ul > li {
    list-style-type: none;
    padding-left: 10px;
    font-size: 0.8em;
    margin: 15px 0px;
  }

  ul > li:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.modalBackground};
  }

  @media only screen and ${width[1300]} {
    top: 100px;
  }

  @media only screen and ${width[1000]} {
    display: none;
  }
`;
