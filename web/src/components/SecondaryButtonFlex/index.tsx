import { IconProps } from "phosphor-react";
import { Button } from "./styles";

interface SecondaryButtonProps {
  label: string;
  color: string;
  Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>
  iconWidthInRem: number;
  disabled?: boolean;
  onClick?: () => void;
}

export function SecondaryButtonFlex({  label, color, Icon, iconWidthInRem, disabled = false, onClick }: SecondaryButtonProps) {
  return (
    <Button
      color={color}
      disabled={disabled}
      onClick={() => onClick?.()}
      type="button"
      iconWidthInRem={iconWidthInRem}
    >
     <Icon />
      {label}
    </Button>
  );
}
