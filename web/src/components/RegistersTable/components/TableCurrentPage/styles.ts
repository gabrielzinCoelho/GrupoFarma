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

export const PageSlideContainer = styled.div`

  padding: 0.5rem;
  background: ${props => props.theme["slate-500"]};
  border: 1px solid ${props => props.theme["slate-500"]};
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 1rem;
    height: 1rem;
    color: ${props => props.theme["slate-800"]};
  }

`