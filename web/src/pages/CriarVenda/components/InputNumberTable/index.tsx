import { InputNumberTableContainer, InputContainer, QuantityNavContainer } from "./styles";

interface InputNumberTableProps {
  value: number
  onChange: (newValue : number) => void
  min: number
  max: number
}

export function InputNumberTable({value, onChange, min, max} : InputNumberTableProps){

  return (
    <InputNumberTableContainer>
      <InputContainer>
        <input
          type="number" 
          value={value}
        />
        <QuantityNavContainer>
          <div
            onClick={() => value < max && onChange(value + 1)}
          >
            <span>+</span>
          </div>
          <div
            onClick={() => value > min && onChange(value - 1)}
          >
            <span>-</span>
          </div>
        </QuantityNavContainer>
      </InputContainer>
    </InputNumberTableContainer>
  )
}