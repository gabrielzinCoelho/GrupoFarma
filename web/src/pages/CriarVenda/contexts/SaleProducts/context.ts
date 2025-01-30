import { createContext } from "react"
import { Product, ShopCartProduct } from "."

interface SaleProductsContextType {
  availableProducts: Product[]
  shopCartProducts: ShopCartProduct[]
  addProductToShopCart: (productId : Product['id']) => void
  removeProductFromShopCart: (productId : Product['id']) => void
  updateProductInShopCart: (newProduct : ShopCartProduct) => void
}

export const SaleProductsContext = createContext({} as SaleProductsContextType)