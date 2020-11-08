import styled from "styled-components";

type Props = {
  prop: boolean;
};

export const CollectionMenu = styled.ul<Props>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: #000000;
  padding: 20px 50px;
  box-sizing: border-box;
  font-size: 1em;
  margin-top: 10px;
  margin: 0px;
  transition: height 1s;

  span > i {
    margin-right: 10px;
  }

  div {
    display: column;
    flex-direction: column;
    margin-left: 30px;
    list-style-type: none;
    margin-top: 10px;
    height: ${({ prop }) => (prop ? "200px" : "0px")};
    transition: height 1s;
    overflow: hidden;
  }

  div > li {
    padding: 10px 0px;
    font-weight: 100;
  }
`;
