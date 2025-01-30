import { IconProps } from "phosphor-react";
import { Button } from "./styles";

interface PrimaryButtonWithIconProps {
  label: string,
  Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
  disabled?: boolean,
  onClick?: () => void
  paddingInRem?: number
}

export function PrimaryButtonWithIcon({label, Icon, paddingInRem, disabled = false, onClick} : PrimaryButtonWithIconProps){

  return(
    <Button 
      disabled={disabled}
      onClick={() => onClick?.()}
      type="button"
      $paddingInRem={paddingInRem}
    >
      <Icon />
      <span>{label}</span>
    </Button>
  )

}