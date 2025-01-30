import styled from "styled-components"

export const PaymentContainer = styled.div`

  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
`

export const ProductsInfoContainer = styled.div`

  width: 100%;
  flex: 1;
  min-height: 8rem;
  max-height: 12rem;
  background: ${props => props.theme['slate-300']};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  overflow-y: auto;

`

export const SaleInfoContainer = styled.div `

  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

`

export const PaymentInfoContainer = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

`

export const DeliveryFeeContainer = styled.div`

  display: flex;
  flex-direction: column;

  span {
    color: ${props => props.theme["slate-800"]};
    font-size: 1.25rem;
    font-weight: 400;
  }

`

export const DeliveryFeeDataContainer = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DeliveryFeeRadioContainer = styled.div`

  display: flex;
  gap: 2rem;

`

export const DeliveryFeeOption = styled.div`

  display: flex;
  align-items: center;
  gap: 1rem;

  label {
    color: ${props => props.theme["slate-800"]};
    font-size: 1rem;
    font-weight: 400;
  }

  input {

  }

`

export const DeliveryFeeInput = styled.input`

  border: 0;
    box-shadow: none;
    outline: 0;

    &:focus{
      border: 0;
      box-shadow: none;
      outline: 0;
    }

`

export const ButtonSubmitContainer = styled.div`

  width: 100%;
  display: flex;
  justify-content: flex-end;

`