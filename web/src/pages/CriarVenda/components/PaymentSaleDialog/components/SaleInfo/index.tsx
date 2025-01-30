import { SaleInfoContainer } from "./styles";

interface SaleInfoProps {
  label: string
  value: string
}

export function SaleInfo({label, value} : SaleInfoProps){
  return (
    <SaleInfoContainer>
      <span>{label}</span>
      <span>{value}</span>
    </SaleInfoContainer>
  )
}