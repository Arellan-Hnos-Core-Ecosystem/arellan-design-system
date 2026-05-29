import { useState, useMemo } from 'react'
import { cn } from '../../lib/utils'

export interface Column<T> {
  key: string
  header: string
  accessor?: (row: T) => React.ReactNode
  sortable?: boolean
  className?: string
  headerClassName?: string
}

export type SortDirection = 'asc' | 'desc'

export interface TableProps<T> {
  columns: Column<T>[]
  data: T[]
  keyExtractor: (row: T) => string | number
  isLoading?: boolean
  emptyMessage?: string
  className?: string
  rowClassName?: (row: T) => string | undefined
  onRowClick?: (row: T) => void
  actions?: React.ReactNode
  stickyHeader?: boolean
  initialSortKey?: string
  initialSortDirection?: SortDirection
  onSort?: (key: string, direction: SortDirection) => void
}

export function Table<T = Record<string, unknown>>({
  columns,
  data,
  keyExtractor,
  isLoading = false,
  emptyMessage = 'No hay datos disponibles',
  className,
  rowClassName,
  onRowClick,
  actions,
  stickyHeader = false,
  initialSortKey,
  initialSortDirection = 'asc',
  onSort,
}: TableProps<T>) {
  const [sortKey, setSortKey] = useState<string | undefined>(initialSortKey)
  const [sortDirection, setSortDirection] = useState<SortDirection>(initialSortDirection)

  const sortedData = useMemo(() => {
    if (!sortKey) return data
    return [...data].sort((a, b) => {
      const aVal = String((a as Record<string, unknown>)[sortKey] ?? '')
      const bVal = String((b as Record<string, unknown>)[sortKey] ?? '')
      if (aVal === bVal) return 0
      const comparison = aVal < bVal ? -1 : 1
      return sortDirection === 'asc' ? comparison : -comparison
    })
  }, [data, sortKey, sortDirection])

  const handleSort = (column: Column<T>) => {
    if (!column.sortable) return
    const newDirection = sortKey === column.key && sortDirection === 'asc' ? 'desc' : 'asc'
    setSortKey(column.key)
    setSortDirection(newDirection)
    onSort?.(column.key, newDirection)
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-neutral-400 gap-3">
        <svg className="h-8 w-8 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <p className="text-sm">Cargando datos...</p>
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-neutral-400 gap-2">
        <svg className="h-12 w-12 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
        <p className="text-sm">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className={cn('w-full', className)}>
      {actions && <div className="mb-4 flex items-center gap-2">{actions}</div>}
      <div className="w-full overflow-auto rounded-lg border border-neutral-200">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-neutral-200 bg-neutral-50">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={cn(
                    'px-4 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-neutral-600',
                    col.sortable && 'cursor-pointer select-none hover:bg-neutral-100 transition-colors',
                    stickyHeader && 'sticky top-0 z-10 bg-neutral-50',
                    col.headerClassName
                  )}
                  onClick={() => handleSort(col)}
                  aria-sort={
                    sortKey === col.key
                      ? sortDirection === 'asc'
                        ? 'ascending'
                        : 'descending'
                      : undefined
                  }
                >
                  <span className="inline-flex items-center gap-1.5">
                    {col.header}
                    {col.sortable && sortKey === col.key && (
                      <span className="inline-flex flex-col leading-none">
                        <svg
                          className={cn(
                            'h-3 w-3 -mb-0.5',
                            sortDirection === 'asc' ? 'text-brand-primary' : 'text-neutral-300'
                          )}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 3l7 7H3l7-7z" />
                        </svg>
                        <svg
                          className={cn(
                            'h-3 w-3 -mt-0.5',
                            sortDirection === 'desc' ? 'text-brand-primary' : 'text-neutral-300'
                          )}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 17l-7-7h14l-7 7z" />
                        </svg>
                      </span>
                    )}
                    {col.sortable && sortKey !== col.key && (
                      <svg className="h-3 w-3 text-neutral-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 3l7 7H3l7-7z" />
                        <path d="M10 17l-7-7h14l-7 7z" />
                      </svg>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {sortedData.map((row) => (
              <tr
                key={keyExtractor(row)}
                className={cn(
                  'transition-colors hover:bg-neutral-50',
                  onRowClick && 'cursor-pointer',
                  rowClassName?.(row as T)
                )}
                onClick={() => onRowClick?.(row as T)}
              >
                {columns.map((col) => (
                  <td key={col.key} className={cn('px-4 py-3.5 text-neutral-700', col.className)}>
                    {col.accessor
                      ? col.accessor(row as T)
                      : String((row as Record<string, unknown>)[col.key] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

Table.displayName = 'Table'
