import { IconProps } from "phosphor-react";
import { InputContainer, InputField } from "./styles";

interface InputProps {
  type: 'text' | 'password' | 'email',
  label: string,
  placeholder: string,
  Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>,
  onClickIcon?: () => void,
  value: string,
  onChange: (newValue: string) => void
  minLength?: number
  required?: boolean
}

export function Input({type, label, placeholder, Icon, onClickIcon, value, onChange, minLength, required = true} : InputProps){

  return(
    <InputContainer>
      <span>{label}</span>
      <InputField
        $iconHasEvent={!!onClickIcon}
      >
        <input
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          minLength={minLength}
          required={required}
          spellCheck={false}
        />
        <Icon
          onClick={()=>onClickIcon?.()}
        />
      </InputField>
    </InputContainer>
  )

}