import { FC, ReactNode } from 'react'
import Sidebar from 'components/Sidebar/Index'
import Navigation from 'components/Navigation/Navigation'

const AppLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Navigation />
      <div className="layout__content">{children}</div>
    </>
  )
}

export default AppLayout
