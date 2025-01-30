import styled from "styled-components";

export const ProductItemSaleDialogContainer = styled.div`

  display: flex;
  flex-direction: column;
  width: 12rem;
  
  &:hover {
    cursor: pointer;
    border: 1px solid ${props => props.theme["slate-800"]};
    border-radius: 16px;
    padding-bottom: 0.5rem;
    width: 12.5rem;
    transition: width 0.4s, height 0.4s;

    div:last-child {
      padding: 0 0.5rem;
    }

    div:first-child {
      height: 12.5rem;
      transition: width 0.4s, height 0.4s;
      padding: 0 0.5rem;
      border-bottom: 1px solid ${props => props.theme["slate-800"]};
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

`

export const ProductImageContainer = styled.div`

  width: 100%;
  height: 12rem;
  background: ${props => props.theme["slate-300"]};
  padding: 1rem;
  border-radius: 16px;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

`

export const ProductDataContainer = styled.div`

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 0.5rem;
  margin-top: 1rem;
  width: 100%;

  span {
    width: 100%;
    font-size: 1rem;
    font-weight: 600;
    color: ${props => props.theme["slate-800"]};
    white-space: nowrap;      
    overflow: hidden;         
    text-overflow: ellipsis;
  }


`