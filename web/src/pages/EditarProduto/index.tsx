import { ContentContainer } from "./styles";
import { PageTitle } from '../../components/PageTitle'
import { ProductForm, ProductFormInputs } from "../../components/ProductForm";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../store";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";

interface Product {
  name: string
  id: string
  anvisa_code: string
  price: number
  how_to_use: string
  side_effects: string
  category_id: string,
  category: {
    id: string,
    name: string
  }
}

export function EditarProduto() {

  const {id : productId} = useParams()
  const {token : userToken} = useAppSelector(store => store.auth)
  const navigate = useNavigate()

  const [product, setProduct] = useState<Product>()

  useEffect(() => {

    const initalizeProduct = async () => {
      const getProductResponse = await api.get(`/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      })
      if(getProductResponse.status !== 200)
        throw new Error('Fetch Product Failed')

      setProduct(getProductResponse.data.product)
    } 

    initalizeProduct()

  }, [userToken, productId])

  const handleFormSubmit = async (data : ProductFormInputs) => {
    
    const updateProductResponse = await api.put(`/products/${productId}`, {
      ...data,
      price: Number(data.price)
    }, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })

    if(updateProductResponse.status !== 200)
      throw new Error('Product Creation Failed')

    navigate(`/products/${productId}`)

  }

  return (
    <ContentContainer>
      <PageTitle
        titles={[
          'Produtos',
          'Lista de Produtos',
          ...(product ? [product.name] : [])
        ]}
        description="Atualize os dados do produto."
      />
      <ProductForm 
        cancelButton={{
          label: 'Cancelar',
          handleClick: () => (navigate(`/products/${productId}`))
        }}
        successButton={{
          label: 'Atualizar Produto',
          handleClick: handleFormSubmit
        }}
        initialState={
          product &&
          ({
            name: product.name,
            anvisaCode: product.anvisa_code,
            howToUse: product.how_to_use,
            price: product.price.toString(),
            sideEffects: product.side_effects,
            category: product.category.id
          })
        }
      />
    </ContentContainer>
  );
}