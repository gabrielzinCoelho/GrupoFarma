import { TableRegisterColumn } from "../..";
import { TableOrder } from "./reducer";

export enum TableViewActions {
  NEW_TABLE_REGISTERS = 'NEW_TABLE_REGISTERS',
  NEW_TABLE_ORDER = 'NEW_TABLE_ORDER'
}

export function newTableRegistersAction(registers : TableRegisterColumn[][]){

  return {
    type: TableViewActions.NEW_TABLE_REGISTERS,
    payload: {
      registers,
    }
  }

}

export function newTableOrderAction(indexColumn : TableOrder['indexColumn'], order : TableOrder['order'], orderCallback : TableOrder['orderCallback']){
  return {
    type: TableViewActions.NEW_TABLE_ORDER,
    payload: {
      indexColumn,
      order,
      orderCallback
    }
  }

}