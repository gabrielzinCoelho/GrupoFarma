import { PrimaryButton } from "../../../../components/PrimaryButton";
import { ProductInfo } from "./components/ProductInfo";
import { SaleInfo } from "./components/SaleInfo";
import { ButtonSubmitContainer, DeliveryFeeContainer, DeliveryFeeDataContainer, DeliveryFeeInput, DeliveryFeeOption, DeliveryFeeRadioContainer, PaymentContainer, PaymentInfoContainer, ProductsInfoContainer, SaleInfoContainer } from "./styles";

export function PaymentSaleDialog() {

  return (
    <PaymentContainer>

      <ProductsInfoContainer>
        <ProductInfo />
        <ProductInfo />
      </ProductsInfoContainer>

      <SaleInfoContainer>
        <SaleInfo label="Subtotal" value="R$ 102,67" />
        <SaleInfo label="Taxa de Entrega" value="R$ 102,67" />
        <SaleInfo label="Desconto" value="R$ 102,67" />
        <SaleInfo label="Total" value="R$ 102,67" />
      </SaleInfoContainer>

      <PaymentInfoContainer>
        <DeliveryFeeContainer>
          <span>Possui taxa de entrega?</span>
          <DeliveryFeeDataContainer>
            <DeliveryFeeRadioContainer>
              <DeliveryFeeOption>
                <label htmlFor="yes">Sim</label>
                <input type="radio" name="delivery-fee" value='yes' id='yes' />
              </DeliveryFeeOption>
              <DeliveryFeeOption>
                <label htmlFor="no">Não</label>
                <input type="radio" name="delivery-fee" value='no' id='no' />
              </DeliveryFeeOption>
            </DeliveryFeeRadioContainer>
            <DeliveryFeeInput />
          </DeliveryFeeDataContainer>
        </DeliveryFeeContainer>

        <ButtonSubmitContainer>
          <PrimaryButton
            label="Confirmar Pagamento"
            onClick={() => {}}
            widthInRem={16}
          />
        </ButtonSubmitContainer>
      </PaymentInfoContainer>
    </PaymentContainer>
  )

}