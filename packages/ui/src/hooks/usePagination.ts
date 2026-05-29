import { useMemo } from 'react'

export interface UsePaginationParams {
  total: number
  page: number
  pageSize: number
  siblings?: number
}

export interface PaginationResult {
  totalPages: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  pages: (number | 'ellipsis')[]
}

export function usePagination({
  total,
  page,
  pageSize,
  siblings = 1,
}: UsePaginationParams): PaginationResult {
  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  const hasNextPage = page < totalPages
  const hasPreviousPage = page > 1

  const pages = useMemo(() => {
    const pages: (number | 'ellipsis')[] = []

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
      return pages
    }

    pages.push(1)

    const leftBound = Math.max(2, page - siblings)
    const rightBound = Math.min(totalPages - 1, page + siblings)

    if (leftBound > 2) pages.push('ellipsis')
    for (let i = leftBound; i <= rightBound; i++) pages.push(i)
    if (rightBound < totalPages - 1) pages.push('ellipsis')

    pages.push(totalPages)
    return pages
  }, [totalPages, page, siblings])

  return { totalPages, hasNextPage, hasPreviousPage, pages }
}
