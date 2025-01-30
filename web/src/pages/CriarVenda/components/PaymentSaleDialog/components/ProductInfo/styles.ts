import styled from "styled-components";

export const ProductInfoContainer = styled.div`

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

`

export const ProductDataContainer = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  span {
    color: ${props => props.theme["slate-800"]};
    font-size: 1.25rem;
    font-weight: 400;
  }

`

export const ProductImageContainer = styled.div`

  width: 2.5rem;
  height: 2.5rem;

  img {
    object-fit: contain;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    border: 2px solid ${props => props.theme['slate-500']}
  }

`

export const ProductPriceContainer = styled.div`

  span {
    color: ${props => props.theme["slate-800"]};
    font-size: 1.25rem;
    font-weight: 400;
  }

`