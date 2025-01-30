import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 2;

`
export const Content = styled(Dialog.Content)`

  z-index: 3;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  padding: 2rem;
  background: ${props => props.theme['slate-50']};
  
  width: 40%;
  min-width: 36rem;
  max-width: 48rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow: hidden;

`

export const CloseDialog = styled(Dialog.Close)`

  border: 0;
  box-shadow: none;
  outline: 0;
  background: transparent;
  width: max-content;
  cursor: pointer;

  &:focus {
    border: 0;
    box-shadow: 0;
    outline: 0;
  }

  svg {
    width: 2rem;
    height: 2rem;
    color: ${props => props.theme['slate-800']}
  }

`

export const DialogContainer = styled.div`

  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  h2 {
    color: ${props => props.theme['slate-800']}
  }

  overflow: hidden;

`