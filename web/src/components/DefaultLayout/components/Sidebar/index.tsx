import { SidebarContainer, SidebarHeader, SidebarContent, Profile, MenuList, MenuItem, SubMenu, UserProfile } from "./styles";
import { useState } from "react";
import logo from '../../../../assets/logo.png'
import profilepic from '../../../../assets/profile-pic.png'
import profileoptions from '../../../../assets/profile-options.png'
import iconvendas from '../../../../assets/menu-vendas.png'
import iconprodutos from '../../../../assets/menu-produtos.png'
import iconclientes from '../../../../assets/menu-clientes.png'
import iconarrow from '../../../../assets/menu-arrow.png'

export function Sidebar() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  
  return (
    <SidebarContainer>
      {/* Header */}
      <SidebarHeader>
        <div>
          <img src={logo} alt="Grupo Farma" />
        </div>
        <h2>Grupo Farma</h2>
      </SidebarHeader>

      <SidebarContent>
        {/* Profile */}
        <Profile>
          <UserProfile>
            <img src={profilepic} alt="User"/>
            <div>
              <h3>Isac</h3>
              <span>Admin</span>
            </div>
          </UserProfile>
          <img src={profileoptions} alt="User"/>
        </Profile>

        {/* Lista de menus */}
        <MenuList>
          <MenuItem>
            <img src={iconvendas} className="icon"/>
            <span>Vendas</span>
          </MenuItem>

          <MenuItem onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}>
            <img src={iconprodutos} className="icon"/>
            <span>Produtos</span>
            <img src={iconarrow} className={`arrow ${isSubMenuOpen ? "open" : ""}`}/>
          </MenuItem>
          {isSubMenuOpen && (
            <SubMenu>
              <li><span>Lista de Produtos</span></li>
              <li><span>Categorias</span></li>
            </SubMenu>
          )}

          <MenuItem>
            <img src={iconclientes} className="icon"/>
            <span>Clientes</span>
          </MenuItem>
        </MenuList>
      </SidebarContent>
    </SidebarContainer>
  );
}