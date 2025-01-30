import styled from "styled-components";
import * as Select from "@radix-ui/react-select";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.25rem;

  span {
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme["slate-950"]};
  }
  
`;

export const SelectTrigger = styled(Select.Trigger)`
  width: 100%;
  padding: 0.5rem 1rem;

  display: inline-flex;
	align-items: center;
	justify-content: space-between;

  border: 1px solid ${(props) => props.theme["slate-500"]};
  border-radius: 12px;
	gap: 0.5rem;
  background-color: ${(props) => props.theme["slate-50"]}; // *

  span:first-child{
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme["slate-950"]};
  }

  &:focus{
    border: 1px solid ${(props) => props.theme["slate-950"]};
    box-shadow: none;
  }

  &[data-placeholder] {
    
    span:first-child{
      color: ${(props) => props.theme["slate-700"]};
      font-weight: 300;
    }

  }

  span:last-child{
    color: ${(props) => props.theme["slate-950"]};
  }
`

export const SelectContent = styled(Select.Content)`
  overflow: hidden;
  background-color: ${(props) => props.theme["slate-50"]}; // *
	border-radius: 12px;
	box-shadow:
		0px 10px 38px -10px rgba(22, 23, 24, 0.35),
		0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  margin-left: -0.1rem;
`
export const SelectViewport = styled(Select.Viewport)`
  width: var(--radix-select-trigger-width);
`

export const SelectItem = styled(Select.Item)`

  padding: 0.5rem 1rem;

  font-weight: 400;
  font-size: 1rem;
  color: ${(props) => props.theme["slate-950"]};
  border-top: 1px solid ${(props) => props.theme["zinc-300"]};
  border-bottom: 1px solid ${(props) => props.theme["zinc-300"]};
  border-collapse: collapse;
  box-sizing: border-box;
	
	display: flex;
	align-items: center;
  justify-content: space-between;
  
  &[data-highlighted] {
    outline: none;
    box-shadow: none;
    background-color: ${(props) => props.theme["zinc-300"]};
    border-top: 1px solid ${(props) => props.theme["slate-800"]};
    border-bottom: 1px solid ${(props) => props.theme["slate-800"]};
    border-collapse: collapse;
  }

  &:first-child[data-highlighted]{
    border-top: none;
  }

  &:last-child[data-highlighted]{
    border-bottom: none;
  }

`

export const SelectItemIndicator = styled(Select.ItemIndicator)`
  
	display: inline-flex;
	align-items: center;
	justify-content: center;
  color: ${(props) => props.theme["slate-950"]}; 

  svg {

    width: 1.2rem;
    height: 1.2rem;

  }

`

