import { ReactNode } from "react"
import { PaginationContainer, Table, TableBody, TableContainer, TableHeader, TableHeaderItem, TableRow, TableRowItem } from "./styles"
import { TableResultsAmount } from "./components/TableResultsAmount"
import { TableCurrentPage } from "./components/TableCurrentPage"
import { OrderColumnButton } from "./components/OrderColumnButton"

interface TablePagination{
  currentPage: number
  pageSize: number
  resultsAmount: number
}

interface TableColumn {
  label: string
  hasOrder: boolean
  percentWidth: number
}

interface TableRegisterColumn {
  value?: string,
  element: ReactNode
}

interface RegistersTableProps {
  registers: TableRegisterColumn[][]
  columns: TableColumn[]
  filters?: ReactNode
  pagination?: TablePagination
}

export function RegistersTable({registers, columns, filters, pagination} : RegistersTableProps){

  const firstIndexPagination = pagination ? (pagination.pageSize * (pagination.currentPage - 1) + 1) : undefined
  const amountOfRegisters = registers.length

  return (
    <TableContainer>
      {
        filters &&
        filters
      }
      <Table>
        <TableHeader>
          <tr>
            {
              columns.map(({label, hasOrder, percentWidth}) => (
                <TableHeaderItem $percentWidth={percentWidth} key={label}>
                  <span>{label}</span>
                  {
                    hasOrder &&
                    <OrderColumnButton 
                      orderAsc={() => {}}
                      orderDesc={() => {}}
                      isOrderAsc={false}
                      isOrderDesc={true}
                    />
                  }
                </TableHeaderItem>
              ))
            }
          </tr>
        </TableHeader>
        <TableBody $amountOfRegisters={amountOfRegisters}>
          {
            registers.length > 0 &&
            registers.map((register, index) => (
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
              firstIndex={firstIndexPagination!}
              lastIndex={firstIndexPagination! + pagination.pageSize - 1}
              resultsAmount={pagination.resultsAmount}
            />
            <TableCurrentPage
              page={pagination.currentPage}
            />
          </PaginationContainer>
        )
      }
    </TableContainer>
  )

}