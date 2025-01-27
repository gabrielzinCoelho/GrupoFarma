import styled from "styled-components";

export const CurrentPageContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    gap: 0.5rem;
    align-items: center;

    span {
    font-weight: 400;
    font-size: 1rem;
    color: ${props => props.theme["slate-800"]};
  }

`

interface PageSlideContainerProps {
  $isAble: boolean
}

export const PageSlideContainer = styled.div<PageSlideContainerProps>`

  padding: 0.5rem 0.25rem;
  border: 1px solid ${props => props.theme["slate-500"]};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${props => props.$isAble ? 'pointer' : 'not-allowed'};
  background: ${props => props.$isAble ? props.theme["slate-50"] : props.theme["zinc-300"]};

  svg {
    width: 1rem;
    height: 1rem;
    color: ${props => props.theme["slate-800"]};
  }

  &:hover {
    background: ${props => props.theme["zinc-300"]};
  }

`