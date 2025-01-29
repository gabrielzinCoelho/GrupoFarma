import { Sale } from "./reducer";

export enum SaleViewActionTypes {
  NEW_SALES_VIEW = 'NEW_SALES_VIEW',
  UPDATE_PAGE_VIEW = 'UPDATE_PAGE_VIEW',
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