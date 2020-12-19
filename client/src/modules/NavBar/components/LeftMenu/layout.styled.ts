import styled from "styled-components";
import { width } from "../../../../helpers/mediaQueries";

export const LeftMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  height: 100%;
  padding: 0px;
  background-color: ${(props) => props.theme.colors.background};

  @media only screen and ${width[1300]} {
    position: fixed;
    left: 0;
    top: 50px;
    width: 100vw;
    height: 50px;
  }
`;

export const LeftMenuSection = styled.nav`
  letter-spacing: 0px;
  font-size: 1em;
  font-weight: 700;
  text-align: center;
  list-style-type: none;

  :hover {
    cursor: pointer;
  }

  :hover > menu {
    cursor: default;
    display: block;
    height: 200px;
  }

  header {
    display: inline-block;
    padding: 15px 20px 13px 20px;
    position: relative;
  }

  header::after {
    content: "";
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    display: block;
    height: 2px;
    left: 0%;
    position: absolute;
    background: ${(props) => props.theme.colors.primary};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  header:hover::after {
    width: 100%;
    left: 0;
  }

  :hover > header:after {
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

    header {
      padding: 15px 20px 13px 20px;
      width: 100%;
    }

    :hover {
      border-bottom: 1px solid #000000;
    }

    :hover > menu {
      height: 0px;
    }

    :hover > header {
      color: black;
    }

    header::after {
      display: none;
    }

    header:hover::after {
      width: 0%;
      left: 0;
    }

    :hover > header:after {
      width: 0%;
    }
  }
`;

export const DropdownMenu = styled.menu`
  display: block;
  flex-direction: row;
  position: absolute;
  left: 0;
  top: 54px;
  margin-top: 0px;
  height: 0px;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.background};
  padding-left: 60px;
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

export const DropdownMenuSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 247px;
  margin-top: 40px;
  padding-left: 0px;
  height: 677px;
  justify-content: start;
  align-items: start;
  font-family: ${(props) => props.theme.fonts.secondary};
`;

export const DropdownMenuSectionHeader = styled.div`
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 25px;
  text-align: left;
  color: ${(props ) => props.theme.colors.primary};

  :hover {
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }
`;

export const DropdownMenuSectionItem = styled.div`
  margin-bottom: 12px;
  padding-left: 1px;
  font-size: 1em;
  font-weight: 300;

  :hover {
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }
`;
