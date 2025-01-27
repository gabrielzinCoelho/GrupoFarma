import styled from "styled-components";

interface ButtonProps {
  widthInRem?: number
}

export const Button = styled.button<ButtonProps>`

  width: max-content;
  height: max-content;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  background: ${props => props.theme["slate-800"]};
  padding: 1rem;
  border-radius: 12px;
  border: 0;

  &:hover{
    background: ${props => props.theme['slate-700']};
    transition: background-color 0.2s;
    cursor: pointer;
  }

  span {
    font-weight: 600;
    font-size: 1.25rem;
    color: ${props => props.theme["slate-50"]};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${props => props.theme["slate-50"]};
  }

`