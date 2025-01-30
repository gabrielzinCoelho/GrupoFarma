import { useContext } from "react";
import { FormSelect } from "../../../../components/FormSelect";
import { SaleProductsContext } from "../../contexts/SaleProducts/context";
import { ProductItemSaleDialog } from "./components/ProductItemSaleDialog";
import { SaleContainer, ContainerFormSelect, SaleProductsDialogContainer } from "./styles";

export function ProductsSaleDialog() {

  const {
      addProductToShopCart,
      availableProducts,
    } = useContext(SaleProductsContext)

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
        {
          availableProducts.map(
            product => (
              <ProductItemSaleDialog
                handleClick={addProductToShopCart}
                productId={product.id}
                productName={product.name}
                productPrice={product.price}
              />
            )
          )
        }
      </SaleProductsDialogContainer>
    </SaleContainer>
  )

}