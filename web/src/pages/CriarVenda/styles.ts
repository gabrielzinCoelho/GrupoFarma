import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 0 1rem;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 2rem;
`;

export const SaleProductsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const NewProductButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const SaleProductsTable = styled.div`

  display: flex;
  flex-direction: column;

`
export const SaleSubtotalContainer = styled.div`

  display: flex;
  padding: 0.5rem 0;
  background: ${props => props.theme["slate-800"]};
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  
  span {
    font-size: 1rem;
    font-weight: 600;
    color: ${props => props.theme["slate-50"]};
    margin-left: calc(85%);
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 2.4rem;
`;

export const MultipleInputContainer = styled.div`
  display: flex;
  width: 100%; 
  gap:8rem;
  flex-direction: row;
  justify-content: space-between;
`;
