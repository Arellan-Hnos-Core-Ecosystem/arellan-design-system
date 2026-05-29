import { useState, useRef, useEffect, type ReactNode } from 'react'
import { cn } from '../../lib/utils'

export interface DropdownMenuItem {
  label: string
  value: string
  icon?: ReactNode
  disabled?: boolean
  danger?: boolean
  onClick?: () => void
}

export interface DropdownMenuProps {
  trigger: ReactNode
  items: DropdownMenuItem[]
  align?: 'start' | 'end' | 'center'
  className?: string
}

export function DropdownMenu({ trigger, items, align = 'start', className }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('click', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [isOpen])

  const alignStyles = {
    start: 'left-0',
    end: 'right-0',
    center: 'left-1/2 -translate-x-1/2',
  }

  return (
    <div ref={containerRef} className={cn('relative inline-block', className)}>
      <div
        onClick={(e) => {
          e.stopPropagation()
          setIsOpen(!isOpen)
        }}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className="cursor-pointer"
      >
        {trigger}
      </div>
      {isOpen && (
        <div
          ref={menuRef}
          role="menu"
          className={cn(
            'absolute top-full z-[600] mt-1.5 min-w-[180px] rounded-lg border border-neutral-200 bg-white shadow-elevation-3 py-1 overflow-hidden animate-fade-in',
            alignStyles[align]
          )}
        >
          {items.map((item) => (
            <button
              key={item.value}
              type="button"
              role="menuitem"
              className={cn(
                'flex w-full items-center gap-2 px-3 py-2 text-sm transition-colors text-left',
                item.danger
                  ? 'text-status-error hover:bg-red-50'
                  : 'text-neutral-700 hover:bg-neutral-50',
                item.disabled && 'opacity-40 cursor-not-allowed'
              )}
              onClick={(e) => {
                e.stopPropagation()
                if (item.disabled) return
                item.onClick?.()
                setIsOpen(false)
              }}
              disabled={item.disabled}
            >
              {item.icon && <span className="h-4 w-4 shrink-0">{item.icon}</span>}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

DropdownMenu.displayName = 'DropdownMenu'
