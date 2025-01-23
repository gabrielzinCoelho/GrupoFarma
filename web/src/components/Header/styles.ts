import styled from "styled-components";

export const HeaderContainer = styled.aside`
  width: 100%;
  
  height: 12%;
  max-height: 96px;
  background-color: ${(props) => props.theme["slate-50"]};
  color: ${(props) => props.theme["slate-800"]};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  padding: 0;

`;

export const HeaderTime = styled.aside`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-right: 1.3rem; 

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }

  img {
    object-fit: contain;
    max-width: 14px;
    max-height: 14px;
    min-width: 8px;
    min-height: 8px;
  }

  h2 {
    font-size: 1.2rem;
    padding-left: 0.7rem;
  }

  span {
    font-size: 0.9rem;
    font-weight: 500;
    margin-top: 0.2rem;
  }
`;

