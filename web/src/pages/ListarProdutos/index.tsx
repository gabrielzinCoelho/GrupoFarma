import { Plus } from "phosphor-react";
import { PageTitle } from "../../components/PageTitle";
import { ContentContainer, PageHeaderContainer, PageContentContainer } from "./styles";
import { PrimaryButtonWithIcon } from "../../components/PrimaryButtonWithIcon";
import { RegistersTable } from "../../components/RegistersTable";
import { ColumnText } from "../../components/RegistersTable/components/ColumnText";
import { ColumnActions } from "../../components/RegistersTable/components/ColumnActions";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { useAppSelector } from "../../store";

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

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {

    async function fetchProducts(){

      const fetchProductsResponse = await api.get('/products', {
        params: {
          page: 1
        },
        headers: {
          'Authorization': `Bearer ${userToken}`
        }
      })

      if (fetchProductsResponse.status !== 200) throw new Error("Fetch Products Failed.")
      
      setProducts(fetchProductsResponse.data.products)

    }

    fetchProducts()

  }, [userToken])
  

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
            pagination={{
              pageSize: 10,
              currentPage: 1,
              resultsAmount: 117
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
              products.length > 0 ?
                products.map(
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