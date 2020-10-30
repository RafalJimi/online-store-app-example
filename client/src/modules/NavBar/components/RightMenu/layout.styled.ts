import styled from "styled-components";

export const RightMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40;
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

  @media only screen and (max-width: 500px) {
    width: 200px;
    margin-right: -20px;
  }

  @media only screen and (max-width: 380px) {
    width: 150px;
    margin-right: -10px;
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
    font-size: 1.5em;
    width: 30px;
    flex: 0 0 auto;
  }

  @media only screen and (max-width: 500px) {
    font-size: 1.1em;
    width: 20px;
  }

  @media only screen and (max-width: 380px) {
    font-size: 1.1em;
    width: 15px;
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

export const BurgerButtonContainer = styled.div`
  font-size: 0.85em;
  font-weight: 400;
  text-align: center;
  color: black;
  word-spacing: 2px;
  flex: 1 1 auto;
  padding-left: 10px;
  padding-top: 2px;
  margin-bottom: 2px;

  :hover {
    color: #00000050;
    cursor: pointer;
  }

  @media only screen and (max-width: 1300px) {
    font-size: 1.5em;
    width: 30px;
    flex: 0 0 auto;
  }
`;

type BurgerButtonProps = {
  isOpen: boolean;
};

export const BurgerButton = styled.button<BurgerButtonProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 18px;
  overflow: hidden;
  height: 18px;
  background: white;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 2;
  padding-bottom: 0px;
  &:focus {
    outline: none;
  }
@media only screen and (max-width: 1300px) {
  button {
    display: none;
  }
  div {
    width: 20px;
    height: 2px;
    background: black;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ isOpen }) => (isOpen ? "rotate(43deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-43deg)" : "rotate(0)")};
    }
  }
`;
