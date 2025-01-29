import { SaleViewActionTypes } from "./actions"

export interface Sale {
  id: string
  datetime: Date
  total_price: number
  client_id: string
  client: {
    id: string
    name: string
  }
  salesperson_id: string
  salesperson: {
    id: string
    name: string
  }
}

export interface SalesViewState {

  sales: Sale[],

  pageSize: number
  currentPage: number
  pagesAmount: number,

  firstIndexResult: number
  lastIndexResult: number
  salesAmount: number

}

//eslint-disable-next-line
export function SalesViewReducer(state: SalesViewState, action: any) {

  switch (action.type) {

    case SaleViewActionTypes.NEW_SALES_VIEW: {

      const {sales, salesAmount, page} = action.payload

      const firstIndexResult = (page - 1) * state.pageSize + 1

      return {
        sales,
        pageSize: state.pageSize,
        currentPage: page,
        pagesAmount: Math.ceil(salesAmount / state.pageSize),
        firstIndexResult,
        lastIndexResult: firstIndexResult + sales.length - 1,
        salesAmount,
      } as SalesViewState
    }

    default:
      return state

  }

}