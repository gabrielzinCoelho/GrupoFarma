import { api } from "../../../../lib/axios"
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

interface ProductsViewState {

  products: Product[],
  currentPage: number
  pagesAmount: number,
  firstIndexResult: number
  lastIndexResult: number
  productsAmount: number
}

const PAGE_SIZE = 10

async function fetchProducts(userToken: string, page: number) : Promise<{products: Product[], productsAmount: number}> {

  const fetchProductsResponse = await api.get('/products', {
    params: {
      page,
    },
    headers: {
      'Authorization': `Bearer ${userToken}`
    }
  })

  if (fetchProductsResponse.status !== 200) throw new Error("Fetch Products Failed.")

  return {
    products: fetchProductsResponse.data.products,
    productsAmount: fetchProductsResponse.data.productsAmount
  }

}

//eslint-disable-next-line
export async function ProductsViewReducer(state: ProductsViewState, action: any) {

  switch (action.type) {

    case ProductViewActionTypes.NEW_PRODUCTS_VIEW: {
      
      const userToken = action.payload.userToken

      const {products, productsAmount} = await fetchProducts(userToken, 1)

      return {
        products,
        productsAmount,
        currentPage: 1,
        pagesAmount: Math.ceil(productsAmount / PAGE_SIZE),
        firstIndexResult: 1,
        lastIndexResult: PAGE_SIZE
      }
    }

    default:
      return state

  }

}