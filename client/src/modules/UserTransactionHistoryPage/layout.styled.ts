import styled from "styled-components";
import { width } from "../../helpers/mediaQueries";

export const UserTransactionHistoryContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 362px);
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media only screen and ${width[1300]} {
    margin-top: 80px;
    min-height: calc(100vh - 100px);
  }

  @media only screen and ${width[1000]} {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  width: 1000px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and ${width[1000]} {
    width: 100%;
    min-height: calc(100vh - 100px);
  }

  @media only screen and ${width[1000]} {
    flex-direction: column;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 20px;
  margin-top: 40px;
  padding: 25px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
`;

export const TransactionsTable = styled.table`
  width: 100%;
  margin-top: 30px;

  tbody {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const TableRow = styled.tr`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  border-bottom: ${(props) => props.theme.borders.secondary};
  padding: 5px 0px;

  @media only screen and ${width[540]} {
    flex-direction: column;
    width: 300px;
  }
`;

export const ColumnHeader = styled.th`
  font-weight: 400;
  font-size: 0.9em;
  text-align: center;
`;

export const DateHeader = styled(ColumnHeader)`
  width: 10%;

  @media only screen and ${width[1000]} {
    width: 20%;
  }

  @media only screen and ${width[540]} {
    width: 100%;
    padding: 2px 0px;
  }
`;

export const CityHeader = styled(ColumnHeader)`
  width: 45%;

  @media only screen and ${width[1000]} {
    width: 40%;
  }

  @media only screen and ${width[540]} {
    width: 100%;
    padding: 2px 0px;
  }
`;

export const PostCodeHeader = styled(ColumnHeader)`
  width: 20%;

  @media only screen and ${width[1000]} {
    width: 30%;
  }

  @media only screen and ${width[540]} {
    width: 100%;
    padding: 2px 0px;
  }
`;

export const PriceHeader = styled(ColumnHeader)`
  width: 15%;

  @media only screen and ${width[1000]} {
    display: none;
  }

  @media only screen and ${width[540]} {
    display: block;
    width: 100%;
    padding: 2px 0px;
  }
`;

export const DetailsHeader = styled(ColumnHeader)`
  width: 10%;

  @media only screen and ${width[1000]} {
    width: 10%;
  }

  @media only screen and ${width[540]} {
    width: 100%;
    padding: 2px 0px;
  }
`;

export const ColumnElement = styled.th`
  font-weight: 100;
  font-size: 0.85em;
  text-align: center;
  overflow-x: hidden;

  @media only screen and ${width[1000]} {
    width: 100%;
  }
`;

export const Date = styled(ColumnElement)`
  width: 10%;

  @media only screen and ${width[1000]} {
    width: 20%;
  }

  @media only screen and ${width[540]} {
    width: 100%;
    padding: 2px 0px;
  }
`;

export const City = styled(ColumnElement)`
  width: 45%;

  @media only screen and ${width[1000]} {
    width: 40%;
  }

  @media only screen and ${width[540]} {
    width: 100%;
    padding: 2px 0px;
  }
`;

export const PostCode = styled(ColumnElement)`
  width: 20%;

  @media only screen and ${width[1000]} {
    width: 30%;
  }

  @media only screen and ${width[540]} {
    width: 100%;
    padding: 2px 0px;
  }
`;

export const Price = styled(ColumnElement)`
  width: 15%;

  @media only screen and ${width[1000]} {
    display: none;
  }

  @media only screen and ${width[540]} {
    display: block;
    width: 100%;
    padding: 2px 0px;
  }
`;

export const DetailsButton = styled(ColumnElement)`
  width: 10%;

  :hover {
    color: ${(props) => props.theme.colors.secondary};
    cursor: pointer;
  }

  @media only screen and ${width[540]} {
    width: 100%;
    padding: 2px 0px;
  }
`;
