import { Button } from "./styles";

interface PrimaryButtonProps {
  label: string,
  widthInRem?: number,
  disabled?: boolean,
  onClick?: () => void
}

export function PrimaryButton({label, widthInRem, disabled = false, onClick} : PrimaryButtonProps){

  return(
    <Button 
      widthInRem={widthInRem}
      disabled={disabled}
      onClick={() => onClick?.()}
      type="button"
    >
      {label}
    </Button>
  )

}