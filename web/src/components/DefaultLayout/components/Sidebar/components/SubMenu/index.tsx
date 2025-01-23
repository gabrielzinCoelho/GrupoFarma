import { SubMenuContainer } from "./styles";
import { useNavigate } from "react-router-dom";

interface SubMenuProps {
  currentUrl: string,
  url: string
  label: string
}

export function SubMenu({ url, currentUrl, label}: SubMenuProps) {
  const navigate = useNavigate()
  const currentRootUrl = currentUrl.split('/')[1]
  const isActive = url === currentRootUrl

  return (
      <SubMenuContainer 
        onClick={() => !isActive && navigate(url)}
        $isActive={isActive}
      >
        <li><span>{label}</span></li>
      </SubMenuContainer>
  )

}