import { InputContainer, InputField } from "./styles";

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  minLength?: number;
  required?: boolean;
  rows?: number; // Propriedade opcional para definir altura do input
}

export function FormInput({ label, placeholder, value, minLength, required = true, rows = 1, // Valor padrão de 1
}: InputProps) {
  return (
    <InputContainer>
      <span>{label}</span>
      <InputField>
        <textarea
          placeholder={placeholder}
          value={value}
          minLength={minLength}
          required={required}
          rows={rows}
          spellCheck={false}
        />
      </InputField>
    </InputContainer>
  );
}