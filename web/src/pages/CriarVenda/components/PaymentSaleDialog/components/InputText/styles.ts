import styled from "styled-components";

interface InputTextContainerProps {
  $widthInRem: number
  $disabled: boolean
}

export const InputTextContainer = styled.div<InputTextContainerProps>`

  width: ${props => `${props.$widthInRem}rem`};

  input {

    width: 100%;
    border: 0;
    box-shadow: none;
    outline: 0;

    padding: 1rem 0.5rem 1rem 1rem;
    background: ${props => props.$disabled ? props.theme["zinc-300"] : props.theme["slate-50"]};
    border: 2px solid ${props => props.$disabled ? props.theme["slate-500"] : props.theme["slate-800"]};
    border-radius: 4px;

    font-size: 1.25rem;
    font-weight: 400;
    color: ${props => props.$disabled ? props.theme["slate-700"] : props.theme["slate-800"]};
    

    &:focus{
      box-shadow: none;
      outline: 0;
    }

    &::placeholder {
      font-size: 1.25rem;
      font-weight: 400;
      color: ${props => props.theme["slate-700"]};
    }

  }
  

`