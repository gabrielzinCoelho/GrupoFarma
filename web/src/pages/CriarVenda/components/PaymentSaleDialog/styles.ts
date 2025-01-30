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
  gap: 1.5rem;

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

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DeliveryFeeRadioContainer = styled.div`

  width: 14rem;
  padding: 0 0.2rem;
`

export const ButtonSubmitContainer = styled.div`

  width: 100%;
  display: flex;
  justify-content: flex-end;

`

export const PaymentMethodContainer = styled.div`

  width: 100%;
  padding: 0 0.2rem;

`

export const CouponContainer = styled.div`

  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

`

export const CouponButtonContainer = styled.div`

  height: 100%;
  width: 10rem;

`