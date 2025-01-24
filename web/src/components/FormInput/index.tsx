import { IconProps } from "phosphor-react";
import { InputContainer, InputField } from "./styles";

interface InputProps {
  type: 'text'
  label: string;
  placeholder: string;
  minLength?: number;
  required?: boolean;
  Icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>,
  value: string,
  onChange: (newValue : string) => void
}

export function FormInput({ label, placeholder, Icon, minLength, value, onChange, required = true}: InputProps) {
  return (
    <InputContainer>
      <span>{label}</span>
      <InputField>
        <input
          placeholder={placeholder}
          minLength={minLength}
          required={required}
          spellCheck={false}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        {Icon && <Icon />}
      </InputField>
    </InputContainer>
  );
}