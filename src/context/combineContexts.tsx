import { FC, ReactNode } from 'react'
import { SidebarContextProvider } from './sidebar/sidebar-context'

interface IContextProviderProps {
  children: ReactNode
}

export const AppContextProvider: FC<IContextProviderProps> = ({ children }) => (
  <SidebarContextProvider>{children}</SidebarContextProvider>
)
