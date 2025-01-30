import { ReactNode, useEffect, useReducer } from "react"
import { PaginationContainer, Table, TableBody, TableContainer, TableHeader, TableHeaderItem, TableRow, TableRowItem } from "./styles"
import { TableResultsAmount } from "./components/TableResultsAmount"
import { TableCurrentPage } from "./components/TableCurrentPage"
import { OrderColumnButton } from "./components/OrderColumnButton"
import { OrderTypes, TableViewReducer, TableViewState } from "./reducers/TableView/reducer"
import { newTableOrderAction, newTableRegistersAction } from "./reducers/TableView/actions"

const defaultOrderCallback = (a : string, b: string) => (a.localeCompare(b))

interface TablePagination{
  currentPage: number
  pageSize: number
  resultsAmount: number
  firstIndex: number
  lastIndex: number
  pagesAmount: number
  handleNextPage: () => void
  handlePreviousPage: () => void
}

export interface TableColumn {
  label: string
  hasOrder: boolean
  percentWidth: number
  orderCallback?: (a : string, b : string) => number
}

export interface TableRegisterColumn {
  value?: string,
  element: ReactNode
}

interface RegistersTableProps {
  registers: TableRegisterColumn[][]
  columns: TableColumn[]
  filters?: ReactNode
  pagination?: TablePagination
  numRows: number
  borderBottomRadius?: boolean
  rowHeightInRem?: number
  
}

export function RegistersTable({
  registers, 
  columns, 
  filters, 
  pagination, 
  numRows,
  borderBottomRadius = true, 
  rowHeightInRem = 3
  } : RegistersTableProps){

  const [tableViewState, dispatch] = useReducer(
    TableViewReducer,
    {
      tableRegisters: [],
    } as TableViewState
  )

  useEffect(() => {
   dispatch(
    newTableRegistersAction(registers)
   )
  }, [registers])

  return (
    <TableContainer>
      {
        filters &&
        filters
      }
      <Table
        $borderBottomRadius={borderBottomRadius}
      >
        <TableHeader>
          <tr>
            {
              columns.map(({label, hasOrder, percentWidth, orderCallback}, index) => (
                <TableHeaderItem $percentWidth={percentWidth} key={label}>
                  <span>{label}</span>
                  {
                    hasOrder &&
                    <OrderColumnButton 
                      orderAsc={() => {
                        dispatch(
                          newTableOrderAction(
                            index,
                            OrderTypes.ASC,
                            orderCallback ?? defaultOrderCallback
                          )
                        )
                      }}
                      orderDesc={() => {
                        dispatch(
                          newTableOrderAction(
                            index,
                            OrderTypes.DESC,
                            orderCallback ?? defaultOrderCallback
                          )
                        )
                      }}
                      isOrderAsc={tableViewState.tableOrder ? tableViewState.tableOrder.indexColumn === index && tableViewState.tableOrder.order === OrderTypes.ASC : false}
                      isOrderDesc={tableViewState.tableOrder ? tableViewState.tableOrder.indexColumn === index && tableViewState.tableOrder.order === OrderTypes.DESC : false}
                    />
                  }
                </TableHeaderItem>
              ))
            }
          </tr>
        </TableHeader>
        <TableBody 
          $numRows={numRows}
          $rowHeightInRem={rowHeightInRem}
        >
          {
            tableViewState.tableRegisters && 
            tableViewState.tableRegisters.length > 0 &&
            tableViewState.tableRegisters.map((register, index) => (
              <TableRow key={index}>
                {
                  register.map(({element}, index) => (
                    <TableRowItem 
                      $percentWidth={columns[index].percentWidth} 
                      key={index}
                    >
                      {element}
                    </TableRowItem>
                  ))
                }
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      {
        pagination &&
        (
          <PaginationContainer>
            <TableResultsAmount
              firstIndex={pagination.firstIndex}
              lastIndex={pagination.lastIndex}
              resultsAmount={pagination.resultsAmount}
            />
            <TableCurrentPage
              page={pagination.currentPage}
              pagesAmount={pagination.pagesAmount}
              handleNextPage={pagination.handleNextPage}
              handlePreviousPage={pagination.handlePreviousPage}
            />
          </PaginationContainer>
        )
      }
    </TableContainer>
  )

}