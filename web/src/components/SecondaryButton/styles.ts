import styled from "styled-components";

interface ButtonProps {
  widthInRem?: number
  iconWidthInPx?: number;
  color: string;
}

export const Button = styled.button<ButtonProps>`

  width: ${ props => props.widthInRem === undefined ? '100%' : `${props.widthInRem}rem`};
  height: 50px;
  background: ${props => props.theme["slate-50"]};
  font-weight: 500;
  font-size: 1rem;
  color: ${props => props.theme[`${props.color}`]};
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img{
    object-fit: contain;
    width: ${ props => props.iconWidthInPx === undefined ? '12' : `${props.iconWidthInPx}px`};
    max-width: ${ props => props.iconWidthInPx === undefined ? '20' : `${props.iconWidthInPx + 4}px`};
    margin-right: 0.4rem;
  }

  &:hover{
    background: ${props => props.theme['zinc-300']};
    transition: background-color 0.2s;
    cursor: pointer;
  }

`