import * as Select from "@radix-ui/react-select";
import { InputContainer, SelectContent, SelectItem, SelectItemIndicator, SelectTrigger, SelectViewport } from "./styles";
import { IconProps } from "phosphor-react";

interface InputProps {
  label?: string
  placeholder: string
  required?: boolean
  options: {
    label: string
    value: string
  }[]
  CheckedIcon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
  value: string,
  onChange: (newValue : string) => void
  disabled?: boolean
}

export function FormSelect({ label, placeholder, options, value, onChange, CheckedIcon, disabled = false}: InputProps) {
  return (
    <InputContainer>
      {
        label &&
        <span>{label}</span>
      }
      <Select.Root
        value={value}
        onValueChange={onChange}
        disabled={disabled}
      >
        <SelectTrigger>
          <Select.Value placeholder={placeholder} />
          <Select.Icon />
        </SelectTrigger>

        <Select.Portal>
          <SelectContent position="popper">
            <Select.ScrollUpButton />
            <SelectViewport>
              {
                options.map(option => (
                  <SelectItem value={option.value} key={option.value}>
                    <Select.ItemText>{option.label}</Select.ItemText>
                    {
                      CheckedIcon &&
                      (
                        <SelectItemIndicator>
                          <CheckedIcon />
                        </SelectItemIndicator>
                      )
                    }
                  </SelectItem>
                ))
              }
            </SelectViewport>
            <Select.ScrollDownButton />
            <Select.Arrow />
          </SelectContent>
        </Select.Portal>
      </Select.Root>
    </InputContainer>
  );
}