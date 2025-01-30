import { ProductDataContainer, ProductImageContainer, ProductItemSaleDialogContainer } from "./styles";
import defaultProductImage from '../../../../assets/default-product.jpeg'

export function ProductItemSaleDialog(){

  return (
    <ProductItemSaleDialogContainer>
      <ProductImageContainer>
        <img src ={defaultProductImage} />
      </ProductImageContainer>
      <ProductDataContainer>
        <span>Pasta de Dente Colgate 500g</span>
        <span>R$ 17.90</span>
      </ProductDataContainer>
    </ProductItemSaleDialogContainer>
  )

}