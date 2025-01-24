import * as Select from "@radix-ui/react-select";
import { InputContainer, SelectContent, SelectItem, SelectItemIndicator, SelectTrigger, SelectViewport } from "./styles";
import { IconProps } from "phosphor-react";

interface InputProps {
  label: string
  placeholder: string
  required?: boolean
  options: string[]
  CheckedIcon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
  value: string,
  onChange: (newValue : string) => void
}

export function FormSelect({ label, placeholder, options, value, onChange, CheckedIcon}: InputProps) {
  return (
    <InputContainer>
      <span>{label}</span>
      <Select.Root
        value={value}
        onValueChange={onChange}
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
                  <SelectItem value={option} key={option}>
                    <Select.ItemText>{option}</Select.ItemText>
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