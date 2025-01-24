import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.25rem;

  span {
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme["slate-950"]};
  }
`;

export const InputField = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid ${(props) => props.theme["slate-500"]};
  border-radius: 12px;
  background-color: ${(props) => props.theme["slate-50"]};

  &:focus-within {
    border: 1px solid ${(props) => props.theme["slate-950"]};
  }

  textarea {
    width: 100%;
    min-width: 0;
    border: 0;
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme["slate-950"]};
    resize: none; /* Evita redimensionamento manual */
    height: auto;
    overflow: hidden; /* Evita scroll desnecessário */
    align-self: stretch; /* Garante que o input ocupe todo o espaço vertical */

    &:focus {
      border: 0;
      outline: none;
      box-shadow: none;
    }

    &::placeholder {
      color: ${(props) => props.theme["slate-700"]};
      font-weight: 300;
    }

  }
`;