
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
  min-height: 32rem;  
 
`;


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
  margin-top:1rem;
  margin-bottom:1rem;
  gap:.8rem;

  .longText {
    font-size: .9rem;
  }
`;

export const MultipleInputContainer = styled.div`
  display: flex;
  width: 100%; 
  gap:10%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
