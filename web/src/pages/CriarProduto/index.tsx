import { ButtonContainer, FormContainer, MultipleInputContainer, PageContainer, ContentContainer, PageContentContainer } from "./styles";
import { SecondaryButton } from '../../components/SecondaryButton'
import { PageTitle } from '../../components/PageTitle'
import iconCriar from '../../assets/icon-criar.png'
import iconCancelar from '../../assets/icon-cancelar.png'
import { FormInput } from "../../components/FormInput";
import { FormTextarea } from "../../components/FormTextarea";
import { FormSelect } from "../../components/FormSelect";
import { Check } from "phosphor-react";


export function CriarProduto() {

  return (
    <ContentContainer>
      <PageContainer>
        <PageContentContainer>
          <PageTitle
            titles={['Produtos', 'Lista de Produtos', 'Novo Produto']}
            description="Registre um novo produto."
          />
          <FormContainer>
            <MultipleInputContainer>
              <FormInput type="text" label="Código" placeholder="Informe o código do produto" />
              <FormInput type="text" label="Nome" placeholder="Informe o nome do produto" />
            </MultipleInputContainer>
            <MultipleInputContainer>
              <FormSelect 
                label="Categoria" 
                placeholder="Selecione uma categoria"
                CheckedIcon={Check}
                options={[
                  "Categoria 1",
                  "Categoria 2",
                  "Categoria 3",
                  "Categoria 4",
                  "Categoria 5"
                ]}
              />
              <FormInput type="text" label="Valor" placeholder="Informe um valor" />
            </MultipleInputContainer>
            <FormTextarea 
              label="Como usar" 
              placeholder="Informe como o produto deve ser consumido"
              rows={2}
            />
            <FormTextarea 
              label="Efeitos Colaterais e contraindicações" 
              placeholder="Informe os efeitos colaterais e contraindicações do produto"
              rows={10}
            />
          </FormContainer>
        </PageContentContainer>
        <ButtonContainer>
          <SecondaryButton
            label="Cancelar"
            icon={iconCancelar}
            color="orange-500"
            widthInRem={7}
            iconWidthInPx={12}
          />
          <SecondaryButton
            label="Criar Produto"
            color="green-500"
            icon={iconCriar}
            widthInRem={9}
            iconWidthInPx={16}
          />
        </ButtonContainer>
      </PageContainer>
    </ContentContainer>
  );
}