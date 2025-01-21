import styled from "styled-components";

export const LoginContainer = styled.div`

  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

export const ImageContainer = styled.div`

  width: 50%;
  max-width: 960px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme["slate-500"]};
  border-top-left-radius: 32px;
  border-bottom-left-radius: 32px;
  
  padding: 4rem;
  overflow: hidden;

  img {
    object-fit: contain;
    max-width: 800px;
    max-height: 800px;
    min-width: 480px;
    min-height: 480px;
  }

`

export const FormContainer = styled.div`

  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

`

export const Form = styled.form`

  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding:0 4rem 8rem;
  width: 32rem;
  min-width: 24rem;

`

export const FormHeader = styled.div`

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-weight: 500;
    font-size: 2rem;
  }

  h3 {
    font-weight: 400;
    font-size: 1rem;
  }

`

export const FormInputs = styled.div`

  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

`

export const InputPasswordContainer = styled.div`

  widows: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-end;

  span:last-child{
    color: ${props => props.theme["slate-800"]};
    font-size: 0.75rem;
    font-weight: 600;
    cursor: pointer;
  }

`

