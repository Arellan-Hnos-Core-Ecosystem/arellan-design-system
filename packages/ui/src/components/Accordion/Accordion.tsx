import { useState, type ReactNode } from 'react'
import { cn } from '../../lib/utils'

export interface AccordionItem {
  value: string
  trigger: ReactNode
  content: ReactNode
  disabled?: boolean
}

export interface AccordionProps {
  items: AccordionItem[]
  type?: 'single' | 'multiple'
  defaultValue?: string | string[]
  className?: string
}

export function Accordion({
  items,
  type = 'single',
  defaultValue,
  className,
}: AccordionProps) {
  const [openValues, setOpenValues] = useState<string[]>(() => {
    if (!defaultValue) return []
    return Array.isArray(defaultValue) ? defaultValue : [defaultValue]
  })

  const toggle = (value: string) => {
    setOpenValues((prev) => {
      if (type === 'single') {
        return prev.includes(value) ? [] : [value]
      }
      return prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    })
  }

  return (
    <div className={cn('divide-y divide-neutral-200 rounded-lg border border-neutral-200', className)}>
      {items.map((item) => {
        const isOpen = openValues.includes(item.value)
        return (
          <div key={item.value}>
            <button
              type="button"
              className={cn(
                'flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-primary',
                isOpen && 'bg-neutral-50'
              )}
              onClick={() => toggle(item.value)}
              disabled={item.disabled}
              aria-expanded={isOpen}
            >
              <span className="flex-1">{item.trigger}</span>
              <svg
                className={cn(
                  'h-5 w-5 shrink-0 text-neutral-400 transition-transform duration-200',
                  isOpen && 'rotate-180'
                )}
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={cn(
                'grid overflow-hidden transition-all duration-200',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-4 pt-1 text-sm text-neutral-600">{item.content}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

Accordion.displayName = 'Accordion'
