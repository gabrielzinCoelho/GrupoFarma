import { ButtonContainer, InfoContainer, MultipleInputContainer, PageContainer, ContentContainer, BackNavigationContainer, PageContentContainer, InfoBoxContent, InfoBoxContainer } from "./styles";
import { SecondaryButton } from '../../components/SecondaryButton'
import { PageTitle } from '../../components/PageTitle'
import iconCriar from '../../assets/icon-criar.png'
import iconRemover from '../../assets/icon-remover.png'
import { InfoBox } from "../../components/InfoBox";
import { ShortText } from "./components/ShortText";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { useAppSelector } from "../../store";
import { priceFormatter } from "../../utils/formatters";

interface Product {
  name: string
  id: string
  anvisa_code: string
  price: number
  how_to_use: string
  side_effects: string
  category_id: string,
  category: {
    id: string,
    name: string
  }
}

export function ListarProdutoDetalhado() {

  const navigate = useNavigate()
  const { id: productId } = useParams()
  const { token: userToken } = useAppSelector(store => store.auth)

  const [product, setProduct] = useState<Product>()

  useEffect(() => {

    async function initializeProduct() {

      const productResponse = await api.get(`/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      })
      if (productResponse.status !== 200)
        throw new Error('Product Fetch Failed.')

      setProduct(productResponse.data.product)
    }

    initializeProduct()

  }, [productId, userToken])

  const handleDeleteProduct = async () => {

    if(!product)
      return

    const productRemoved = await api.delete(`products/${product.id}`, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })

    if (productRemoved.status !== 200)
      throw new Error('Product Removal Failed.')

    navigate('/products')

  }

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
              ...(product ? [product.name] : []),
            ]}
            description="Gerencie um produto."
          />
          <InfoContainer>
            <MultipleInputContainer>
              <InfoBox label="Produto" >
                <ShortText title="Código" text={product?.anvisa_code} />
                <ShortText title="Nome" text={product?.name} />
              </InfoBox>
              <InfoBox label="Venda" >
                <ShortText title="Valor" text={product && priceFormatter.format(product.price)} />
                <ShortText title="Categoria" text={product?.category.name} />
              </InfoBox>
            </MultipleInputContainer>
            <InfoBoxContainer>
              <InfoBox label="Como usar" >
                <InfoBoxContent>
                  <span>{product?.how_to_use}</span>
                </InfoBoxContent>
              </InfoBox>
              <InfoBox label="Efeitos Colaterais e contraindicações">
                <InfoBoxContent>
                  <span>{product?.side_effects}</span>
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
            onClick={handleDeleteProduct}
          />
          <SecondaryButton
            label="Editar Produto"
            color="green-500"
            icon={iconCriar}
            widthInRem={10}
            iconWidthInPx={16}
            onClick={() => (product && navigate(`/products/edit/${product.id}`))}
          />
        </ButtonContainer>
      </PageContainer>
    </ContentContainer>
  );
}