import { InputContainer, InputField } from "./styles";

interface InputProps {
  label: string
  placeholder: string
  rows:number
  minLength?: number
  maxLength?: number
  required?: boolean
}

export function FormTextarea({ label, placeholder, rows, minLength, maxLength, required = true }: InputProps) {
  return (
    <InputContainer>
      <span>{label}</span>
      <InputField>
        <textarea
          placeholder={placeholder}
          minLength={minLength}
          maxLength={maxLength}
          required={required}
          spellCheck={false}
          rows={rows}
        />
      </InputField>
    </InputContainer>
  );
}