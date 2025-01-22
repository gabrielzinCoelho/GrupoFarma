import { SidebarContainer, SidebarHeader, Profile, MenuList, MenuItem, SubMenu } from "./styles";
import { useState } from "react";
import logo from '../../assets/logo.png'
import profilepic from '../../assets/profile-pic.png'
import profileoptions from '../../assets/profile-options.png'
import iconvendas from '../../assets/menu-vendas.png'
import iconprodutos from '../../assets/menu-produtos.png'
import iconclientes from '../../assets/menu-clientes.png'
import iconarrow from '../../assets/menu-arrow.png'

export function Sidebar() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  
  return (
    <SidebarContainer>
      {/* Header */}
      <SidebarHeader>
        <div className="logo">
          <img src={logo} alt="Grupo Farma" />
          <h2>Grupo Farma</h2>
        </div>
      </SidebarHeader>

      {/* Profile */}
      <Profile>
        <img src={profilepic} alt="User" className="profilepic"/>
        <div>
          <h3>Isac</h3>
          <span>Admin</span>
        </div>
        <img src={profileoptions} alt="User" className="profileoptions"/>
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

    </SidebarContainer>
  );
}
