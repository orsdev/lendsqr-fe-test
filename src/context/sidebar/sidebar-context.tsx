import {
  useState,
  createContext,
  Dispatch,
  ReactNode,
  FC,
  useMemo
} from 'react'

interface IContextProps {
  showSidebar: boolean
  setShowSidebar: Dispatch<boolean>
}

interface IContextProviderProps {
  children: ReactNode
}

export const SidebarContext = createContext<IContextProps>({
  showSidebar: true,
  setShowSidebar: () => {}
})

export const SidebarContextProvider: FC<IContextProviderProps> = ({
  children
}) => {
  const [showSidebar, setShowSidebar] = useState(false)

  const value = useMemo(() => {
    return { showSidebar, setShowSidebar }
  }, [showSidebar])

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  )
}
