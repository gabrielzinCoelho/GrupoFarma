import { InputContainer, InputLabel, RadioGroupIndicator, RadioGroupItem } from "./styles";

export interface InputRadioProps {
  label: string
  value: string
}

export function InputRadio({label, value} : InputRadioProps) {
  return (
    <InputContainer>
      <RadioGroupItem value={value} id={value}>
        <RadioGroupIndicator />
      </RadioGroupItem>
      <InputLabel htmlFor={value}>
        {label}
      </InputLabel>
    </InputContainer>
  )
}