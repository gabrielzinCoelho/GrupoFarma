import styled from "styled-components";

export const InputContainer = styled.div`

  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.25rem;

  span {
    font-weight: 500;
    font-size: 1rem;
    color: ${props => props.theme["slate-950"]}
  }

`

interface InputFieldProps {
  $iconHasEvent: boolean;
}

export const InputField = styled.div<InputFieldProps>`

  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid ${props => props.theme["slate-500"]};
  border-radius: 12px;

  svg {
    color: ${props => props.theme["slate-800"]};
    margin-left: 1rem;
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;

    cursor: ${props => props.$iconHasEvent ? 'pointer' : 'default'};

  }

  &:focus-within {
    border: 1px solid ${props => props.theme["slate-950"]};
  }

  input {
    
    flex: 1;
    min-width: 0;
    background: transparent;
    border: 0;
    font-weight: 300;
    font-size: 1rem;
    color: ${props => props.theme["slate-950"]};

    &:focus{
      border: 0;
      outline: none;
      box-shadow: none;
    }

    &::placeholder{
      color: ${props => props.theme["slate-700"]}
    }

  }

`