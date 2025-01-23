import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { DefaultLayout } from "./DefaultLayout";
import { CriarProduto } from "../pages/CriarProduto";

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
        </Route>

      </Route>

      {/* Rota Default */}
      <Route path="*" element={<Navigate to='/products' replace />} />

    </Routes>
  )

}