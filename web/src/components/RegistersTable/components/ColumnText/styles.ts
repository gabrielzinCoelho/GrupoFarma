import styled from "styled-components";

export const ColumnTextContainer = styled.div`

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  span {
    font-weight: 400;
    font-size: 1rem;
    color: ${props => props.theme["slate-800"]};
    white-space: nowrap;      
    overflow: hidden;         
    text-overflow: ellipsis;
  }

`