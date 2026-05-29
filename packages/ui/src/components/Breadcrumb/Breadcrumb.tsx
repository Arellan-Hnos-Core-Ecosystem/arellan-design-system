import { cn } from '../../lib/utils'

export interface BreadcrumbItem {
  label: string
  href?: string
  icon?: React.ReactNode
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  separator?: React.ReactNode
  className?: string
}

export function Breadcrumb({ items, separator, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Miga de pan" className={cn('flex', className)}>
      <ol className="flex items-center gap-1.5 text-sm text-neutral-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={index} className="flex items-center gap-1.5">
              {index > 0 && (
                <span className="select-none text-neutral-300" aria-hidden="true">
                  {separator || (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </span>
              )}
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className="flex items-center gap-1.5 hover:text-neutral-700 transition-colors"
                >
                  {item.icon}
                  {item.label}
                </a>
              ) : (
                <span
                  className={cn(
                    'flex items-center gap-1.5',
                    isLast && 'font-semibold text-neutral-900'
                  )}
                >
                  {item.icon}
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

Breadcrumb.displayName = 'Breadcrumb'
