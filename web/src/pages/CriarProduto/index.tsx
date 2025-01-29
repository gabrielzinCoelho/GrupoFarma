import { ContentContainer } from "./styles";
import { PageTitle } from '../../components/PageTitle'
import { ProductForm, ProductFormInputs } from "../../components/ProductForm";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store";
import { api } from "../../lib/axios";

export function CriarProduto() {

  const {token : userToken} = useAppSelector(store => store.auth)
  const navigate = useNavigate()

  const handleFormSubmit = async (data : ProductFormInputs) => {
    
    const newProductResponse = await api.post('/products', {
      ...data,
      price: Number(data.price)
    }, {
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    })

    if(newProductResponse.status !== 201)
      throw new Error('Product Creation Failed')

    navigate('/products')

  }

  return (
    <ContentContainer>
      <PageTitle
        titles={['Produtos', 'Lista de Produtos', 'Novo Produto']}
        description="Registre um novo produto."
      />
      <ProductForm 
        cancelButton={{
          label: 'Cancelar',
          handleClick: () => (navigate('/products'))
        }}
        successButton={{
          label: 'Criar Produto',
          handleClick: handleFormSubmit
        }}
      />
    </ContentContainer>
  );
}