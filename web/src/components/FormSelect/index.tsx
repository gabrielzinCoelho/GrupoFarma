import * as Select from "@radix-ui/react-select";
import { InputContainer, SelectContent, SelectItem, SelectItemIndicator, SelectTrigger } from "./styles";
import { IconProps } from "phosphor-react";

interface InputProps {
  label: string
  placeholder: string
  required?: boolean
  options: string[]
  CheckedIcon?: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
}

export function FormSelect({ label, placeholder, options, CheckedIcon}: InputProps) {
  return (
    <InputContainer>
      <span>{label}</span>
      <Select.Root>
        <SelectTrigger>
          <Select.Value placeholder={placeholder} />
          <Select.Icon />
        </SelectTrigger>

        <Select.Portal>
          <SelectContent>
            <Select.ScrollUpButton />
            <Select.Viewport>
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
            </Select.Viewport>
            <Select.ScrollDownButton />
            <Select.Arrow />
          </SelectContent>
        </Select.Portal>
      </Select.Root>
    </InputContainer>
  );
}