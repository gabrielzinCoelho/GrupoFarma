import { FormSelect } from "../../../../components/FormSelect";
import { ProductItemSaleDialog } from "./components/ProductItemSaleDialog";
import { SaleContainer, ContainerFormSelect, SaleProductsDialogContainer } from "./styles";

export function ProductsSaleDialog() {

  return (
    <SaleContainer>
      <ContainerFormSelect>
        <FormSelect
          onChange={(newValue: string) => {console.log(newValue)}}
          options={[]}
          placeholder='Todos os produtos'
          value=''
        />
      </ContainerFormSelect>
      <SaleProductsDialogContainer>
        <ProductItemSaleDialog />
        <ProductItemSaleDialog />
        <ProductItemSaleDialog />
        <ProductItemSaleDialog />
        <ProductItemSaleDialog />
        <ProductItemSaleDialog />
        <ProductItemSaleDialog />
      </SaleProductsDialogContainer>
    </SaleContainer>
  )

}