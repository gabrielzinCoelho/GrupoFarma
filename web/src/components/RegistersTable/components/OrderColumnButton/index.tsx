import { CaretDown, CaretUp } from "phosphor-react"
import { OrderColumnContainer, OrderColumn } from "./styles"

interface OrderColumnButtonProps {
  orderAsc: () => void
  orderDesc: () => void
  isOrderAsc: boolean
  isOrderDesc: boolean
}

export function OrderColumnButton({isOrderAsc, isOrderDesc, orderAsc, orderDesc} : OrderColumnButtonProps){

  return (
    <OrderColumnContainer>
      <OrderColumn
        $isActive={isOrderAsc}
        onClick={orderAsc}
      >
        <CaretUp />
      </OrderColumn>
      <OrderColumn
        $isActive={isOrderDesc}
        onClick={orderDesc}
      >
        <CaretDown />
      </OrderColumn>
    </OrderColumnContainer>
  )

}