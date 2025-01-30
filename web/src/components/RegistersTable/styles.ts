import styled from "styled-components";

export const TableContainer = styled.div`
  max-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

interface TableProps {
  $borderBottomRadius: boolean
}

export const Table = styled.table<TableProps>`
  flex: 1;
  width: 100%;
  border: 1px solid ${props => props.theme["slate-500"]};
  background: ${props => props.theme["slate-50"]};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: ${props => props.$borderBottomRadius && '8px'};
  border-bottom-right-radius: ${props => props.$borderBottomRadius && '8px'};
  border-collapse: collapse;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  td {
    border-bottom: 1px solid ${props => props.theme["slate-500"]};
  }
`



export const TableHeader = styled.thead`
  height: 3rem;  
  width: 100%;

  tr {
    height: 100%;  
    display: flex;
    flex-direction: row;
  }
`

interface TableHeaderItemProps {
  $percentWidth: number
}

export const TableHeaderItem = styled.th<TableHeaderItemProps>`
  height: 100%;
  width: ${props => `${props.$percentWidth}%`};
  border-bottom: 1px solid ${props => props.theme["slate-500"]};
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 0;
  padding-right: 1rem;

  &:first-child {
    padding-left: 2rem;
  }

  &:last-child {
    padding-right: 2rem;
  }

  span {
    font-size: 1.25rem;
    font-weight: 500;
    color: ${props => props.theme["slate-800"]};
  }
`

interface TableBodyProps {
  $numRows: number
  $rowHeightInRem: number
}

export const TableBody = styled.tbody<TableBodyProps>`
  width: 100%;
  overflow-y: auto;
  height: ${props => `${props.$numRows * props.$rowHeightInRem}rem`};

  tr {
    height: ${props => `${props.$rowHeightInRem}rem`}
  }

`

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: max-content;
`

export const TableRow = styled.tr`
  width: 100%;
  display: flex;
  flex-direction: row;

  /* &:last-child{
    td {
      border-bottom: 0;
    }
  } */
`



interface TableRowItemProps {
  $percentWidth: number
}

export const TableRowItem = styled.td<TableRowItemProps>`

  height: 100%;
  width: ${props => `${props.$percentWidth}%`};
  border-bottom: 1px solid ${props => props.theme["slate-500"]};
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  padding-right: 1rem;
  box-sizing: border-box;

  &:first-child {
    padding-left: 2rem;
  }

  &:last-child {
    padding-right: 2rem;
  }
`
  