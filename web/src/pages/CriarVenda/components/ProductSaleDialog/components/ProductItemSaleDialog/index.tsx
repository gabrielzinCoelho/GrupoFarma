import { ProductDataContainer, ProductImageContainer, ProductItemSaleDialogContainer } from "./styles";
import defaultProductImage from '../../../../../../assets/default-product.jpeg'
import { priceFormatter } from "../../../../../../utils/formatters";

interface ProductItemSaleDialogProps {
  productId: string
  productName: string
  productPrice: number
  handleClick: (productId: string) => void
}

export function ProductItemSaleDialog({productId, productName, productPrice, handleClick} : ProductItemSaleDialogProps){

  return (
    <ProductItemSaleDialogContainer
      onClick={() => (handleClick(productId))}
    >
      <ProductImageContainer>
        <img src ={defaultProductImage} />
      </ProductImageContainer>
      <ProductDataContainer>
        <span>{productName}</span>
        <span>{priceFormatter.format(productPrice)}</span>
      </ProductDataContainer>
    </ProductItemSaleDialogContainer>
  )

}