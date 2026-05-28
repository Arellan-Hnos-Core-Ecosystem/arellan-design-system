import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Toast } from './Toast'

describe('Toast', () => {
  it('renders message', () => {
    render(<Toast message="Operacion exitosa" />)
    expect(screen.getByText('Operacion exitosa')).toBeInTheDocument()
  })

  it('calls onClose when close button clicked', () => {
    const onClose = vi.fn()
    render(<Toast message="Test" onClose={onClose} />)
    fireEvent.click(screen.getByLabelText('Cerrar notificacion'))
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('renders with role="status"', () => {
    render(<Toast message="Test" />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })

  it('applies variant classes', () => {
    const { container } = render(<Toast message="Error" variant="error" />)
    expect(container.firstChild).toHaveClass('border-red-200')
  })

  it('renders progress bar by default', () => {
    const { container } = render(<Toast message="Test" />)
    const progressBar = container.querySelector('.bg-neutral-100')
    expect(progressBar).toBeInTheDocument()
  })

  it('does not render progress bar when duration is 0', () => {
    const { container } = render(<Toast message="Test" duration={0} />)
    const progressBar = container.querySelector('.bg-neutral-100')
    expect(progressBar).not.toBeInTheDocument()
  })
})
