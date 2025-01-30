import styled from "styled-components";

export const SaleInfoContainer = styled.div`

  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme['slate-800']};

  span {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${props => props.theme['slate-800']};
    padding-bottom: 0.5rem;
  }

`