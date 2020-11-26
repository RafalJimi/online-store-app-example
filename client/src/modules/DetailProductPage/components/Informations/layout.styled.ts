import styled from "styled-components";

type Props = {
  isOpen: boolean;
};

export const DetailsContainer = styled.div<Props>`
  width: 350px;
  text-align: center;
  border-bottom: 1px solid #00000020;
  outline: none;
  color: black;
  font-weight: 100;
  font-size: 0.8em;
  margin-top: 40px;
  overflow: hidden;
  padding: 0px;

  .detailsContent {
    height: ${({ isOpen }) => (isOpen ? "205px" : "0px")};
    transition: height 0.5s;
  }

  ul {
    text-align: start;
    padding: 10px 30px;
    margin: 0px;
  }

  ul > li {
    margin: 10px 0px;
  }

  p {
    text-align: start;
    padding: 0px;
  }
`;

export const SmallContainerTitle = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;

  :hover {
    cursor: pointer;
  }
`;

export const SupplyContainer = styled.div<Props>`
  width: 350px;
  text-align: center;
  border-bottom: 1px solid #00000020;
  outline: none;
  color: black;
  padding: 0px;
  font-weight: 100;
  font-size: 0.8em;
  overflow: hidden;

  .supplyContent {
    height: ${({ isOpen }) => (isOpen ? "190px" : "0px")};
    transition: height 0.5s;
  }
`;

export const SupplyInformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    font-weight: 400;
    font-size: 1.15em;
  }

  i {
    margin-top: 10px;
    font-size: 1.1em;
  }

  p {
    margin: 10px 0px 0px 0px;
    padding: 0px;
  }

  :nth-child(2) {
    margin-top: 30px;
    margin-bottom: 15px;
  }
`;

export const ReturnContainer = styled.div<Props>`
  width: 350px;
  text-align: center;
  border-bottom: 1px solid #00000020;
  outline: none;
  color: black;
  padding: 0px;
  font-weight: 100;
  font-size: 0.8em;
  overflow: hidden;

  .returnContent {
    height: ${({ isOpen }) => (isOpen ? "545.31px" : "0px")};
    transition: height 0.5s;
  }
`;

export const ReturnContainerSection = styled.div`
  text-align: start;
  padding-top: 30px;

  span {
    font-weight: 400;
    font-size: 1.2em;
    padding: 0px;
    margin: 0px;
  }

  p {
    font-size: 1.05em;
    padding: 0px;
    margin-bottom: 15px;
  }

  :nth-child(3) {
    padding-bottom: 40px;
  }
`;
