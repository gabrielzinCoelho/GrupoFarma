import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { DefaultLayout } from "./DefaultLayout";
import { CriarProduto } from "../pages/CriarProduto";
import { ListarProdutoDetalhado } from "../pages/ListarProdutoDetalhado";
import { VerifyAuthAndRedirect } from "./VerifyAuthAndRedirect";
import { ListarProdutos } from "../pages/ListarProdutos";
import { EditarProduto } from "../pages/EditarProduto";
import { CriarVenda } from "../pages/CriarVenda";
import { ListarVendas } from "../pages/ListarVendas";
import { SaleProductsContextProvider } from "../pages/CriarVenda/contexts/SaleProducts";

export function Router() {

  return (
    <Routes>

      {/* Rota de Loign */}
      <Route
        path='/login'
        element={
          <VerifyAuthAndRedirect to="/products" whenIsLogged>
            <Login />
          </VerifyAuthAndRedirect>
        }
      />

      {/* Layout Padrão */}
      <Route
        path='/'
        element={
          <VerifyAuthAndRedirect to="/login">
            <DefaultLayout />
          </VerifyAuthAndRedirect>
        }
      >
        {/* Rota Raiz (/) */}
        <Route index element={<Navigate to='/products' replace />} />

        {/* Produtos */}
        <Route path='products'>
          <Route index element={<ListarProdutos />} />
          <Route path='new-product' element={<CriarProduto />} />
          <Route path='edit/:id' element={<EditarProduto />} />
          <Route path=':id' element={<ListarProdutoDetalhado />} />
        </Route>

        {/* Categorias */}
        <Route path='categories'>
          <Route index element={<h1>View Categories</h1>} />
          <Route path='new-category' element={<h1>New Category</h1>} />
        </Route>

        {/* Clientes */}
        <Route path='clients'>
          <Route index element={<h1>View Clients</h1>} />
          <Route path='new-client' element={<h1>New Client</h1>} />
        </Route>

        {/* Vendas */}
        <Route path='sales'>
          <Route index element={<ListarVendas/>} />
          <Route path='new-sale' element={
            <SaleProductsContextProvider>
              <CriarVenda/>
            </SaleProductsContextProvider>
          } />
        </Route>

      </Route>

      {/* Rota Default */}
      <Route path="*" element={<Navigate to='/products' replace />} />

    </Routes>
  )

}