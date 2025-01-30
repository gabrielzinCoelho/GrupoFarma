import { InputRadio, InputRadioProps } from "../InputRadio";
import { RadioGroupRoot } from "./styles";

interface InputRadioGroupProps {
  options: InputRadioProps[]
  value: string
  onChange: (newValue : string) => void
}

export function InputRadioGroup({options, value, onChange} : InputRadioGroupProps) {

  return (
    <RadioGroupRoot
      defaultValue=""
      value={value}
      onValueChange={onChange}
    >
      {
        options.map(option => (
          <InputRadio label={option.label} value={option.value} />
        ))
      }
    </RadioGroupRoot>
  )

}