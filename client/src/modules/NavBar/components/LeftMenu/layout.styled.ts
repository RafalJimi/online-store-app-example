import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

export const LeftMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-between;
  padding: 0;
  width: 232px;
  height: 60px;
  padding-bottom: 7.5px;

  @media only screen and ${width[1300]} {
    position: fixed;
    left: 0;
    top: 70px;
    background-color: white;
    width: 100vw;
    border-top: 1px solid #00000050;
    height: 60px;
  }
`;

export const LeftMenuItem = styled.div`
  letter-spacing: 0px;
  font-size: 1em;
  font-weight: 700;
  text-align: center;
  padding-top: 10px;
  list-style-type: none;

  :hover {
    cursor: pointer;
  }

  :hover > div {
    cursor: default;
    display: block;
    height: 730px;
  }

  span {
    display: inline-block;
    padding: 15px 20px;
    position: relative;
  }

  span::after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 0%;
    position: absolute;
    background: black;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  span:hover::after {
    width: 100%;
    left: 0;
  }

  :hover > span:after {
    width: 100%;
    left: 0;
  }

  @media only screen and ${width[1300]} {
    width: 50%;
    border-bottom: 1px solid #00000050;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 0px;
    color: #00000050;

    :hover {
      border-bottom: 1px solid #000000;
    }

    :hover > div {
      height: 0px;
    }

    :hover > span {
      color: black;
    }

    span::after {
      display: none;
    }

    span:hover::after {
      width: 0%;
      left: 0;
    }

    :hover > span:after {
      width: 0%;
    }
  }
`;

export const DropdownMenu = styled.div`
  display: block;
  flex-direction: row;
  position: absolute;
  left: 0;
  margin-top: 0px;
  height: 0px;
  width: 100vw;
  background-color: white;
  padding-left: 63px;
  margin: 2px solid green;
  overflow: hidden;
  transition: height 0.1;

  @media only screen and ${width[1300]} {
    display: none;

    :hover > div {
      height: 0px;
    }
  }
`;

export const DropdownMenuContainer = styled.div`
  display: flex;
`;

export const DropdownMenuColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 247px;
  margin-top: 40px;
  padding-left: 0px;
  height: 677px;
  justify-content: start;
  align-items: start;
  font-family: "Ubuntu", sans-serif;
`;

export const DropdownMenuColumnTitle = styled.div`
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 25px;
  text-align: left;

  :hover {
    color: #00000050;
    cursor: pointer;
  }
`;

export const DropdownMenuColumnItem = styled.div`
  margin-bottom: 12px;
  padding-left: 1px;
  font-size: 1em;
  font-weight: 300;

  :hover {
    color: #00000050;
    cursor: pointer;
`;
