import styled from "styled-components";

interface ButtonProps {
  widthInRem?: number
}

export const Button = styled.button<ButtonProps>`

  width: ${ props => props.widthInRem === undefined ? '100%' : `${props.widthInRem}rem`};
  height: 42px;
  background: ${props => props.theme["slate-800"]};
  font-weight: 500;
  font-size: 1rem;
  color: ${props => props.theme["slate-50"]};
  padding: 0.5rem;
  border-radius: 12px;
  border: 0;

  &:hover{
    background: ${props => props.theme['slate-700']};
    transition: background-color 0.2s;
    cursor: pointer;
  }

`