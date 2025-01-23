import styled from "styled-components";

export const HeaderContainer = styled.aside`
  width: 100%;
  height: 12%;
  min-height: 4rem;
  max-height: 8rem;
  background-color: ${(props) => props.theme["slate-50"]};
  color: ${(props) => props.theme["slate-800"]};
  display: flex;
  align-items: center;
  justify-content: right;
  padding-right: 2rem; 

`;

export const HeaderTime = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    img {
      width: 1rem;
      height: 1rem;
    }

    h2 {
      font-size: 1.2rem;
      padding-left: 0.7rem;
    }
  }

  span {
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

