import { Plus } from "phosphor-react";
import { PageTitle } from "../../components/PageTitle";
import { ContentContainer, PageHeaderContainer, PageContentContainer } from "./styles";
import { PrimaryButtonWithIcon } from "../../components/PrimaryButtonWithIcon";
import { RegistersTable } from "../../components/RegistersTable";
import { ColumnText } from "../../components/RegistersTable/components/ColumnText";
import { ColumnActions } from "../../components/RegistersTable/components/ColumnActions";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useReducer } from "react";
import { api } from "../../lib/axios";
import { useAppSelector } from "../../store";
import { ProductsViewReducer, ProductsViewState } from "./reducers/ProductsView/reducer";
import { newProductsViewAction, removeProductAction } from "./reducers/ProductsView/actions";

const PAGE_SIZE = 10

interface Product {
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

export function ListarProdutos() {

  const navigate = useNavigate()
  const {token : userToken} = useAppSelector(store => store.auth)
  
  const fetchProducts = useCallback(
    async (page: number) : Promise<{products: Product[], productsAmount: number}>  => {

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
        productsAmount: fetchProductsResponse.data.total
      }
    
    },
    [userToken]
  )

  

  const [productsViewState, dispatch] = useReducer(
    ProductsViewReducer,
    {
      products: [],
      pageSize: PAGE_SIZE,
      currentPage: 0,
      pagesAmount: 0,
      firstIndexResult: 0,
      lastIndexResult: 0,
      productsAmount: 0,
    } as ProductsViewState
  )

  const updateProductsViewState = useCallback(
    async (page : number) => {

      const {products, productsAmount} = await fetchProducts(page)
      dispatch(
        newProductsViewAction(products, productsAmount, page)
      )
    }
  , [fetchProducts])

  useEffect(() => {

    updateProductsViewState(1)

  }, [updateProductsViewState])

  const handleProductRemoval = async (product : string) => {
   
    const productRemoved = await api.delete(`products/${product}`, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })

    if(productRemoved.status !== 200)
      throw new Error('Product Removal Failed.')
    
    if(productsViewState.products.length === 1){

      let nextPage = productsViewState.currentPage < productsViewState.pagesAmount ?
        productsViewState.currentPage :
        productsViewState.currentPage - 1
      
      if(nextPage < 1)
          nextPage = 1

      updateProductsViewState(nextPage)
        
    }
    else
      dispatch(
        removeProductAction(product)
      )
  }

  return (
    <ContentContainer>
      <PageHeaderContainer>
        <PageTitle
          titles={[
            "Produtos",
            "Lista de Produtos",
          ]}
          description="Lista de Produtos Registrados."
        />
        <PrimaryButtonWithIcon 
          label="Novo Produto"
          Icon={Plus}
          onClick={() => navigate('/products/new-product')}
        />
      </PageHeaderContainer>
      <PageContentContainer>
          <RegistersTable
            numRows={productsViewState.pageSize}
            pagination={{
              pageSize: productsViewState.pageSize,
              currentPage: productsViewState.currentPage,
              resultsAmount: productsViewState.productsAmount,
              firstIndex: productsViewState.firstIndexResult,
              lastIndex: productsViewState.lastIndexResult,
              pagesAmount: productsViewState.pagesAmount,
              handleNextPage: () => updateProductsViewState(productsViewState.currentPage + 1),
              handlePreviousPage: () => updateProductsViewState(productsViewState.currentPage - 1)
            }}
            columns={[
              {
                label: 'Nome do Produto',
                hasOrder: true,
                percentWidth: 35
              },
              {
                label: 'Código',
                hasOrder: true,
                percentWidth: 15
              },
              {
                label: 'Categoria',
                hasOrder: true,
                percentWidth: 20
              },
              {
                label: 'Ações',
                hasOrder: false,
                percentWidth: 30
              }
            ]}
            registers={
              productsViewState.products.length > 0 ?
                productsViewState.products.map(
                  product => (
                    [
                      {
                        value: product.name,
                        element: <ColumnText label={product.name} />
                      },
                      {
                        value: product.anvisa_code,
                        element: <ColumnText label={product.anvisa_code} />
                      },
                      {
                        value: product.category.name,
                        element: <ColumnText label={product.category.name} />
                      },
                      {
                        value: '',
                        element: <ColumnActions onRemove={() => (handleProductRemoval(product.id))} showMore={() => navigate(`/products/${product.id}`)} />
                      }
                    ]
                  )
                ) : []
            }
          />
      </PageContentContainer>

    </ContentContainer>
  );
}