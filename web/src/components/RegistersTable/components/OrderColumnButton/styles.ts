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
  padding: 0.5rem;

  background: ${props => props.$isActive ? props.theme["slate-800"] : props.theme["slate-500"]}

  svg {
    width: 1rem;
    height: 1rem;
    color: ${props => props.$isActive ? props.theme["slate-50"] : props.theme["slate-800"]}
  }

  &:first-child {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }

`