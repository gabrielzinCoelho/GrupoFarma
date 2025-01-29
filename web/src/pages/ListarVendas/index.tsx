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
import { SalesViewReducer, SalesViewState } from "./reducers/SalesView/reducer";
import { newSalesViewAction } from "./reducers/SalesView/actions";

const PAGE_SIZE = 10

interface Sale {
  id: string
  datetime: Date
  total_price: number
  client_id: string
  client: {
    id: string
    name: string
  }
  salesperson_id: string
  salesperson: {
    id: string
    name: string
  }
}

export function ListarVendas() {

  const navigate = useNavigate()
  const {token : userToken} = useAppSelector(store => store.auth)
  
  const fetchSales = useCallback(
    async (page: number) : Promise<{sales: Sale[], salesAmount: number}>  => {

      const fetchSalesResponse = await api.get('/sales', {
        params: {
          page,
        },
        headers: {
          'Authorization': `Bearer ${userToken}`
        }
      })
    
      if (fetchSalesResponse.status !== 200) throw new Error("Fetch Sales Failed.")
    
      return {
        sales: fetchSalesResponse.data.sales,
        salesAmount: fetchSalesResponse.data.total
      }
    
    },
    [userToken]
  )

  

  const [salesViewState, dispatch] = useReducer(
    SalesViewReducer,
    {
      sales: [],
      pageSize: PAGE_SIZE,
      currentPage: 0,
      pagesAmount: 0,
      firstIndexResult: 0,
      lastIndexResult: 0,
      salesAmount: 0,
    } as SalesViewState
  )

  useEffect(() => {

    async function initializeSalesViewState(){

      const initialPage = 1

      const {sales, salesAmount} = await fetchSales(initialPage)
      dispatch(
        newSalesViewAction(sales, salesAmount, initialPage)
      )
    }

    initializeSalesViewState()

  }, [fetchSales])

  const handleChangePage = async (page: number) => {
    const {sales, salesAmount} = await fetchSales(page)
      dispatch(
        newSalesViewAction(sales, salesAmount, page)
      )
  }

  return (
    <ContentContainer>
      <PageHeaderContainer>
        <PageTitle
          titles={[
            "Vendas",
            "Lista de Vendas",
          ]}
          description="Lista de vendas registradas"
        />
        <PrimaryButtonWithIcon 
          label="Nova Venda"
          Icon={Plus}
          onClick={() => navigate('/sales/new')}
        />
      </PageHeaderContainer>
      <PageContentContainer>
          <RegistersTable
            numRows={salesViewState.pageSize}
            pagination={{
              pageSize: salesViewState.pageSize,
              currentPage: salesViewState.currentPage,
              resultsAmount: salesViewState.salesAmount,
              firstIndex: salesViewState.firstIndexResult,
              lastIndex: salesViewState.lastIndexResult,
              pagesAmount: salesViewState.pagesAmount,
              handleNextPage: () => handleChangePage(salesViewState.currentPage + 1),
              handlePreviousPage: () => handleChangePage(salesViewState.currentPage - 1)
            }}
            columns={[
              {
                label: 'Vendedor',
                hasOrder: true,
                percentWidth: 25
              },
              {
                label: 'Cliente',
                hasOrder: true,
                percentWidth: 20
              },
              {
                label: 'Data',
                hasOrder: true,
                percentWidth: 18
              },
              {
                label: 'Valor Total',
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
              salesViewState.sales.length > 0 ?
                salesViewState.sales.map(
                  (sale: Sale) => {
                    const date = new Date(sale.datetime);
                    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
                    const formattedValue = `R$ ${(Number(sale.total_price).toFixed(2))}`;
                    return [
                      {
                        value: sale.salesperson.name,
                        element: <ColumnText label={sale.salesperson.name} />
                      },
                      {
                        value: sale.client.name,
                        element: <ColumnText label={sale.client.name} />
                      },
                      {
                        value: formattedDate,
                        element: <ColumnText label={formattedDate} />
                      },
                      {
                        value: formattedValue,
                        element: <ColumnText label={formattedValue} />
                      },
                      {
                        value: '',
                        element: <ColumnActions onRemove={() => {}} showMore={() => navigate('/sales/view')} />
                      }
                    ];
                  }
                ) : []
            }
          />
      </PageContentContainer>

    </ContentContainer>
  );
}