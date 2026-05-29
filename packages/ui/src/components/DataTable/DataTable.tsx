import { useState, useMemo } from 'react'
import { Table, type Column, type SortDirection } from '../Table/Table'
import { Pagination } from '../Pagination/Pagination'
import { Input } from '../Input/Input'
import { cn } from '../../lib/utils'

export interface DataTableProps<T> {
  columns: Column<T>[]
  data: T[]
  keyExtractor: (row: T) => string | number
  isLoading?: boolean
  emptyMessage?: string
  className?: string
  rowClassName?: (row: T) => string | undefined
  onRowClick?: (row: T) => void
  stickyHeader?: boolean
  searchPlaceholder?: string
  searchable?: boolean
  pageSize?: number
  pageSizeOptions?: number[]
  showPagination?: boolean
  actions?: React.ReactNode
}

export function DataTable<T = Record<string, unknown>>({
  columns,
  data,
  keyExtractor,
  isLoading = false,
  emptyMessage = 'No hay datos disponibles',
  className,
  rowClassName,
  onRowClick,
  stickyHeader = false,
  searchPlaceholder = 'Buscar...',
  searchable = false,
  pageSize = 20,
  pageSizeOptions = [10, 20, 50, 100],
  showPagination = true,
  actions,
}: DataTableProps<T>) {
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPageSize, setCurrentPageSize] = useState(pageSize)
  const [sortKey, setSortKey] = useState<string>()
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc')

  const filtered = useMemo(() => {
    if (!searchable || !search) return data
    const lower = search.toLowerCase()
    return data.filter((row) =>
      columns.some((col) => {
        const val = col.accessor ? col.accessor(row) : String((row as Record<string, unknown>)[col.key] ?? '')
        return val != null && String(val).toLowerCase().includes(lower)
      })
    )
  }, [data, search, searchable, columns])

  const sorted = useMemo(() => {
    if (!sortKey) return filtered
    return [...filtered].sort((a, b) => {
      const aVal = String((a as Record<string, unknown>)[sortKey] ?? '')
      const bVal = String((b as Record<string, unknown>)[sortKey] ?? '')
      if (aVal === bVal) return 0
      return (aVal < bVal ? -1 : 1) * (sortDirection === 'asc' ? 1 : -1)
    })
  }, [filtered, sortKey, sortDirection])

  const totalPages = Math.ceil(sorted.length / currentPageSize)
  const paginated = sorted.slice(
    (currentPage - 1) * currentPageSize,
    currentPage * currentPageSize
  )

  const handleSort = (key: string, direction: SortDirection) => {
    setSortKey(key)
    setSortDirection(direction)
    setCurrentPage(1)
  }

  const handleSearch = (value: string) => {
    setSearch(value)
    setCurrentPage(1)
  }

  return (
    <div className={cn('space-y-4', className)}>
      {(searchable || actions) && (
        <div className="flex items-center gap-4 flex-wrap">
          {searchable && (
            <div className="flex-1 min-w-[240px] max-w-md">
              <Input
                placeholder={searchPlaceholder}
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                startIcon={
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                clearable
                onClear={() => handleSearch('')}
              />
            </div>
          )}
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      )}
      <Table
        columns={columns}
        data={paginated}
        keyExtractor={keyExtractor}
        isLoading={isLoading}
        emptyMessage={emptyMessage}
        rowClassName={rowClassName}
        onRowClick={onRowClick}
        stickyHeader={stickyHeader}
        initialSortKey={sortKey}
        initialSortDirection={sortDirection}
        onSort={handleSort}
      />
      {showPagination && sorted.length > 0 && (
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2 text-sm text-neutral-500">
            <span>
              {(currentPage - 1) * currentPageSize + 1}–{Math.min(currentPage * currentPageSize, sorted.length)} de{' '}
              {sorted.length}
            </span>
            <span className="text-neutral-300">|</span>
            <select
              value={currentPageSize}
              onChange={(e) => {
                setCurrentPageSize(Number(e.target.value))
                setCurrentPage(1)
              }}
              className="border-0 bg-transparent text-sm text-neutral-500 cursor-pointer focus:outline-none"
              aria-label="Registros por pagina"
            >
              {pageSizeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt} por pagina
                </option>
              ))}
            </select>
          </div>
          <Pagination
            page={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            size="sm"
          />
        </div>
      )}
    </div>
  )
}

DataTable.displayName = 'DataTable'
