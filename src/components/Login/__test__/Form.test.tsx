import userEvent from '@testing-library/user-event'
import { screen, render, waitFor } from 'test-utils/testing-library-utils'
import Form from '../Form'

describe('Login Form', () => {
  it('should render email input', () => {
    render(<Form />)
    const element = screen.getByPlaceholderText(/email/i)
    expect(element).toBeInTheDocument()
  })

  it('should render password input', () => {
    render(<Form />)
    const element = screen.getByPlaceholderText(/password/i)
    expect(element).toBeInTheDocument()
  })

  it('empty fields should render error messages when submitted', async () => {
    render(<Form />)

    const button = screen.getByRole('button', {
      name: /log in/i
    })

    expect(button).toBeInTheDocument()

    // Click button to trigger submit event
    userEvent.click(button)

    await waitFor(() => {
      expect(screen.getAllByRole('alert')).toHaveLength(2)
    })
  })

  it('should show `Email not valid` error message for wrong email address', async () => {
    render(<Form />)

    const input = screen.getByPlaceholderText(/email/i)

    expect(input).toBeInTheDocument()

    /* Typing the text 'Testing' into the input field. */
    userEvent.type(input, 'Testing')

    const button = screen.getByRole('button', {
      name: /log in/i
    })

    expect(button).toBeInTheDocument()

    // Click button to trigger submit event
    userEvent.click(button)

    await waitFor(() => {
      expect(screen.getByText(/Email not valid/i)).toBeInTheDocument()
    })
  })

  it('should toggle input type between `text` and `password` when show/hide button is clicked', async () => {
    render(<Form />)

    const input = screen.getByPlaceholderText(/password/i)
    expect(input).toBeInTheDocument()

    expect(input).toHaveAttribute('type', 'password')

    const buttonShow = screen.getByRole('button', {
      name: /show/i
    })

    expect(buttonShow).toBeInTheDocument()

    // Click show button
    userEvent.click(buttonShow)

    expect(buttonShow).not.toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'text')

    const buttonHide = screen.getByRole('button', {
      name: /hide/i
    })

    expect(buttonHide).toBeInTheDocument()

    // click hide button
    userEvent.click(buttonHide)

    expect(buttonHide).not.toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'password')
  })
})
