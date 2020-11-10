import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  border-top: 1px solid #00000050;
  padding: 0px 0px;
  width: 100%;
  font-size: 0.8em;
  font-weight: 100;

  div {
    padding: 20px 30px;
  }

  div:hover {
    cursor: pointer;
  }

  @media only screen and ${width[1300]} {
    display: none;
  }
`;
