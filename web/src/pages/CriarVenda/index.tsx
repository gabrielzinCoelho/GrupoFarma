import { ButtonContainer, MultipleInputContainer, PageContainer, ContentContainer, NewProductButtonContainer, SaleProductsContainer, SaleProductsTable, SaleSubtotalContainer } from "./styles";
import { SecondaryButton } from '../../components/SecondaryButton'
import { PageTitle } from '../../components/PageTitle'
import iconVenda from '../../assets/icon-venda.png'
import iconCancelar from '../../assets/icon-cancelar.png'
import { Plus } from "phosphor-react";
import { PrimaryButtonWithIcon } from "../../components/PrimaryButtonWithIcon";
import { PersonInfoInput } from "../../components/PersonInfoInput";
import { RegistersTable } from "../../components/RegistersTable";
import { ProductTableColumn } from "./components/ProductTableColumn";
import { ColumnText } from "../../components/RegistersTable/components/ColumnText";
import { InputNumberTable } from "./components/InputNumberTable";
import * as Dialog from "@radix-ui/react-dialog";
import { SaleDialog } from "./components/SaleDialog";
import { ProductsSaleDialog } from "./components/ProductSaleDialog";
import { PaymentSaleDialog } from "./components/PaymentSaleDialog";
import { useAppSelector } from "../../store";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useContext, useEffect, useState } from "react";
import { SaleProductsContext } from "./contexts/SaleProducts/context";
import { priceFormatter } from "../../utils/formatters";
import { FormSelect } from "../../components/FormSelect";
import defaultSalespersonImg from '../../assets/profile-pic.png'
import defaultClientImg from '../../assets/default-user.png'
import { api } from "../../lib/axios";

export type FormControl = ReturnType<typeof useForm<SaleFormInputs>>['control'];
export type FormReset = ReturnType<typeof useForm<SaleFormInputs>>['reset'];

interface Client {
  id: string,
  name: string,
  email: string
}

export interface PaymentMethod {
  id: string,
  name: string
}

const SaleFormSchema = z.object({
  client: z.object({
    id: z.string().uuid(),
    name: z.string(),
    email: z.string()
  }),
  paymentMethod: z.object({
    id: z.string(),
    name: z.string()
  }),
})

export type SaleFormInputs = z.infer<typeof SaleFormSchema>

