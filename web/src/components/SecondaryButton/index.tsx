import { Button } from "./styles";

interface SecondaryButtonProps {
  label: string;
  color: string;
  icon: string; // Caminho ou URL do ícone
  widthInRem?: number;
  iconWidthInPx?: number;
  disabled?: boolean;
  onClick?: () => void;
}


export function SecondaryButton({  label, color, icon, widthInRem, iconWidthInPx, disabled = false, onClick }: SecondaryButtonProps) {
  return (
    <Button
      $widthInRem={widthInRem}
      color={color}
      disabled={disabled}
      $iconWidthInPx={iconWidthInPx}
      onClick={() => onClick?.()}
      type="button"
    >
      <img src={icon} alt={label} />
      {label}
    </Button>
  );
}
