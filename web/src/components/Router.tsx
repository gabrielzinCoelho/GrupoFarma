import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { DefaultLayout } from "./DefaultLayout";
import { CriarProduto } from "../pages/CriarProduto";
import { ListarProdutoDetalhado } from "../pages/ListarProdutoDetalhado";

export function Router() {

  return (
    <Routes>

      {/* Rota de Loign */}
      <Route
        path='/login'
        element={<Login />}
      />

      {/* Layout Padrão */}
      <Route
        path='/'
        element={<DefaultLayout />}
      >
        {/* Rota Raiz (/) */}
        <Route index element={<Navigate to='/products' replace />} />

        {/* Produtos */}
        <Route path='products'>
          <Route index element={<h1>View Products</h1>} />
          <Route path='new' element={<CriarProduto />} />
          <Route path='view' element={<ListarProdutoDetalhado />} />
        </Route>

        {/* Categorias */}
        <Route path='categories'>
          <Route index element={<h1>View Categories</h1>} />
          <Route path='new' element={<h1>New Category</h1>} />
        </Route>

        {/* Clientes */}
        <Route path='clients'>
          <Route index element={<h1>View Clients</h1>} />
          <Route path='new' element={<h1>New Client</h1>} />
        </Route>

        {/* Vendas */}
        <Route path='sales'>
          <Route index element={<h1>View Sales</h1>} />
          <Route path='new' element={<h1>New Sale</h1>} />
        </Route>

      </Route>

      {/* Rota Default */}
      <Route path="*" element={<Navigate to='/products' replace />} />

    </Routes>
  )

}