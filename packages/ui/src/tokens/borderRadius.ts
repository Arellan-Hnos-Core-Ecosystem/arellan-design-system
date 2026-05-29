export const borderRadius = {
  none: '0',
  xs: '0.125rem',
  sm: '0.25rem',
  DEFAULT: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  '2xl': '1.5rem',
  full: '9999px',
} as const

export type BorderRadiusToken = keyof typeof borderRadius
