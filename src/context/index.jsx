import { createContext } from 'react'

export const GlobalContext = createContext()

export default function GlobalSate({ children }) {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>
}
