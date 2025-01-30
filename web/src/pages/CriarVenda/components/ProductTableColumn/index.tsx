import { ProductTableColumnContainer, ProductImageContainer } from "./styles";
import defaultProductImage from '../../../../assets/default-product.jpeg'
import { XCircle } from "phosphor-react";

interface ProductTableColumnProps {
  productId: string,
  productName: string,
  handleProductRemoval: (productId : string) => void
}

export function ProductTableColumn({productName, productId, handleProductRemoval} : ProductTableColumnProps){

  return (
    <ProductTableColumnContainer>
      <ProductImageContainer>
        <XCircle
          onClick={() => handleProductRemoval(productId)}
        />
        <img src={defaultProductImage} />
      </ProductImageContainer>
      <span>{productName}</span>
    </ProductTableColumnContainer>
)

}