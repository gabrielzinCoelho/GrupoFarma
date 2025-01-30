import { ButtonContainer, MultipleInputContainer, PageContainer, ContentContainer, NewProductButtonContainer, SaleProductsContainer, SaleProductsTable, SaleSubtotalContainer, ContainerFormSelect, SaleContainer, SaleProductsDialogContainer } from "./styles";
import { SecondaryButton } from '../../components/SecondaryButton'
import { PageTitle } from '../../components/PageTitle'
import iconVenda from '../../assets/icon-venda.png'
import iconCancelar from '../../assets/icon-cancelar.png'
import { Plus } from "phosphor-react";
import { PrimaryButtonWithIcon } from "../../components/PrimaryButtonWithIcon";
import { PersonInfoInput } from "../../components/PersonInfoInput";
import profilePic from '../../assets/profile-pic.png'
import { RegistersTable } from "../../components/RegistersTable";
import { ProductTableColumn } from "./components/ProductTableColumn";
import { ColumnText } from "../../components/RegistersTable/components/ColumnText";
import { InputNumberTable } from "./components/InputNumberTable";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { SaleDialog } from "./components/SaleDialog";
import { ProductsSaleDialog } from "./components/ProductSaleDialog";
import { PaymentSaleDialog } from "./components/PaymentSaleDialog";

export function CriarVenda() {

  const [num, setNum] = useState(0)

  return (
    <ContentContainer>
      <PageContainer>

        <PageTitle
          titles={['Vendas', 'Nova Venda']}
          description="Registre uma venda."
        />

        <MultipleInputContainer>
          <PersonInfoInput label="Vendedor" profilePic={profilePic} personName="Gabriel Coelho Costa" email="gabriel.costa18@estudante.ufla.br" />
          <PersonInfoInput label="Cliente" profilePic={profilePic} personName="Isac Gonçalves Cunha" email="isacgoncalves@gmail.com" />
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
                [
                  {
                    element: <ProductTableColumn />
                  },
                  {
                    element: <ColumnText label="R$ 17,90" />
                  },
                  {
                    element: <InputNumberTable value={num} onChange={setNum} min={1} max={99} />
                  },
                  {
                    element: <ColumnText label="R$ 35,80" />
                  }
                ],
                [
                  {
                    element: <ProductTableColumn />
                  },
                  {
                    element: <ColumnText label="R$ 17,90" />
                  },
                  {
                    element: <ColumnText label="02" />
                  },
                  {
                    element: <ColumnText label="R$ 35,80" />
                  }
                ],
                [
                  {
                    element: <ProductTableColumn />
                  },
                  {
                    element: <ColumnText label="R$ 17,90" />
                  },
                  {
                    element: <ColumnText label="02" />
                  },
                  {
                    element: <ColumnText label="R$ 35,80" />
                  }
                ],
                [
                  {
                    element: <ProductTableColumn />
                  },
                  {
                    element: <ColumnText label="R$ 17,90" />
                  },
                  {
                    element: <ColumnText label="02" />
                  },
                  {
                    element: <ColumnText label="R$ 35,80" />
                  }
                ],
              ]}
            />
            <SaleSubtotalContainer>
              <span>Total: R$ 107,40</span>
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
                />
              </span>
            </Dialog.Trigger>
            <SaleDialog title="Realizar pagamento">
              <PaymentSaleDialog />
            </SaleDialog>
          </Dialog.Root>
        </ButtonContainer>

      </PageContainer>
    </ContentContainer>
  );
}