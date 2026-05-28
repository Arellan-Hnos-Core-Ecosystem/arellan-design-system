import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from './Input'

describe('Input', () => {
  it('renders with label', () => {
    render(<Input label="Nombre" />)
    expect(screen.getByLabelText('Nombre')).toBeInTheDocument()
  })

  it('renders helper text', () => {
    render(<Input label="Email" helperText="Ingrese su correo" />)
    expect(screen.getByText('Ingrese su correo')).toBeInTheDocument()
  })

  it('renders error message', () => {
    render(<Input label="Email" error="Campo requerido" />)
    expect(screen.getByText('Campo requerido')).toBeInTheDocument()
  })

  it('applies error variant when error prop is provided', () => {
    render(<Input label="Email" error="Error" />)
    const input = screen.getByLabelText('Email')
    expect(input.className).toContain('border-status-error')
    expect(input).toHaveAttribute('aria-invalid', 'true')
  })

  it('renders with start icon', () => {
    const { container } = render(<Input startIcon={<span data-testid="icon" />} />)
    expect(container.querySelector('[data-testid="icon"]')).toBeInTheDocument()
  })

  it('renders clearable button when value exists and onClear provided', () => {
    const onClear = vi.fn()
    render(<Input value="test" onChange={() => {}} clearable onClear={onClear} />)
    const clearBtn = screen.getByLabelText('Limpiar campo')
    expect(clearBtn).toBeInTheDocument()
    fireEvent.click(clearBtn)
    expect(onClear).toHaveBeenCalledOnce()
  })

  it('shows character count when showCharCount and maxLength are set', () => {
    render(<Input value="ab" onChange={() => {}} maxLength={10} showCharCount />)
    expect(screen.getByText('2/10')).toBeInTheDocument()
  })

  it('generates id from label', () => {
    render(<Input label="Mi Campo" />)
    const input = screen.getByLabelText('Mi Campo')
    expect(input).toHaveAttribute('id', 'mi-campo')
  })

  it('forwards additional props to input', () => {
    render(<Input label="Test" placeholder="Enter text" disabled />)
    const input = screen.getByLabelText('Test')
    expect(input).toBeDisabled()
    expect(input).toHaveAttribute('placeholder', 'Enter text')
  })
})
