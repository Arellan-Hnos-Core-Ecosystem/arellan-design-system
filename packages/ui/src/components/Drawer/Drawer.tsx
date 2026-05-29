import { useEffect, useRef, type ReactNode } from 'react'
import { cn } from '../../lib/utils'

export interface DrawerProps {
  open: boolean
  onClose: () => void
  children: ReactNode
  position?: 'left' | 'right'
  size?: 'sm' | 'md' | 'lg'
  title?: string
  className?: string
}

const sizeClasses = {
  sm: 'max-w-xs',
  md: 'max-w-md',
  lg: 'max-w-lg',
}

export function Drawer({
  open,
  onClose,
  children,
  position = 'right',
  size = 'md',
  title,
  className,
}: DrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<Element | null>(null)

  useEffect(() => {
    if (open) {
      previousActiveElement.current = document.activeElement
      document.body.style.overflow = 'hidden'
      setTimeout(() => drawerRef.current?.focus(), 50)
    } else {
      document.body.style.overflow = ''
      if (previousActiveElement.current instanceof HTMLElement) {
        previousActiveElement.current.focus()
      }
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  if (!open) return null

  const translateClass = position === 'right' ? 'translate-x-full' : '-translate-x-full'

  return (
    <div className="fixed inset-0 z-[500]">
      <div
        className="fixed inset-0 bg-black/50 transition-opacity animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={drawerRef}
        tabIndex={-1}
        className={cn(
          'fixed top-0 bottom-0 w-full bg-white shadow-elevation-4 flex flex-col',
          sizeClasses[size],
          position === 'right' ? 'right-0' : 'left-0',
          open ? 'translate-x-0' : translateClass,
          'transition-transform duration-300 ease-out',
          className
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'drawer-title' : undefined}
      >
        {title && (
          <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4 shrink-0">
            <h2 id="drawer-title" className="text-lg font-semibold text-neutral-900">
              {title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="rounded p-1 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-colors"
              aria-label="Cerrar panel"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>
        )}
        <div className="flex-1 overflow-y-auto px-6 py-4">{children}</div>
      </div>
    </div>
  )
}

Drawer.displayName = 'Drawer'
