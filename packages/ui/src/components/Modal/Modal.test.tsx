import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Modal } from './Modal'

describe('Modal', () => {
  it('does not render when open is false', () => {
    const { container } = render(
      <Modal open={false} onClose={vi.fn()}>
        Content
      </Modal>
    )
    expect(container.innerHTML).toBe('')
  })

  it('renders when open is true', () => {
    render(
      <Modal open={true} onClose={vi.fn()}>
        Content
      </Modal>
    )
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('renders title and description', () => {
    render(
      <Modal open={true} onClose={vi.fn()} title="Title" description="Description">
        Content
      </Modal>
    )
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  it('renders footer', () => {
    render(
      <Modal open={true} onClose={vi.fn()} footer={<button>OK</button>}>
        Content
      </Modal>
    )
    expect(screen.getByRole('button', { name: /ok/i })).toBeInTheDocument()
  })

  it('calls onClose when backdrop is clicked', () => {
    const onClose = vi.fn()
    render(
      <Modal open={true} onClose={onClose}>
        Content
      </Modal>
    )
    const backdrop = document.querySelector('.fixed.inset-0.bg-black\\/50')
    if (backdrop) fireEvent.click(backdrop)
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('calls onClose when pressing Escape', () => {
    const onClose = vi.fn()
    render(
      <Modal open={true} onClose={onClose}>
        Content
      </Modal>
    )
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('does not call onClose on Escape when closeOnEscape is false', () => {
    const onClose = vi.fn()
    render(
      <Modal open={true} onClose={onClose} closeOnEscape={false}>
        Content
      </Modal>
    )
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).not.toHaveBeenCalled()
  })

  it('has proper aria attributes', () => {
    render(
      <Modal open={true} onClose={vi.fn()} title="Modal Title">
        Content
      </Modal>
    )
    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title')
  })
})
