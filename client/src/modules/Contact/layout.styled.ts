import styled from "styled-components";

type Prop = {
  prop: boolean;
};

export const ContactContainer = styled.main<Prop>`
  display: flex;
  position: fixed;
  top: 0;
  margin-top: 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 100%;
  text-align: left;
  z-index: 12;
  opacity: ${({ prop }) => (prop ? "1" : "0")};
  transition: ${({ prop }) =>
    prop
      ? "opacity .5s ease-in-out, transform .01s ease-in"
      : "opacity .5s ease-in-out, transform .01s ease-in .4s"};
  transform: translateX(-100%);
  transform: ${({ prop }) => (prop ? "translateX(0%)" : "translateX(100%)")};
  font-family: "Ubuntu", sans-serif;
`;

export const CloseContactWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.modalBackground};
`;

export const ContactWindow = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: auto;
  background-color: ${(props) => props.theme.colors.background};
  align-items: center;
  justify-content: space-between;
  -webkit-box-shadow: none;
  box-shadow: none;
  z-index: 2;
`;

export const CloseContactWindowButton = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  margin-top: 5px;
  width: 40px;
  height: 40px;
  font-size: 1.5em;
  font-weight: 100;
`;

export const Title = styled.div`
  font-size: 1.2em;
  padding: 0px;
  margin: 0px;
  font-weight: 400;
`;

export const TextContainer = styled.div`
  font-size: 0.8em;
  text-align: center;
  margin-top: 20px;
  padding: 0px 10px;
`;

export const DetailsContainer = styled.div`
  font-size: 0.7em;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
`;
