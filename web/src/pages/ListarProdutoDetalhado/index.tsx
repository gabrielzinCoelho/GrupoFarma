import { ButtonContainer, InfoContainer, MultipleInputContainer, PageContainer, ContentContainer, BackNavigationContainer, PageContentContainer, InfoBoxContent, InfoBoxContainer } from "./styles";
import { SecondaryButton } from '../../components/SecondaryButton'
import { PageTitle } from '../../components/PageTitle'
import iconCriar from '../../assets/icon-criar.png'
import iconRemover from '../../assets/icon-remover.png'
import { InfoBox } from "../../components/InfoBox";
import { ShortText } from "./components/ShortText";
import { useNavigate } from "react-router-dom";

export function ListarProdutoDetalhado() {

  const navigate = useNavigate()

  return (
    <ContentContainer>
      <BackNavigationContainer>
        <h3
          onClick={() => navigate('/products')}
        >Voltar para lista de produtos</h3>
      </BackNavigationContainer>
      <PageContainer>
        <PageContentContainer>
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
            <InfoBoxContainer>
              <InfoBox label="Como usar" >
                <InfoBoxContent>
                  <span>Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue commodo. Etiam bibendum elit eget erat. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Pellentesque habitant morbi tristique</span>
                </InfoBoxContent>
              </InfoBox>
              <InfoBox label="Efeitos Colaterais e contraindicações">
                <InfoBoxContent>
                  <span>Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Morbi a metus. Phasellus enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue commodo. Etiam bibendum elit eget erat. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Pellentesque habitant morbi tristique Nullam sapien sem, ornare ac, nonummy non, lobortis a, enim. Nunc tincidunt ante vitae massa. Duis ante orci, molestie vitae, vehicula venenatis, tincidunt ac, pede. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Donec iaculis gravida nulla. Donec quis nibh at felis congue commodo. Etiam bibendum elit eget erat. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Pellentesque habitant morbi tristique</span>
                </InfoBoxContent>
              </InfoBox>
            </InfoBoxContainer>
          </InfoContainer>
        </PageContentContainer>
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