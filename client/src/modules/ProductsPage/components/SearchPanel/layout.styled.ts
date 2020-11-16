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

  ul {
    margin-top: 10px;
  }

  ul > li {
    list-style-type: none;
    padding-left: 10px;
    font-size: 0.8em;
    margin: 15px 0px;
  }

  ul > li:hover {
    cursor: pointer;
    color: #00000070;
  }

  @media only screen and ${width[1000]} {
    display: none;
  }
`;
