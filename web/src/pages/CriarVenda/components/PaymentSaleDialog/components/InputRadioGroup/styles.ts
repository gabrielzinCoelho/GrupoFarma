import * as RadioGroup from "@radix-ui/react-radio-group";
import styled from "styled-components";


export const RadioGroupRoot = styled(RadioGroup.Root)`

  width: 100%;
  overflow: hidden;
  height: min-content;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  outline: 0;
  box-shadow: none;
  border: 0;

  &:focus &:focus-within {
    outline: 0;
    box-shadow: none;
    border: 0;
  }

`