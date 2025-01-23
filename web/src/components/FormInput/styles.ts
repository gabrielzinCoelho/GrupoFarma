import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.25rem;

  span {
    font-weight: 600;
    font-size: 0.95rem;
    color: ${(props) => props.theme["slate-950"]};
  }
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start; /* Alinhamento superior */
  padding: 0.5rem 1rem;
  border: 1px solid ${(props) => props.theme["slate-500"]};
  border-radius: 12px;
  background-color: ${(props) => props.theme["slate-50"]};

  &:focus-within {
    border: 1px solid ${(props) => props.theme["slate-950"]};
  }

  textarea {
    flex: 1;
    min-width: 0;
    border: 0;
    font-weight: 300;
    font-size: 1rem;
    color: ${(props) => props.theme["slate-500"]};
    resize: none; /* Evita redimensionamento manual */
    height: auto;
    text-align: left; /* Alinhamento horizontal à esquerda */
    padding: 0; /* Remove padding interno no input */
    line-height: 1.5; /* Define altura da linha para múltiplas linhas */
    overflow: hidden; /* Evita scroll desnecessário */
    align-self: stretch; /* Garante que o input ocupe todo o espaço vertical */

    &:focus {
      border: 0;
      outline: none;
      box-shadow: none;
    }

    &::placeholder {
      color: ${(props) => props.theme["slate-700"]};
    }

    .placeholder {
      text-align: left;
    }
  }
`;