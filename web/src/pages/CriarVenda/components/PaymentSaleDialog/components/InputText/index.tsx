import { InputTextContainer } from "./styles";

interface InputTextProps {
  widthInRem: number
  disabled?: boolean
  value: string
  onChange: (newValue : string) => void
  placeholder: string
}

export function InputText({disabled = false, widthInRem, value, placeholder, onChange} : InputTextProps){

  return (
    <InputTextContainer
      $disabled={disabled}
      $widthInRem={widthInRem}
    >
      <input 
        type='text' 
        disabled={disabled} 
        value={value}
        onChange={(e) => (onChange(e.target.value))}
        placeholder={placeholder}
      />
    </InputTextContainer>
  )

}