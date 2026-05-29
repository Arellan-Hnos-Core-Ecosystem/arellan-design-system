import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Alert } from './Alert'

describe('Alert', () => {
  it('renders title and description', () => {
    render(<Alert title="Aviso" description="Esto es una alerta" />)
    expect(screen.getByText('Aviso')).toBeInTheDocument()
    expect(screen.getByText('Esto es una alerta')).toBeInTheDocument()
  })

  it('renders with role="alert"', () => {
    render(<Alert title="Test" />)
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('renders children', () => {
    render(<Alert><button>Action</button></Alert>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('calls onClose when close button clicked', () => {
    const onClose = vi.fn()
    render(<Alert title="Test" onClose={onClose} />)
    fireEvent.click(screen.getByLabelText('Cerrar alerta'))
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('applies variant classes', () => {
    const { container } = render(<Alert variant="error" title="Error" />)
    expect(container.firstChild).toHaveClass('border-red-200')
  })

  it('renders without title or description', () => {
    const { container } = render(<Alert />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
