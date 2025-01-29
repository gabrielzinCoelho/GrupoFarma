import { Product } from "./reducer";

export enum ProductViewActionTypes {
  NEW_PRODUCTS_VIEW = 'NEW_PRODUCTS_VIEW',
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

export function removeProductAction(productId : string){
  return {
    type: ProductViewActionTypes.REMOVE_PRODUCT,
    payload: {
      productId
    }
  }
}
