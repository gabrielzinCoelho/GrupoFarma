import { Product } from "./reducer";

export enum ProductViewActionTypes {
  NEW_PRODUCTS_VIEW = 'NEW_PRODUCTS_VIEW',
  UPDATE_PAGE_VIEW = 'UPDATE_PAGE_VIEW',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
}

export function newProductsViewAction(products: Product[], productsAmount: number, page: number){
  return {
    type: ProductViewActionTypes.NEW_PRODUCTS_VIEW,
    payload: {
      products,
      productsAmount,
      page
    }
  }
}