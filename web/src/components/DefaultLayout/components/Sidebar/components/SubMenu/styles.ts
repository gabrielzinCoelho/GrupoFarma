import styled from "styled-components";

interface SubMenuContainerProps{
  $isActive: boolean
}

export const SubMenuContainer = styled.ul<SubMenuContainerProps>`
  list-style: none;
  
  li {
    padding: 0.75rem 2rem;
    display: flex;
    align-items: center;
    height: 4rem;
    max-height: 64px;
    background-color: ${(props) => props.$isActive ? props.theme["cyan-500"] : props.theme["slate-800"]};
    cursor: pointer;

    span {
      flex: 1;
      font-size: 1.2rem;
      font-weight: 500;
      margin-left: 3rem;
    }

    &:hover {
      background-color:  ${(props) => props.$isActive ? props.theme["cyan-500"] : props.theme["slate-600"]};
    }
  }
`;