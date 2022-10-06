/* eslint-disable import/export */
import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

const Wrapper = ({ children }: any) => {
  return <Router>{children}</Router>
}

/**
 * This function renders a React component with a context provider wrapped around it.
 * @param {ReactElement} component - ReactElement
 * @param options - Omit<RenderOptions, 'wrapper'>
 */
export const renderWithContext = (
  component: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) =>
  render(component, {
    wrapper: Wrapper,
    ...options
  })

export * from '@testing-library/react'
export { renderWithContext as render }
