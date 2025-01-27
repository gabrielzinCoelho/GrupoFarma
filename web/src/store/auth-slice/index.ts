import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../lib/axios";
import { jwtDecode } from "jwt-decode";

const tokenKey = '@grupo-farma:token-1.0.0'

interface TokenPayload {
  sub: string
  email: string
  name: string
}

function decodeTokenPayload(token : string) : TokenPayload{

  const payload = jwtDecode<TokenPayload>(token)
  return payload
}

async function fetchTokenInLocalStorage() : Promise<string | null> {

  try{

    const token = localStorage.getItem(tokenKey)
    if(!token) throw new Error('Unauthorized Access')
    
    const validateTokenResponse = await api.get('/sessions/validate-token', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    if(validateTokenResponse.status !== 200) throw new Error('Unauthorized Access')

    return token

    //eslint-disable-next-line
  }catch(err){
    return null
  }

}

async function initializeAuthState() : Promise<AuthState>{

  const token = await fetchTokenInLocalStorage()

  if(!token)
    return { token: null }

  const {name : salespersonName, email : salespersonEmail} = decodeTokenPayload(token)
  return {
    token,
    salespersonEmail,
    salespersonName
  }
}

interface AuthState {
  token: string | null
  salespersonName?: string,
  salespersonEmail?: string
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: await initializeAuthState(),
  reducers: {

    login: (state, action) => {

      const {token} = action.payload
      localStorage.setItem(tokenKey, token)
      const {name, email} = decodeTokenPayload(token)

      state.token = token
      state.salespersonName = name
      state.salespersonEmail = email

    },

    logout: (state) => {
      
      localStorage.removeItem(tokenKey)
      state.token = null
      state.salespersonName = undefined
      state.salespersonEmail = undefined
    }

  }
})

export const {login, logout} = authSlice.actions