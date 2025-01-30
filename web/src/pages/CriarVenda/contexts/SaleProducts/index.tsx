import { ReactNode, useEffect, useState } from "react";
import { SaleProductsContext } from "./context";
import { api } from "../../../../lib/axios";
import { useAppSelector } from "../../../../store";

interface SaleProductsContextProviderProps {
  children: ReactNode
}

export interface Product {
  id: string
  name: string
  price: number
}

export interface ShopCartProduct extends Product {
  amount: number
}

export function SaleProductsContextProvider({ children }: SaleProductsContextProviderProps) {

  const {token : userToken} = useAppSelector(store => store.auth)
  const [availableProducts, setAvailableProducts] = useState<Product[]>([])
  const [shopCartProducts, setShopCartProducts] = useState<ShopCartProduct[]>([])

  useEffect(() => {

    async function initializeAvailableProducts(){

      const fetchProductsResponse = await api.get('/products', {
        headers: {
          'Authorization': `Bearer ${userToken}`
        }
      })
    
      if (fetchProductsResponse.status !== 200) throw new Error("Fetch Products Failed.")

      setAvailableProducts(
        //eslint-disable-next-line
        fetchProductsResponse.data.products.map((product : any) => ({
          id: product.id,
          name: product.name,
          price: product.price
        }))
      )

    }

    initializeAvailableProducts()

  }, [userToken])

  const addProductToShopCart = (productId: Product['id']) => {

    const alreadyInCartShop = shopCartProducts.some(product => product.id === productId)

    if (!alreadyInCartShop) {

      setShopCartProducts(shopCartProducts => {

        const [productToAdd] = availableProducts.filter(product => product.id === productId)

        return (
          [
            ...shopCartProducts,
            {
              ...productToAdd,
              amount: 1
            }
          ]
        )
      })

    }

  }

  const removeProductFromShopCart = (productId: Product['id']) => {
    setShopCartProducts(shopCartProducts => (shopCartProducts.filter(product => product.id !== productId)))
  }

  const updateProductInShopCart = (newProduct: ShopCartProduct) => {

    setShopCartProducts(

      shopCartProducts => (
        shopCartProducts.map(
          product => (
            product.id === newProduct.id ?
              newProduct :
              product
          )
        )
      )

    )

  }


  return (
    <SaleProductsContext.Provider
      value={{
        availableProducts,
        shopCartProducts,
        addProductToShopCart,
        removeProductFromShopCart,
        updateProductInShopCart
      }}
    >
      {children}
    </SaleProductsContext.Provider>
  )

}