import { ProductDataContainer, ProductImageContainer, ProductInfoContainer, ProductPriceContainer } from "./styles";
import defaultProductImage from '../../../.../../../../../assets/default-product.jpeg'
import { priceFormatter } from "../../../../../../utils/formatters";

interface ProductInfoProps {
  name: string
  amount: number
  price: number
}

export function ProductInfo({name, amount, price} : ProductInfoProps){
  return (
    <ProductInfoContainer>
      <ProductDataContainer>
        <ProductImageContainer>
          <img src={defaultProductImage} />
        </ProductImageContainer>
        <span>{`${name} (x${amount})`}</span>
      </ProductDataContainer>
      <ProductPriceContainer>
        <span>{priceFormatter.format(price)}</span>
      </ProductPriceContainer>
    </ProductInfoContainer>
  )
}