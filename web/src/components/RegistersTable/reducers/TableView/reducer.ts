import { TableRegisterColumn } from "../.."
import { TableViewActions } from "./actions"

function orderRegisters(
  tableRegisters: TableViewState['tableRegisters'], indexColumn: number, order: OrderTypes, orderCallback: (a: string, b: string) => number
): TableViewState['tableRegisters'] {

  const sortFactor = order === OrderTypes.ASC ? 1 : -1

  tableRegisters.sort((a, b) => {
    return orderCallback(a[indexColumn].value!, b[indexColumn].value!) * sortFactor
  })

  return tableRegisters
}

export enum OrderTypes {
  ASC = 'ASC',
  DESC = 'DESC'
}

export interface TableOrder {
  indexColumn: number
  order: OrderTypes.ASC | OrderTypes.DESC
  orderCallback: (a: string, b: string) => number
}

export interface TableViewState {
  tableRegisters: TableRegisterColumn[][],
  tableOrder?: TableOrder
}

//eslint-disable-next-line
export function TableViewReducer(state: TableViewState, action: any) {

  switch (action.type) {

    case TableViewActions.NEW_TABLE_REGISTERS: {

      const { registers } = action.payload

      if (state.tableOrder)
        return {
          tableRegisters: orderRegisters(
            registers,
            state.tableOrder.indexColumn,
            state.tableOrder.order,
            state.tableOrder.orderCallback
          ),
          tableOrder: state.tableOrder
        } as TableViewState


      return {
        tableRegisters: registers,
      } as TableViewState

    }

    case TableViewActions.NEW_TABLE_ORDER: {

      const { indexColumn, order, orderCallback } = action.payload

      return {
        tableRegisters: orderRegisters(
          state.tableRegisters,
          indexColumn,
          order,
          orderCallback
        ),
        tableOrder: {
          indexColumn,
          order,
          orderCallback
        }
      } as TableViewState

    }

    default:
      return state

  }

}