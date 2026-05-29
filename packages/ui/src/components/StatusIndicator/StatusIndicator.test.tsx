import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatusIndicator } from './StatusIndicator'

describe('StatusIndicator', () => {
  it('renders with label', () => {
    render(<StatusIndicator label="En linea" />)
    expect(screen.getByText('En linea')).toBeInTheDocument()
  })

  it('renders with proper aria-label', () => {
    render(<StatusIndicator label="Servidor" status="active" />)
    expect(screen.getByLabelText('Servidor: active')).toBeInTheDocument()
  })

  it('applies status classes', () => {
    render(<StatusIndicator label="Error" status="error" />)
    const el = screen.getByText('Error')
    expect(el.className).toContain('text-status-error')
  })

  it('applies different status colors', () => {
    const { rerender } = render(<StatusIndicator label="Test" status="active" />)
    let el = screen.getByText('Test')
    expect(el.className).toContain('text-status-success')

    rerender(<StatusIndicator label="Test" status="idle" />)
    el = screen.getByText('Test')
    expect(el.className).toContain('text-brand-secondary')
  })

  it('renders with pulse animation', () => {
    const { container } = render(<StatusIndicator label="Live" pulse />)
    const pingEl = container.querySelector('.animate-ping')
    expect(pingEl).toBeInTheDocument()
  })
})
