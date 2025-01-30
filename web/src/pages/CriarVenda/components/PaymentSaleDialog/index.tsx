import { PrimaryButton } from "../../../../components/PrimaryButton";
import { InputRadioGroup } from "./components/InputRadioGroup";
import { InputText } from "./components/InputText";
import { ProductInfo } from "./components/ProductInfo";
import { SaleInfo } from "./components/SaleInfo";
import { ButtonSubmitContainer, CouponButtonContainer, CouponContainer, DeliveryFeeContainer, DeliveryFeeDataContainer, DeliveryFeeRadioContainer, PaymentContainer, PaymentInfoContainer, PaymentMethodContainer, ProductsInfoContainer, SaleInfoContainer } from "./styles";
import { SecondaryButtonFlex } from "../../../../components/SecondaryButtonFlex";
import { PlusCircle } from "phosphor-react";


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
              <InputRadioGroup
                options={[
                  {
                    label: 'Sim',
                    value: 'yes'
                  },
                  {
                    label: 'Não',
                    value: 'no'
                  }
                ]}
              />
            </DeliveryFeeRadioContainer>
            <InputText
              disabled
              widthInRem={12}
              value='R$ 0, 00'
              placeholder="Taxa de Entrega"
            />
          </DeliveryFeeDataContainer>
        </DeliveryFeeContainer>
        <PaymentMethodContainer>
          <InputRadioGroup
            options={[
              {
                label: 'Cartão de Débito',
                value: 'debit-card'
              },
              {
                label: 'Cartão de Crédito',
                value: 'credit-card'
              },
              {
                label: 'Dinheiro',
                value: 'cash'
              },
              {
                label: 'PIX',
                value: 'pix'
              }
            ]}
          />
        </PaymentMethodContainer>
        <CouponContainer>
          <InputText
            disabled={false}
            widthInRem={18}
            value=''
            placeholder="Código do Cupom"
          />
          <CouponButtonContainer>
            <SecondaryButtonFlex
              label="Aplicar Cupom"
              color="green-500"
              Icon={PlusCircle}
              iconWidthInRem={1.5}
            />
          </CouponButtonContainer>
        </CouponContainer>
      </PaymentInfoContainer>
      <ButtonSubmitContainer>
        <PrimaryButton
          label="Confirmar Pagamento"
          onClick={() => { }}
          widthInRem={16}
        />
      </ButtonSubmitContainer>
    </PaymentContainer>
  )

}