import styled from "styled-components";

interface MenuItemContainerProps {
  $isActive: boolean
}

export const MenuItemContainer = styled.li<MenuItemContainerProps>`
  display: flex;
  align-items: center;
  height: 4rem;
  max-height: 64px;
  justify-content: space-between;
  padding: 0.75rem 2rem;
  background-color: ${(props) => props.$isActive ? props.theme["cyan-500"] : props.theme["slate-700"]};
  cursor: pointer;
  gap: 1rem;

  .icon {
    object-fit: contain;
    width: 2rem; 
    height: 2rem;
  }

  span {
    flex: 1;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .arrow {
    transition: transform 0.3s ease;
    transform: rotate(-90deg);
  }

  .arrow.open {
    transform: rotate(0deg);
  }

  &:hover {
    background-color: ${(props) => props.$isActive ? props.theme["cyan-500"] : props.theme["slate-600"]};
  }
`;