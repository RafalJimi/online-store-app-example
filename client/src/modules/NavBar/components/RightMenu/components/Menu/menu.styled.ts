import styled from "styled-components";

export const MenuContainer = styled("nav")<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  color: #000000;
  height: 100%;
  width: 100%;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};

  .BurgerText {
    color: black;
  }
  a {
    font-size: 20px;
    text-transform: uppercase;
    padding: 2rem 0;
    letter-spacing: 0.5rem;
    font-family: "Times New Roman", Times, serif;
    color: black;
    text-decoration: none;
    z-index: 6;
    transition: color 0.3s linear;
    text-align: center;
    &:hover {
      color: #d3b71c;
    }
  }
`;
