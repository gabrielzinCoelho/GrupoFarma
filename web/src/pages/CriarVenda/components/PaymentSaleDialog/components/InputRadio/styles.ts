import * as RadioGroup from "@radix-ui/react-radio-group"
import styled from "styled-components"

export const InputContainer = styled.div`

  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: min-content;
  
  &:focus &:focus-within {
    outline: 0;
    box-shadow: none;
    border: 0;
  }

`

export const InputLabel = styled.label`
  color: ${props => props.theme["slate-800"]};
  font-size: 1rem;
  font-weight: 400;
  white-space: nowrap;      
  overflow: hidden;         
  text-overflow: ellipsis;
`

export const RadioGroupItem = styled(RadioGroup.Item)`

  background-color: ${props => props.theme["slate-50"]};
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 100%;
  border: 2px solid  ${props => props.theme["slate-800"]};

  &:hover {
    background-color: ${props => props.theme["zinc-300"]};
  }

  &:focus {
    box-shadow: none;
  }

  cursor: pointer;

`

export const RadioGroupIndicator = styled(RadioGroup.Indicator)`

  display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	position: relative;

  &::after{
    content: "";
    display: block;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background-color: ${props => props.theme["slate-800"]};;
  }

`