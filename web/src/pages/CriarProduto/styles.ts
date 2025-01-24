
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
`;

export const PageContentContainer = styled.div`

  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  gap: 2rem;
  margin-bottom: 2rem;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 2.4rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  gap: 2rem;
`;

export const MultipleInputContainer = styled.div`
  display: flex;
  width: 100%; 
  gap:8rem;
  flex-direction: row;
  justify-content: space-between;
`;
