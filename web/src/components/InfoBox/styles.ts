import styled from "styled-components";

export const Box = styled.aside`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 8px;
  background-color: ${(props) => props.theme["slate-50"]};
  border: 1px solid ${(props) => props.theme["slate-500"]};
`;

export const LabelContainer = styled.aside`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  h2 {
    font-size: 1rem;
    margin: 0;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme["slate-500"]};
`;

export const InfoContainer = styled.aside`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
