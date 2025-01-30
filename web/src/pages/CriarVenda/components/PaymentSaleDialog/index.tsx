import { PrimaryButton } from "../../../../components/PrimaryButton";
import { InputRadioGroup } from "./components/InputRadioGroup";
import { InputText } from "./components/InputText";
import { ProductInfo } from "./components/ProductInfo";
import { SaleInfo } from "./components/SaleInfo";
import { ButtonSubmitContainer, CouponButtonContainer, CouponContainer, DeliveryFeeContainer, DeliveryFeeDataContainer, DeliveryFeeRadioContainer, PaymentContainer, PaymentInfoContainer, PaymentMethodContainer, ProductsInfoContainer, SaleInfoContainer } from "./styles";
import { SecondaryButtonFlex } from "../../../../components/SecondaryButtonFlex";
import { PlusCircle } from "phosphor-react";
import { FormControl, FormReset, PaymentMethod } from "../..";
import { Controller } from "react-hook-form";
import { useContext } from "react";
import { SaleProductsContext } from "../../contexts/SaleProducts/context";
import { priceFormatter } from "../../../../utils/formatters";

interface PaymentSaleDialogProps {
  control: FormControl,
  reset: FormReset,
  paymentMethods: PaymentMethod[]
  deliveryFee: number
  handleUpdateDeliveryFee: (newValue: number) => void
  hasDeliveryFee: boolean
  handleUpdateHasDeliveryFee: (newValue: boolean) => void
  handleFinishSale: (e?: React.BaseSyntheticEvent) => Promise<void>
}

export function PaymentSaleDialog({ control, paymentMethods, deliveryFee, handleUpdateDeliveryFee, handleUpdateHasDeliveryFee, hasDeliveryFee, handleFinishSale }: PaymentSaleDialogProps) {

  const { shopCartProducts } = useContext(SaleProductsContext)

  const subtotal = shopCartProducts.reduce((acc, product) => {
    return acc + product.price * product.amount
  }, 0)

  return (
    <PaymentContainer>

      <ProductsInfoContainer>
        {
          shopCartProducts.map(product => (
            <ProductInfo name={product.name} amount={product.amount} price={product.price} />
          ))
        }
      </ProductsInfoContainer>

      <SaleInfoContainer>
        <SaleInfo label="Subtotal" value={priceFormatter.format(subtotal)} />
        <SaleInfo label="Taxa de Entrega" value={priceFormatter.format(deliveryFee)} />
        <SaleInfo label="Desconto" value="R$ 0, 00" />
        <SaleInfo label="Total" value={priceFormatter.format(subtotal + deliveryFee)} />
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
                value={hasDeliveryFee ? 'yes' : 'no'}
                onChange={(newValue: string) => {
                  handleUpdateHasDeliveryFee(newValue === 'yes')
                  handleUpdateDeliveryFee(0)
                }}
              />
            </DeliveryFeeRadioContainer>
            <InputText
              disabled={!hasDeliveryFee}
              widthInRem={12}
              value={deliveryFee.toString()}
              onChange={(newValue: string) => {
                handleUpdateDeliveryFee(Number(newValue))
              }}
              placeholder="Taxa de Entrega"
            />
          </DeliveryFeeDataContainer>
        </DeliveryFeeContainer>
        <PaymentMethodContainer>
          <Controller
            control={control}
            name='paymentMethod'
            render={({ field }) => (
              <InputRadioGroup
                options={
                  paymentMethods.map(paymentMethod => ({
                    label: paymentMethod.name,
                    value: paymentMethod.id
                  }))
                }
                value={field.value?.id}
                onChange={(newValue : string) => {
                  const newPaymentMethod = paymentMethods.find(paymentMethod => paymentMethod.id === newValue)
                  field.onChange(newPaymentMethod!)
                }}
              />
            )}
          />
        </PaymentMethodContainer>
        <CouponContainer>
          <InputText
            disabled={false}
            widthInRem={18}
            value=''
            placeholder="Código do Cupom"
            onChange={() => { }}
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
          onClick={handleFinishSale}
          widthInRem={16}
        />
      </ButtonSubmitContainer>
    </PaymentContainer>
  )

}