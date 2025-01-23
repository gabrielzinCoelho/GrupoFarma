import { MenuItem } from "../MenuItem";
import { MenuList } from "./styles";
import iconvendas from '../../../../../../assets/menu-vendas.png'
import iconprodutos from '../../../../../../assets/menu-produtos.png'
import iconclientes from '../../../../../../assets/menu-clientes.png'
import { useLocation } from "react-router-dom";

export function Menu() {

  const location = useLocation()

  return (
    <MenuList>
      <MenuItem
        currentUrl={location.pathname}
        url={['sales']}
        urlRedirect="sales"
        icon={<img src={iconvendas} className="icon" />}
        label="Vendas"
      />
      <MenuItem
        currentUrl={location.pathname}
        url={['products', 'categories']}
        urlRedirect="products"
        icon={<img src={iconprodutos} className="icon" />}
        label="Produtos"
        isDropdown
        subMenu={[
          {
            label: 'Lista de Produtos',
            url: 'products'
          },
          {
            label: 'Categorias',
            url: 'categories'
          }
        ]
        }
      />
      <MenuItem
        currentUrl={location.pathname}
        url={["clients"]}
        urlRedirect="clients"
        icon={<img src={iconclientes} className="icon" />}
        label="Clientes"
      />
    </MenuList>
  )

}