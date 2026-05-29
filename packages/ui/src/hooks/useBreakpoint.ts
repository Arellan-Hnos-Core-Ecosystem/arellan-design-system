import { useMediaQuery } from './useMediaQuery'
import { breakpoints, type Breakpoint } from '../tokens/breakpoints'

export function useBreakpoint() {
  const isXs = useMediaQuery(`(min-width: ${breakpoints.xs}px)`)
  const isSm = useMediaQuery(`(min-width: ${breakpoints.sm}px)`)
  const isMd = useMediaQuery(`(min-width: ${breakpoints.md}px)`)
  const isLg = useMediaQuery(`(min-width: ${breakpoints.lg}px)`)
  const isXl = useMediaQuery(`(min-width: ${breakpoints.xl}px)`)
  const is2xl = useMediaQuery(`(min-width: ${breakpoints['2xl']}px)`)

  const current: Breakpoint = is2xl ? '2xl' : isXl ? 'xl' : isLg ? 'lg' : isMd ? 'md' : isSm ? 'sm' : 'xs'

  return {
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    is2xl,
    current,
    isMobile: !isMd,
    isTablet: isMd && !isLg,
    isDesktop: isLg,
  }
}
