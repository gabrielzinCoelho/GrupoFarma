import styled from "styled-components"

export const OrderColumnContainer = styled.div`

  display: flex;
  flex-direction: column;
  
`

interface OrderColumnProps {
  $isActive: boolean
}

export const OrderColumn = styled.div<OrderColumnProps>`

  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.$isActive ? props.theme["slate-800"] : props.theme["slate-400"]};
  cursor: pointer;
  padding: 0 0.2rem;

  svg {
    width: 0.75rem;
    height: 0.75rem;
    color: ${props => props.$isActive ? props.theme["slate-50"] : props.theme["slate-800"]}
  }

  &:first-child {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }

  &:last-child {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

`