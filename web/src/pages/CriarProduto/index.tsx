import { ButtonContainer, FormContainer, MultipleInputContainer, PageContainer, ContentContainer} from "./styles";
import { SecondaryButton } from '../../components/SecondaryButton'
import { PageTitle } from '../../components/PageTitle'
import iconCriar from '../../assets/icon-criar.png'
import iconCancelar from '../../assets/icon-cancelar.png'
import { FormInput } from "../../components/FormInput";


export function CriarProduto() {

  return (
    <ContentContainer>
      <PageContainer>
        <PageTitle
          title="Produtos"
          title2="Lista de Produtos"
          subtitle="Novo Produto"
          description="Registre um novo produto."
        />
        <FormContainer>
          <MultipleInputContainer>
            <FormInput type="text" label="Código" placeholder="Informe um valor" value="Informe um valor"></FormInput>
            <FormInput type="text" label="Nome" placeholder="Informe um valor" value="Informe um valor"></FormInput>
          </MultipleInputContainer>
          <MultipleInputContainer>
            <FormInput type="text" label="Categoria" placeholder="Selecione uma categoria" value="Selecione uma categoria"></FormInput>
            <FormInput type="text" label="Valor" placeholder="Informe um valor" value="Informe um valor"></FormInput>
          </MultipleInputContainer>
          <FormInput rows={2} type="text" label="Como usar" placeholder="Informe como o produto deve ser consumido
" value="Informe como o produto deve ser consumido
"></FormInput>
          <FormInput rows={4} type="text" label="Efeitos Colaterais e contraindicações" placeholder="Informe os efeitos colaterais e contraindicações do produto" value="Informe os efeitos colaterais e contraindicações do produto"></FormInput>
        </FormContainer>
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