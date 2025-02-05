import * as Popover from '@radix-ui/react-popover'

import styled from "styled-components";

export const SidebarContainer = styled.aside`
  max-width: 24rem;
  min-width: 18rem;
  width: 20%;
  height: 100vh;
  background-color: ${(props) => props.theme["slate-700"]};
  color: ${(props) => props.theme["slate-50"]};
  display: flex;
  flex-direction: column;
`;

export const SidebarHeader = styled.aside`
  width:100%;
  height: 12%;
  min-height: 4rem;
  max-height: 8rem;
  background-color: ${(props) => props.theme["slate-800"]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  div {

    width: 4rem;
    height: 4rem;

    img {
      object-fit: contain;
    }
  }

  h2 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["slate-50"]};
  }
`;

export const SidebarContent = styled.div`
  width: 100%;
  flex: 1;
  box-shadow: 4px 0px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 4rem 2rem;

   img:last-child{
    object-fit: contain;
    width: 6px;
    height: 25px;
    cursor: pointer;
  }
`;

export const UserProfile = styled.div`

  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow: hidden;

  img {
    width: 64px; 
    height: 64px;
    border-radius: 4px;
    border: 2px solid ${(props) => props.theme["yellow-400"]};
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    overflow: hidden;

    h3 {
      width: 100%;
      font-size: 1.6rem;
      white-space: nowrap;      
      overflow: hidden;         
      text-overflow: ellipsis;  
    }

    span {
      font-size: 1rem;
      color: ${(props) => props.theme["yellow-400"]};
    }
  }
`

export const MenuList = styled.ul`
  width: 100%;
  list-style: none;
`;

export const PopoverContent = styled(Popover.Content)`

  border-radius: 4px;
	padding: 1rem 0;
	background-color: ${(props) => props.theme["slate-50"]};
	box-shadow:
    0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`

export const PopoverArrow = styled(Popover.Arrow)`
  fill: ${(props)=> props.theme["slate-50"]};
`

interface PopoverItemProps {
  $iconWidthInRem?: number
}

export const PopoverItem = styled.div<PopoverItemProps>`

  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme['zinc-300']};
  cursor: pointer;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;

  &:first-child{
    border-top: 1px solid ${(props) => props.theme['zinc-300']};
  }

  &:hover{
    background: ${(props) => props.theme['zinc-300']};
  }

  svg{
    width: ${(props) => props.$iconWidthInRem ? `${props.$iconWidthInRem}rem` : '1.5rem'};
    height: ${(props) => props.$iconWidthInRem ? `${props.$iconWidthInRem}rem` : '1.5rem'};
  }

  span{
      font-weight: 500;
      font-size: 1rem;
      color: ${(props) => props.theme["slate-800"]};
  }

`