export function CriarVenda() {

  const { token: userToken, salespersonName, salespersonEmail } = useAppSelector(store => store.auth)

  const {
    removeProductFromShopCart,
    updateProductInShopCart,
    shopCartProducts
  } = useContext(SaleProductsContext)

  const {
    control,
    reset,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SaleFormInputs>({
    resolver: zodResolver(SaleFormSchema)
  })

  const [clients, setClients] = useState<Client[]>([])
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([])
  const [deliveryFee, setDeliveryFee] = useState(0)
  const [hasDeliveryFee, setHasDeliveryFee] = useState(false)

  useEffect(() => {

    async function initializeFormOptions() {

      const clientsResponse = await api.get('/clients', {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      })

      if(clientsResponse.status !== 200)
        throw new Error('Fetch Clients Failed')

      const paymentMethodsResponse = await api.get('/payment-methods', {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      })

      if(paymentMethodsResponse.status !== 200)
        throw new Error('Fetch Payment Methods Failed')

      //eslint-disable-next-line
      setClients(clientsResponse.data.clients.map((client : any) => ({
        id: client.id,
        name: client.name,
        email: client.email
      })))

      //eslint-disable-next-line
      setPaymentMethods(paymentMethodsResponse.data.paymentMethods.map((paymentMethod : any) => ({
        id: paymentMethod.id,
        name: paymentMethod.name
      })))

    }

    initializeFormOptions()

  }, [userToken])

  async function handleFormSubmit(data : SaleFormInputs){
    console.log(data)
    window.alert('error')
  }

  return (
    <ContentContainer>
      <PageContainer>

        <PageTitle
          titles={['Vendas', 'Nova Venda']}
          description="Registre uma venda."
        />

        <MultipleInputContainer>
          <PersonInfoInput
            label="Vendedor"
            imgSrc={defaultSalespersonImg}
            personName={salespersonName!}
            email={salespersonEmail!}
            InputSelect={
              <FormSelect
                options={[
                  {
                    label: salespersonName!,
                    value: salespersonName!
                  }
                ]}
                placeholder="Vendedor"
                disabled
                value={salespersonName!}
                onChange={() => { }}
              />
            }
          />
          <Controller
            control={control}
            name="client"
            render={
              ({field}) => (

                <PersonInfoInput
                  label="Cliente"
                  personName={field.value?.name ?? 'Cliente'}
                  email={field.value?.email ?? 'cliente@email.com'}
                  imgSrc={defaultClientImg}
                  InputSelect={
                    <FormSelect
                      placeholder='Selecione um cliente'
                      options={
                        clients.map(
                          client => ({
                            label: client.name,
                            value: client.id
                          })
                        )
                      }
                      value={field.value?.id}
                      onChange={
                        (newClientId: string) => {
                          const newClient = clients.find(client => client.id === newClientId)
                          field.onChange(
                            newClient
                          )
                          reset({
                            client: newClient
                          })
                        }
                      }
                    />
                  }
                />
              )
            }
          />
        </MultipleInputContainer>

        <SaleProductsContainer>
          <NewProductButtonContainer>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <span>
                  <PrimaryButtonWithIcon
                    label="Adicionar Produto"
                    Icon={Plus}
                    paddingInRem={0.5}
                  />
                </span>
              </Dialog.Trigger>
              <SaleDialog title="Adicionar ao carrinho">
                <ProductsSaleDialog />
              </SaleDialog>
            </Dialog.Root>
          </NewProductButtonContainer>
          <SaleProductsTable>
            <RegistersTable
              borderBottomRadius={false}
              rowHeightInRem={4}
              numRows={3}
              columns={[
                {
                  label: 'Produto',
                  percentWidth: 55,
                  hasOrder: false,
                },
                {
                  label: 'Preço',
                  percentWidth: 15,
                  hasOrder: false,
                },
                {
                  label: 'Quantidade',
                  percentWidth: 15,
                  hasOrder: false,
                },
                {
                  label: 'SubTotal',
                  percentWidth: 15,
                  hasOrder: false,
                }
              ]}
              registers={[
                ...shopCartProducts.map(
                  product => (
                    [
                      {
                        element:
                          <ProductTableColumn
                            productName={product.name}
                            productId={product.id}
                            handleProductRemoval={removeProductFromShopCart}
                          />
                      },
                      {
                        element: <ColumnText label={priceFormatter.format(product.price)} />
                      },
                      {
                        element:
                          <InputNumberTable
                            value={product.amount}
                            onChange={
                              (newValue: number) => (
                                updateProductInShopCart({
                                  ...product,
                                  amount: newValue
                                })
                              )
                            }
                            min={1}
                            max={99}
                          />
                      },
                      {
                        element: <ColumnText label={priceFormatter.format(product.price * product.amount)} />
                      }
                    ]
                  )
                )
              ]}
            />
            <SaleSubtotalContainer>
              <span>
                Total: {
                  (
                    () => {
                      let subTotal = 0
                      shopCartProducts.forEach(product => subTotal += product.price * product.amount)
                      return priceFormatter.format(subTotal)
                    }
                  )()
                }
              </span>
            </SaleSubtotalContainer>
          </SaleProductsTable>
        </SaleProductsContainer>

        <ButtonContainer>
          <SecondaryButton
            label="Cancelar"
            icon={iconCancelar}
            color="orange-500"
            widthInRem={7}
            iconWidthInPx={12}
          />
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <span>
                <SecondaryButton
                  label="Finalizar Venda"
                  color="green-500"
                  icon={iconVenda}
                  widthInRem={10}
                  iconWidthInPx={16}
                  disabled={isSubmitting}
                />
              </span>
            </Dialog.Trigger>
            <SaleDialog title="Realizar pagamento">
              <PaymentSaleDialog 
                control={control} 
                reset={reset}
                paymentMethods={paymentMethods}
                deliveryFee={deliveryFee}
                handleUpdateDeliveryFee={(newValue : number) => setDeliveryFee(newValue)}
                hasDeliveryFee={hasDeliveryFee}
                handleUpdateHasDeliveryFee={(newValue : boolean) => setHasDeliveryFee(newValue)}
                handleFinishSale={handleSubmit(handleFormSubmit)}
              />
            </SaleDialog>
          </Dialog.Root>
        </ButtonContainer>

      </PageContainer>
    </ContentContainer>
  );
}