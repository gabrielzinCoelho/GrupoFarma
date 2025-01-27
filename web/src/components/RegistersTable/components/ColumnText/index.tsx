import { ColumnTextContainer } from "./styles"

interface ColumnTextProps {
  label: string
}

export function ColumnText({label} : ColumnTextProps){
  return (
    <ColumnTextContainer>
      <span>{label}</span>
    </ColumnTextContainer>
  )
}