import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
  border-top: ${(props) => props.theme.borders.secondary};
`;

export const CopyrightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: ${(props) => props.theme.borders.secondary};
  padding: 30px 0px;
  width: 100%;
  font-size: 0.8em;
  font-weight: 100;
`;
