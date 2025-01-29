
import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const BackNavigationContainer = styled.div`

  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: ${props => props.theme["slate-800"]};
    cursor: pointer;

    &:hover {
      color: ${props => props.theme["slate-700"]};
      transition: color 0.2s;
    }

  }

`

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
`;

export const PageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  gap: 2rem;
  margin-bottom: 2rem;
  height: 100%;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:100%;
  gap: 2rem;
  flex: 1;
`;

export const MultipleInputContainer = styled.div`
  display: flex;
  width: 100%; 
  gap:8rem;
  flex-direction: row;
  justify-content: space-between;
  height: max-content;
`;


export const InfoBoxContent = styled.div`
  height: 8rem;
  width: 100%;

  span {
    font-size: .9rem;
    color: ${props => props.theme["slate-800"]};
    font-weight: 500;
  }

`

export const InfoBoxContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 1fr 2fr;
  gap: 2rem;
  min-height: 32rem;
  max-height: 48rem;
  flex: 1;
`