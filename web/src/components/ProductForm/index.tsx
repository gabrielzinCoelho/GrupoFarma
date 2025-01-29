import { ButtonContainer, FormContainer, MultipleInputContainer, PageFormContainer } from "./styles";
import { SecondaryButton } from '../../components/SecondaryButton'
import iconCriar from '../../assets/icon-criar.png'
import iconCancelar from '../../assets/icon-cancelar.png'
import { FormInput } from "../../components/FormInput";
import { FormTextarea } from "../../components/FormTextarea";
import { FormSelect } from "../../components/FormSelect";
import { Check } from "phosphor-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppSelector } from "../../store";
import { api } from "../../lib/axios";
import { useState, useEffect } from "react";

const ProductFormSchema = z.object({
  anvisaCode: z.string().min(1),
  name: z.string().min(1),
  category: z.string().min(1),
  price: z.string().min(1),
  howToUse: z.string().min(1),
  sideEffects: z.string().min(1)
})

// const priceSchema = z.number().multipleOf(0.01)

export type ProductFormInputs = z.infer<typeof ProductFormSchema>

interface Button {
  label: string
  handleClick: () => void
}

interface AsyncButton {
  label: string
  handleClick: (data : ProductFormInputs) => Promise<void>
}

interface ProductFormProps {
  successButton: AsyncButton
  cancelButton : Button
  initialState?: ProductFormInputs
}

interface Category {
  id: string
  name: string
}

export function ProductForm({cancelButton, successButton, initialState} : ProductFormProps) {

  const {
    reset,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<ProductFormInputs>({
    resolver: zodResolver(ProductFormSchema)
  })

  const {token : userToken} = useAppSelector(store => store.auth)
  const [categories, setCategories] = useState<Category[]>([])

  const normalizeFormData = (data : ProductFormInputs) : ProductFormInputs => {

    const priceFormatted = data.price.replace(',', '.')

    if (/^[0-9]+(\.[0-9][0-9]?)?$/.test(priceFormatted) === false)
      throw new Error('Price Value Invalid')

    return {
      ...data,
      price: priceFormatted 
    }

  }

  useEffect(() => {
    
    const initializeCategories = async () => {
      const categoriesResponse = await api.get('/categories', {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      })

      if(categoriesResponse.status !== 200)
        throw new Error('Fetch Categories Failed')

      setCategories(categoriesResponse.data.categories)

    }

    initializeCategories()
  }, [userToken])

  useEffect(() => {
    reset(initialState)
  }, [initialState, reset])

  return (
    <PageFormContainer>
      <FormContainer>
        <MultipleInputContainer>
          <Controller
            control={control}
            name="anvisaCode"
            defaultValue={initialState?.anvisaCode}
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
            defaultValue={initialState?.name}
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
            defaultValue={initialState?.category}
            render={({ field }) => (
              <FormSelect
                label="Categoria"
                placeholder="Selecione uma categoria"
                CheckedIcon={Check}
                options={categories.map(category => ({
                  label: category.name,
                  value: category.id
                }))}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="price"
            defaultValue={initialState?.price}
            render={({ field }) => (
              <FormInput
                type="text"
                label="Valor (R$)"
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
          defaultValue={initialState?.howToUse}
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
          defaultValue={initialState?.sideEffects}
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
      <ButtonContainer>
        <SecondaryButton
          label={cancelButton.label}
          icon={iconCancelar}
          color="orange-500"
          widthInRem={7}
          iconWidthInPx={12}
          onClick={cancelButton.handleClick}
        />
        <SecondaryButton
          label={successButton.label}
          color="green-500"
          icon={iconCriar}
          widthInRem={9}
          iconWidthInPx={16}
          disabled={isSubmitting}
          onClick={
            handleSubmit(
              (data : ProductFormInputs) => {
                successButton.handleClick(normalizeFormData(data))
              }
            )
          }
        />
      </ButtonContainer>
    </PageFormContainer>
  );
}