import { useContext } from 'react'
import { SidebarContext } from './sidebar-context'

export function useSidebarContext() {
  return useContext(SidebarContext)
}
