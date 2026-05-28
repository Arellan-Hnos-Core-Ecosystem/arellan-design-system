import { cn } from '../../lib/utils'

export interface PaginationProps {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
  siblings?: number
  showFirstLast?: boolean
  size?: 'sm' | 'md'
  className?: string
}

function generatePages(current: number, total: number, siblings: number): (number | 'ellipsis')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)

  const pages: (number | 'ellipsis')[] = [1]
  const leftBound = Math.max(2, current - siblings)
  const rightBound = Math.min(total - 1, current + siblings)

  if (leftBound > 2) pages.push('ellipsis')
  for (let i = leftBound; i <= rightBound; i++) pages.push(i)
  if (rightBound < total - 1) pages.push('ellipsis')
  pages.push(total)

  return pages
}

const sizeClasses = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
  siblings = 1,
  showFirstLast = true,
  size = 'md',
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null

  const pages = generatePages(page, totalPages, siblings)

  return (
    <nav aria-label="Paginación" className={cn('flex items-center gap-1', className)}>
      {showFirstLast && (
        <button
          type="button"
          className={cn(
            'inline-flex items-center justify-center rounded-md border border-neutral-200 text-neutral-500 transition-colors hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed',
            sizeClasses[size]
          )}
          onClick={() => onPageChange(1)}
          disabled={page === 1}
          aria-label="Primera página"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
      <button
        type="button"
        className={cn(
          'inline-flex items-center justify-center rounded-md border border-neutral-200 text-neutral-500 transition-colors hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed',
          sizeClasses[size]
        )}
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        aria-label="Página anterior"
      >
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </button>
      {pages.map((p, i) =>
        p === 'ellipsis' ? (
          <span
            key={`ellipsis-${i}`}
            className={cn('inline-flex items-center justify-center select-none text-neutral-400', sizeClasses[size])}
            aria-hidden="true"
          >
            ...
          </span>
        ) : (
          <button
            key={p}
            type="button"
            className={cn(
              'inline-flex items-center justify-center rounded-md font-medium transition-colors',
              sizeClasses[size],
              p === page
                ? 'bg-brand-primary text-white shadow-sm'
                : 'border border-neutral-200 text-neutral-700 hover:bg-neutral-50'
            )}
            onClick={() => onPageChange(p)}
            aria-current={p === page ? 'page' : undefined}
            aria-label={`Página ${p}`}
          >
            {p}
          </button>
        )
      )}
      <button
        type="button"
        className={cn(
          'inline-flex items-center justify-center rounded-md border border-neutral-200 text-neutral-500 transition-colors hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed',
          sizeClasses[size]
        )}
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Página siguiente"
      >
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
      {showFirstLast && (
        <button
          type="button"
          className={cn(
            'inline-flex items-center justify-center rounded-md border border-neutral-200 text-neutral-500 transition-colors hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed',
            sizeClasses[size]
          )}
          onClick={() => onPageChange(totalPages)}
          disabled={page === totalPages}
          aria-label="Última página"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414zm6 0a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </nav>
  )
}

Pagination.displayName = 'Pagination'
