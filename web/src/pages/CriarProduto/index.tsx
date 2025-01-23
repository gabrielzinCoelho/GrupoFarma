import { ButtonContainer } from "./styles";
import { SecondaryButton } from '../../components/SecondaryButton'
import { PageTitle } from '../../components/PageTitle'
import iconCriar from '../../assets/icon-criar.png'
import iconCancelar from '../../assets/icon-cancelar.png'

export function CriarProduto() {
  return (
    <>
      <PageTitle
        title="Produtos"
        title2="Lista de Produtos"
        subtitle="Novo Produto"
        description="Registre um novo produto."
      />
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
      </ButtonContainer></>
  );
}