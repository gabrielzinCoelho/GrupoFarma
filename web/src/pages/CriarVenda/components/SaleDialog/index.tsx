import * as Dialog from '@radix-ui/react-dialog'
import { CloseDialog, Content, DialogContainer, Overlay} from './styles'
import { ArrowLeft } from 'phosphor-react'
import { ReactNode } from 'react'

interface SaleDialogProps {
  children: ReactNode,
  title: string
}

export function SaleDialog({children, title} : SaleDialogProps) {

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseDialog>
          <ArrowLeft />
        </CloseDialog>
        <DialogContainer>
          <h2>{title}</h2> 
          {children}
        </DialogContainer>
      </Content>
    </Dialog.Portal>
  )

}