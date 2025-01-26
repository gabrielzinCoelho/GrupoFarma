import { TableResultsAmountContainer } from "./styles"

interface TableResultsAmountProps {
  firstIndex: number
  lastIndex: number
  resultsAmount: number
}

export function TableResultsAmount({firstIndex, lastIndex, resultsAmount} : TableResultsAmountProps){
  return (
    <TableResultsAmountContainer>
      <span>Monstrando {firstIndex} - {lastIndex} de {resultsAmount}</span>
    </TableResultsAmountContainer>
  )
}