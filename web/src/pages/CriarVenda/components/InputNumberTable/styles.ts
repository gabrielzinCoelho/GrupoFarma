import styled from "styled-components";

export const InputNumberTableContainer = styled.div`

  height: 100%;
  width: 100%;
  align-items: center;

`

export const InputContainer = styled.div`

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button
  {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number]
  {
    -moz-appearance: textfield;
  }

  width: 5rem;
  height: 2.5rem;
  display: flex;
  border: 1px solid ${props => props.theme["slate-500"]};
  border-radius: 4px;
  overflow: hidden;

  &:focus-within {
    border: 2px solid ${props => props.theme["slate-800"]};
  }

  input {
    width: 3.5rem;
    line-height: 1.65;
    padding: 0 1rem;
    margin: 0;
    border: 0;

    box-shadow: none;

    &:focus {
      outline: 0;
    }

  }

`

export const QuantityNavContainer = styled.div`
  flex: 1;
  height: 100%;
  width: 2rem;
  flex-direction: column;
  border-left: 1px solid ${props => props.theme["slate-500"]};

  div {
    flex: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      background: ${props => props.theme["zinc-300"]};
    }

    span {
      color: ${props => props.theme["slate-800"]};
      font-size: 1rem;
    }

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  div:first-child {
    border-bottom: 1px solid ${props => props.theme["slate-500"]};
  }

`