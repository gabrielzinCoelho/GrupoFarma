import { ButtonContainer, InfoContainer, MultipleInputContainer, PageContainer, ContentContainer} from "./styles";
import { SecondaryButton } from '../../components/SecondaryButton'
import { PageTitle } from '../../components/PageTitle'
import iconCriar from '../../assets/icon-criar.png'
import iconRemover from '../../assets/icon-remover.png'
import { InfoBox } from "../../components/InfoBox";
import { ShortText } from "./components/ShortText";

export function ListarProdutoDetalhado() {

  return (
    <ContentContainer>
      <PageContainer>
        <PageTitle
          titles={[
            "Produtos",
            "Lista de Produtos",
            "Antibiótico",
          ]}
          description="Gerencie um produto."
        />
        <InfoContainer>
          <MultipleInputContainer>
            <InfoBox label="Produto" >
              <ShortText title="Código" text="1234"></ShortText>
              <ShortText title="Nome" text="Antibiótico"></ShortText>
            </InfoBox>
            <InfoBox label="Venda" >
              <ShortText title="Valor" text="R$ 298,00"></ShortText>
              <ShortText title="Categoria" text="Anti-inflamatório"></ShortText>
            </InfoBox>
          </MultipleInputContainer>
          <InfoBox label="Como usar" ><span className="longText">oi</span> </InfoBox>
          <InfoBox label="Efeitos Colaterais e contraindicações"><span className="longText">oi</span></InfoBox>
        </InfoContainer>
        <ButtonContainer>
          <SecondaryButton
            label="Remover Produto"
            icon={iconRemover}
            color="red-500"
            widthInRem={11}
            iconWidthInPx={12}
          />
          <SecondaryButton
            label="Editar Produto"
            color="green-500"
            icon={iconCriar}
            widthInRem={10}
            iconWidthInPx={16}
          />
        </ButtonContainer>
      </PageContainer>
    </ContentContainer>
  );
}