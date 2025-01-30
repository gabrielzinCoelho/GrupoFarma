import { InputTextContainer } from "./styles";

interface InputTextProps {
  widthInRem: number
  disabled?: boolean
  value: string
  placeholder: string
}

export function InputText({disabled = false, widthInRem, value, placeholder} : InputTextProps){

  return (
    <InputTextContainer
      $disabled={disabled}
      $widthInRem={widthInRem}
    >
      <input 
        type='text' 
        disabled={disabled} 
        value={value}
        placeholder={placeholder}
      />
    </InputTextContainer>
  )

}