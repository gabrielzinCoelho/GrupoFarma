import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;


export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
`;

export const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:left;
  width: 100%;
  height: 100vh;
  margin-top: 1.6rem;
  margin-bottom: 1.2rem;
  margin-left: 2.4rem;
  margin-right: 2.4rem;
  overflow: auto;
`;