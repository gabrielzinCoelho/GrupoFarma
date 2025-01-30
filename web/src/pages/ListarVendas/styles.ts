import styled from "styled-components";

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const PageHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  height: min-content;
`;

export const PageContentContainer = styled.div`

  min-height: 0;
  flex: 1;
  width: 100%;
`