import { InputRadio, InputRadioProps } from "../InputRadio";
import { RadioGroupRoot } from "./styles";

interface InputRadioGroupProps {
  options: InputRadioProps[]
}

export function InputRadioGroup({options} : InputRadioGroupProps) {

  return (
    <RadioGroupRoot
      defaultValue=""
    >
      {
        options.map(option => (
          <InputRadio label={option.label} value={option.value} />
        ))
      }
    </RadioGroupRoot>
  )

}