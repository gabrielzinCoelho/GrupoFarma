import { ButtonContainer, MultipleInputContainer, PageContainer, ContentContainer, PageContentContainer} from "./styles";
import { SecondaryButton } from '../../components/SecondaryButton'
import { PageTitle } from '../../components/PageTitle'
import iconVenda from '../../assets/icon-venda.png'
import iconCancelar from '../../assets/icon-cancelar.png'
import { Plus} from "phosphor-react";
import { PrimaryButtonWithIcon } from "../../components/PrimaryButtonWithIcon";
import { PersonInfoInput } from "../../components/PersonInfoInput";
import profilePic from '../../assets/profile-pic.png'

export function CriarVenda() {

  return (
    <ContentContainer>
      <PageContainer>
        <PageContentContainer>
          <PageTitle
            titles={['Vendas', 'Nova Venda']}
            description="Registre uma venda."
          />
          <MultipleInputContainer>
            <PersonInfoInput label="Vendedor" profilePic={profilePic} personName="Gabriel Coelho Costa" email="gabriel.costa18@estudante.ufla.br"></PersonInfoInput> 
            <PersonInfoInput label="Cliente" profilePic={profilePic} personName="Isac Gonçalves Cunha" email="isacgoncalves@gmail.com"></PersonInfoInput>  
          </MultipleInputContainer>
        <div className="newProduct">
          <PrimaryButtonWithIcon label="Adicionar Produto" Icon={Plus}></PrimaryButtonWithIcon>
        </div>
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
            label="Finalizar Venda"
            color="green-500"
            icon={iconVenda}
            widthInRem={10}
            iconWidthInPx={16}
          />
        </ButtonContainer>
      </PageContainer>
    </ContentContainer>
  );
}