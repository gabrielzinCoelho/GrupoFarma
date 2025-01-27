import { Trash } from "phosphor-react"
import { ColumnActionsContainer, ActionContainer, ActionTrigger } from "./styles"

interface ColumnActionsProps {
  onRemove: () => void
  showMore: () => void
}

export function ColumnActions({onRemove, showMore} : ColumnActionsProps){
  return (
    <ColumnActionsContainer>
      <ActionContainer>
        <ActionTrigger 
          $color="slate-800"
          onClick={showMore}
        >
          <span>Ver Detalhes</span>
        </ActionTrigger>
      </ActionContainer>
      <ActionContainer>
        <ActionTrigger 
          $color="red-600"
          onClick={onRemove}
        >
          <Trash />
          <span>Remover</span>
        </ActionTrigger>
      </ActionContainer>
    </ColumnActionsContainer>
  )
}