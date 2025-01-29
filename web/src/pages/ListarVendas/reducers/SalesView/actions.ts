import { Sale } from "./reducer";

export enum SaleViewActionTypes {
  NEW_SALES_VIEW = 'NEW_SALES_VIEW',
  REMOVE_SALE = 'REMOVE_SALE',
}

export function newSalesViewAction(sales: Sale[], salesAmount: number, page: number){
  return {
    type: SaleViewActionTypes.NEW_SALES_VIEW,
    payload: {
      sales,
      salesAmount,
      page
    }
  }
}

export function removeSaleAction(saleId : string){
  return {
    type: SaleViewActionTypes.REMOVE_SALE,
    payload: {
      saleId
    }
  }
}
