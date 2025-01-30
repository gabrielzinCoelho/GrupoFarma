import styled from "styled-components";

interface ButtonProps {
  iconWidthInRem: number;
  color: string;
}

export const Button = styled.button<ButtonProps>`

  width: 100%;
  height: 100%;
  background: ${props => props.theme["slate-50"]};
  font-weight: 500;
  font-size: 1rem;
  color: ${props => props.theme[`${props.color}`]};
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid;

  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  svg {
    width: ${props => `${props.iconWidthInRem}rem`};
    height: ${props => `${props.iconWidthInRem}rem`};
    color: ${props => props.theme[`${props.color}`]};
  }

  &:hover{
    background: ${props => props.theme['zinc-300']};
    transition: background-color 0.2s;
    cursor: pointer;
  }

  &:focus{
    outline: none;
    box-shadow: none;
  }

`