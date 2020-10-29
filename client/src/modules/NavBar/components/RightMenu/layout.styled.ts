import styled from "styled-components";

export const RightMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  width: 460px;
  height: 67.5px;

  @media only screen and (max-width: 1300px) {
    font-size: 0.7em;
    margin-top: 10px;
    transform: translate(0px, 0px);
    margin-left: 10px;
    width: 200px;
    margin-right: 20px;
  }
`;

export const RightMenuItem = styled.div`
  font-size: 0.85em;
  font-weight: 400;
  text-align: center;
  color: black;
  word-spacing: 2px;
  flex: 1 1 auto;
  padding: 20px 10px;
  margin-bottom: 2px;

  :hover {
    color: #00000050;
    cursor: pointer;
  }

  @media only screen and (max-width: 1300px) {
    font-size: 1.2em;
    width: 30px;
    flex: 0 0 auto;
  }
`;

export const DropdownMenu = styled.div`
  display: block;
  position: absolute;
  margin-top: 17px;
  height: 630px;
  width: 100%;
  transform: translate(-48px);
  background-color: #0000000;
`;
