import { useNavigate } from "react-router-dom";
import { MenuItemContainer } from "./styles";
import { ReactNode } from "react";
import iconarrow from '../../../../../../assets/menu-arrow.png'
import { SubMenu } from "../SubMenu";

interface MenuItemProps {
  currentUrl: string,
  url: string[]
  urlRedirect: string
  icon: ReactNode
  label: string
  isDropdown?: boolean
  subMenu?: {
    url: string
    label: string
  }[]
}

export function MenuItem({ url, urlRedirect, currentUrl, icon, label, isDropdown = false, subMenu }: MenuItemProps) {

  const currentRootUrl = currentUrl.split('/')[1]
  const isActive = url.includes(currentRootUrl)
  const navigate = useNavigate()

  return (
    <>
      <MenuItemContainer 
        onClick={() => !isActive && navigate(urlRedirect)}
        $isActive={isActive && !isDropdown}
      >
        {icon}
        <span>{label}</span>
        {
          isDropdown &&
          <img src={iconarrow} className={`arrow ${isActive ? "open" : ""}`} />
        }
      </MenuItemContainer>
      {
        isDropdown && !!subMenu && isActive &&
        subMenu.map(
          subMenuItem => (
            <SubMenu 
              url={subMenuItem.url}
              label={subMenuItem.label} 
              currentUrl={currentUrl}
            />
          )
          
        )
      }
    </>
  )

}