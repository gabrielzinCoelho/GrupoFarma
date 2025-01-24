import { ButtonContainer, FormContainer, MultipleInputContainer, PageContainer, ContentContainer, PageContentContainer } from "./styles";
import { SecondaryButton } from '../../components/SecondaryButton'
import { PageTitle } from '../../components/PageTitle'
import iconCriar from '../../assets/icon-criar.png'
import iconCancelar from '../../assets/icon-cancelar.png'
import { FormInput } from "../../components/FormInput";
import { FormTextarea } from "../../components/FormTextarea";
import { FormSelect } from "../../components/FormSelect";
import { Check } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const NewProductFormSchema = z.object({
  anvisaCode: z.string(),
  name: z.string(),
  category: z.string(),
  price: z.string(),
  howToUse: z.string(),
  sideEffects: z.string()
})

// const priceSchema = z.number().multipleOf(0.01)

type NewProductFormInputs = z.infer<typeof NewProductFormSchema>

export function CriarProduto() {

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<NewProductFormInputs>({
    resolver: zodResolver(NewProductFormSchema)
  })

  function handleFormSubmit(data: NewProductFormInputs) {
    console.log(data)
  }

  const navigate = useNavigate()

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
              <Controller
                control={control}
                name="anvisaCode"
                defaultValue=""
                render={({ field }) => (
                  <FormInput
                    type="text"
                    label="Código"
                    placeholder="Informe o código do produto"
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="name"
                defaultValue=""
                render={({ field }) => (
                  <FormInput
                    type="text"
                    label="Nome"
                    placeholder="Informe o nome do produto"
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </MultipleInputContainer>
            <MultipleInputContainer>
              <Controller
                control={control}
                name="category"
                render={({ field }) => (
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
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="price"
                defaultValue=""
                render={({ field }) => (
                  <FormInput
                    type="text"
                    label="Valor"
                    placeholder="Informe um valor"
                    value={field.value}
                    onChange={(newValue: string) => {
                      if (/^[0-9.,]*$/.test(newValue))
                        field.onChange(newValue);
                    }}
                  />
                )}
              />
            </MultipleInputContainer>
            <Controller
              control={control}
              name="howToUse"
              defaultValue=''
              render={({ field }) => (
                <FormTextarea
                  label="Como usar"
                  placeholder="Informe como o produto deve ser consumido"
                  rows={2}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="sideEffects"
              defaultValue=''
              render={({ field }) => (
                <FormTextarea
                  label="Efeitos Colaterais e contraindicações"
                  placeholder="Informe os efeitos colaterais e contraindicações do produto"
                  rows={10}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
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
            onClick={() => (navigate('/products'))}
          />
          <SecondaryButton
            label="Criar Produto"
            color="green-500"
            icon={iconCriar}
            widthInRem={9}
            iconWidthInPx={16}
            disabled={isSubmitting}
            onClick={handleSubmit(handleFormSubmit)}
          />
        </ButtonContainer>
      </PageContainer>
    </ContentContainer>
  );
}