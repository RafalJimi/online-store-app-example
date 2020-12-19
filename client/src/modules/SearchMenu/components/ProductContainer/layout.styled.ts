import styled from "styled-components";

export const ProductContainer = styled.div`
  height: 320px;
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: 0px 10px;

  div {
    width: 100%;
    height: 260px;
    background-color: ${(props) => props.theme.colors.primary};
    overflow: hidden;
  }

  div > img {
    width: 100%;
  }

  span {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  p {
    font-weight: 500;
  }

  :hover {
    cursor: pointer;
  }
`;
