import { ProductDataContainer, ProductImageContainer, ProductInfoContainer, ProductPriceContainer } from "./styles";
import defaultProductImage from '../../../.../../../../../assets/default-product.jpeg'

export function ProductInfo(){
  return (
    <ProductInfoContainer>
      <ProductDataContainer>
        <ProductImageContainer>
          <img src={defaultProductImage} />
        </ProductImageContainer>
        <span>Pasta de Dente Colgate 500g (x2)</span>
      </ProductDataContainer>
      <ProductPriceContainer>
        <span>R$ 35,70</span>
      </ProductPriceContainer>
    </ProductInfoContainer>
  )
}