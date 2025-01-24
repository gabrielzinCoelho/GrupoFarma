import { IconProps } from "phosphor-react";
import { InputContainer, InputField } from "./styles";

interface InputProps {
  type: 'text'
  label: string;
  placeholder: string;
  minLength?: number;
  required?: boolean;
  Icon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>,
}

export function FormInput({ label, placeholder, Icon, minLength, required = true}: InputProps) {
  return (
    <InputContainer>
      <span>{label}</span>
      <InputField>
        <input
          placeholder={placeholder}
          minLength={minLength}
          required={required}
          spellCheck={false}
        />
        {Icon && <Icon />}
      </InputField>
    </InputContainer>
  );
}