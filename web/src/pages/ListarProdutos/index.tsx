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
import { newProductsViewAction } from "./reducers/ProductsView/actions";

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

  useEffect(() => {

    async function initializeProductsViewState(){

      const initialPage = 1

      const {products, productsAmount} = await fetchProducts(initialPage)
      dispatch(
        newProductsViewAction(products, productsAmount, initialPage)
      )
    }

    initializeProductsViewState()

  }, [fetchProducts])

  const handleChangePage = async (page: number) => {
    const {products, productsAmount} = await fetchProducts(page)
      dispatch(
        newProductsViewAction(products, productsAmount, page)
      )
  }

  return (
    <ContentContainer>
      <PageHeaderContainer>
        <PageTitle
          titles={[
            "Produtos",
            "Lista de Produtos",
            "Antibiótico",
          ]}
          description="Gerencie um produto."
        />
        <PrimaryButtonWithIcon 
          label="Novo Produto"
          Icon={Plus}
          onClick={() => navigate('/products/new')}
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
              handleNextPage: () => handleChangePage(productsViewState.currentPage + 1),
              handlePreviousPage: () => handleChangePage(productsViewState.currentPage - 1)
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
                        element: <ColumnActions onRemove={() => {}} showMore={() => navigate('/products/view')} />
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