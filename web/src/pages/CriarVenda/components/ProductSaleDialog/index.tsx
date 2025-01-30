import { FormSelect } from "../../../../components/FormSelect";
import { SaleContainer, ContainerFormSelect, SaleProductsDialogContainer } from "./styles";

export function ProductsSaleDialog() {

  return (
    <SaleContainer>
      <ContainerFormSelect>
        <FormSelect
          onChange={(newValue: string) => { }}
          options={[]}
          placeholder='Todos os produtos'
          value=''
        />
      </ContainerFormSelect>
      <SaleProductsDialogContainer>
        <ProductsSaleDialog />
        <ProductsSaleDialog />
        <ProductsSaleDialog />
        <ProductsSaleDialog />
        <ProductsSaleDialog />
        <ProductsSaleDialog />
        <ProductsSaleDialog />
      </SaleProductsDialogContainer>
    </SaleContainer>
  )

}