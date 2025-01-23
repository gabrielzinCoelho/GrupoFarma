import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { CriarProduto } from "../pages/CriarProduto";

export function Router(){

  return (
    <Routes>
      <Route
        path='/'
        element={<Navigate to='/products' />}
      />
      <Route
        path='/login'
        element={<Login />}
      />
      <Route path='/products'>
        <Route index element={<h1>View Products</h1>} />
        <Route path='new' element={<CriarProduto />} />
      </Route>
    </Routes>
  )

}