import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Spinner } from './Spinner'

describe('Spinner', () => {
  it('renders with role="status"', () => {
    render(<Spinner />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('renders with default label', () => {
    render(<Spinner />)
    expect(screen.getByText('Cargando...')).toBeInTheDocument()
  })

  it('renders with custom label', () => {
    render(<Spinner label="Procesando..." />)
    expect(screen.getByText('Procesando...')).toBeInTheDocument()
  })

  it('renders without label when passed empty string', () => {
    render(<Spinner label="" />)
    expect(screen.queryByText('Cargando...')).not.toBeInTheDocument()
  })

  it('applies size classes', () => {
    const { container } = render(<Spinner size="lg" />)
    const spinnerCircle = container.querySelector('.rounded-full')
    expect(spinnerCircle).toBeInTheDocument()
    expect(spinnerCircle?.className).toContain('h-12')
  })

  it('renders overlay when overlay prop is true', () => {
    const { container } = render(<Spinner overlay />)
    expect(container.firstChild).toHaveClass('fixed')
    expect(container.firstChild).toHaveClass('inset-0')
    expect(container.firstChild).toHaveClass('backdrop-blur-sm')
  })
})
