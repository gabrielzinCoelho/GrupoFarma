import { Form, FormContainer, FormHeader, FormInputs, ImageContainer, InputPasswordContainer, LoginContainer } from "./styles";
import backgroundImage from '../../assets/login-background.png'
import { Input } from "./components/Input";
import { PrimaryButton } from "../../components/PrimaryButton";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EnvelopeSimple, Eye, EyeSlash } from "phosphor-react";
import { useState } from "react";
import { api } from "../../lib/axios";
import { useDispatch } from "react-redux";
import { login } from "../../store/auth-slice";

const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5)
})

type LoginFormInputs = z.infer<typeof LoginFormSchema>

export function Login() {

  const dispatch = useDispatch()

  const {
    setValue,
    control,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(LoginFormSchema)
  })

  async function handleFormSubmit({ email, password }: LoginFormInputs) {
    try {

      const authResponse = await api.post('/sessions', {
        email,
        password
      })

      if (authResponse.status !== 200) throw new Error('Unauthorized Access')

      const { token } = authResponse.data
      dispatch(login({
        token
      }))
    
      //eslint-disable-next-line
    } catch (err) {
      setValue("password", '')
    }

  }

  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <LoginContainer>
      <FormContainer>
        <Form>
          <FormHeader>
            <h1>Bem-vindo de volta</h1>
            <h3>Informe suas credenciais para acessar sua conta.</h3>
          </FormHeader>
          <FormInputs>
            <Controller
              control={control}
              name="email"
              defaultValue=''
              render={({ field }) => (
                <Input
                  label="E-mail"
                  type="email"
                  placeholder="Informe seu e-mail"
                  Icon={EnvelopeSimple}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            <InputPasswordContainer>
              <Controller
                control={control}
                name="password"
                defaultValue=''
                render={({ field }) => (
                  <Input
                    label="Senha"
                    type={isPasswordVisible ? 'text' : 'password'}
                    placeholder="Informe sua senha"
                    Icon={isPasswordVisible ? EyeSlash : Eye}
                    onClickIcon={() => setIsPasswordVisible(isPasswordVisible => !isPasswordVisible)}
                    value={field.value}
                    onChange={field.onChange}
                    minLength={5}
                  />
                )}
              />
              <span>Esqueci minha senha</span>
            </InputPasswordContainer>
          </FormInputs>
          <PrimaryButton
            label="Enviar"
            disabled={isSubmitting}
            onClick={handleSubmit(handleFormSubmit)}
          />
        </Form>
      </FormContainer>
      <ImageContainer>
        <img src={backgroundImage} />
      </ImageContainer>
    </LoginContainer>
  )

}