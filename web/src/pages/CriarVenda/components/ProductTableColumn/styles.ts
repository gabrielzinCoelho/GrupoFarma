import styled from "styled-components"

export const ProductTableColumnContainer = styled.div`

  height: 100%;
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;

  span {
    font-size: 1rem;
    font-weight: 400;
    color: ${props => props.theme["slate-800"]}
  }

`

export const ProductImageContainer = styled.div`

  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  padding: 0.5rem;
  box-sizing: content-box;
  /* background: green; */

  svg {
    width: 1.2rem;
    height: 1.2rem;
    background: ${props => props.theme['red-500']};
    color: ${props => props.theme['slate-50']};
    padding: 0;
    border: 0;
    border-radius: 50%;
    position: absolute;
    left: 0.2rem;
    top: 0.2rem;
    z-index: 2;
    cursor: pointer;

    &:hover + img {
      border: 2px solid ${props => props.theme['red-500']};
      transition: border 0.2s;
    }

  }

  img {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: contain;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    border: 2px solid ${props => props.theme['yellow-400']}
  }

`