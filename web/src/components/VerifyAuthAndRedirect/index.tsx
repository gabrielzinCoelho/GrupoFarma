import { ReactNode } from "react"
import { useAppSelector } from "../../store"
import { Navigate } from "react-router-dom"

interface VerifyAuthAndRedirectPops {
  children: ReactNode,
  to: string
  whenIsLogged?:boolean
}

export function VerifyAuthAndRedirect({children, to, whenIsLogged = false} : VerifyAuthAndRedirectPops){
  
  const {token : userToken} = useAppSelector(store => store.auth)

  const isRedirect = whenIsLogged === !!userToken

  return (
      isRedirect ?
        <Navigate to={to} replace /> :
        children
  )
}