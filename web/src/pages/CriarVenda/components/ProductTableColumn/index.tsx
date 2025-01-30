import { ProductTableColumnContainer, ProductImageContainer } from "./styles";
import defaultProductImage from '../../../../assets/default-product.jpeg'
import { XCircle } from "phosphor-react";

export function ProductTableColumn(){

  return (
    <ProductTableColumnContainer>
      <ProductImageContainer>
        <XCircle />
        <img src={defaultProductImage} />
      </ProductImageContainer>
      <span>Pasta de Dente Colgate 500g</span>
    </ProductTableColumnContainer>
)

}