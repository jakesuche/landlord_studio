import styled from "styled-components";

export const T = styled.table`
  width: 100%;

`;

export const TableHeader = styled.div`
  background-color: var(--bs-soft-primary);
  overflow-x: auto;
  color:#fff!important;

  th{
    color:#fff!important;
  }
`;
export const TableContent = styled.div`
  height: 500px;
  overflow-x: auto;
  margin-top: 0px;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const Th = styled.th`
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: #000;
  text-transform: uppercase;
`;

export const Td = styled.td`
  padding: 15px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 12px;
  color: #000;
  border-bottom: solid 1px rgba(255, 255, 255, 0.1);
`;

export const Tr = styled.tr`

border-color: inherit;
border-style: solid;
border-width: 0;
:nth-child(even){background-color: #f2f2f2;}

`

export const TableWrapper = styled.div`
  overflow-x: auto;
  background:#fff;
`;