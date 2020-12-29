import styled from "styled-components";
import { width } from "../../helpers/mediaQueries";

export const UserTransactionDetailsContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 362px);
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media only screen and ${width[1300]} {
    margin-top: 60px;
    min-height: calc(100vh - 90px);
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
  flex-wrap: wrap;

  tbody {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and ${width[1000]} {
    width: 100%;
    min-height: calc(100vh - 100px);
  }

  @media only screen and ${width[1000]} {
    flex-direction: column;
  }
`;

export const TransactionDetailsHeader = styled.header`
  width: 100%;
  height: 20px;
  margin-top: 40px;
  padding: 25px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
`;

export const Table = styled.table`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  border-top: ${(props) => props.theme.borders.secondary};
  border-left: ${(props) => props.theme.borders.secondary};
  border-right: ${(props) => props.theme.borders.secondary};

  @media only screen and ${width[1000]} {
    width: 500px;
  }

  @media only screen and ${width[540]} {
    width: 360px;
  }
`;

export const TableRow = styled.tr`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  border-bottom: ${(props) => props.theme.borders.secondary};
  padding: 5px 0px;
`;

export const ColumnHeader = styled.th`
  font-weight: 400;
  font-size: 0.9em;
  text-align: center;
`;

export const TableHeader = styled(ColumnHeader)`
  width: 100%;
`;

export const ColumnElement = styled.th`
  font-weight: 100;
  font-size: 0.85em;
  text-align: center;
  overflow-x: hidden;
`;

export const Column1 = styled(ColumnElement)`
  width: 20%;
`;

export const Column2 = styled(ColumnElement)`
  width: 80%;
`;
