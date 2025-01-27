import { ProductViewActionTypes } from "./actions"

export interface Product {
  name: string
  id: string
  anvisa_code: string
  price: number
  how_to_use: string
  side_effects: string
  category_id: string
  category: {
    id: string
    name: string
  }
}

export interface ProductsViewState {

  products: Product[],

  pageSize: number
  currentPage: number
  pagesAmount: number,

  firstIndexResult: number
  lastIndexResult: number
  productsAmount: number

}

//eslint-disable-next-line
export function ProductsViewReducer(state: ProductsViewState, action: any) {

  switch (action.type) {

    case ProductViewActionTypes.NEW_PRODUCTS_VIEW: {

      const {products, productsAmount, page} = action.payload

      const firstIndexResult = (page - 1) * state.pageSize + 1

      return {
        products,
        pageSize: state.pageSize,
        currentPage: page,
        pagesAmount: Math.ceil(productsAmount / state.pageSize),
        firstIndexResult,
        lastIndexResult: firstIndexResult + products.length - 1,
        productsAmount,
      } as ProductsViewState
    }

    default:
      return state

  }

}