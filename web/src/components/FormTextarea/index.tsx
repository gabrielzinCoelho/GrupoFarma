import { InputContainer, InputField } from "./styles";

interface InputProps {
  label: string
  placeholder: string
  rows:number
  minLength?: number
  maxLength?: number
  required?: boolean
  value: string,
  onChange: (newValue : string) => void
}

export function FormTextarea({ label, placeholder, rows, minLength, maxLength, value, onChange, required = true }: InputProps) {
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
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </InputField>
    </InputContainer>
  );
}