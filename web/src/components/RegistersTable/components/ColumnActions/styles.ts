import styled from "styled-components"

export const ColumnActionsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`
export const ActionContainer = styled.div`
  flex: 1;
  height: 100%;
`
interface ActionTriggerProps {
  $color: string
}

export const ActionTrigger = styled.div<ActionTriggerProps>`
  
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  span {
    font-weight: 700;
    font-size: 1rem;
    color: ${props => props.theme[props.$color]};
    white-space: nowrap;      
    overflow: hidden;         
    text-overflow: ellipsis;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${props => props.theme[props.$color]};
  }

`