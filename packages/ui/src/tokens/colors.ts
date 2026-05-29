export const colors = {
  brand: {
    primary: '#1B3A6B',
    secondary: '#F59E0B',
    accent: '#10B981',
    50: '#E8EEF6',
    100: '#C5D3E8',
    200: '#9EB5D8',
    300: '#7797C7',
    400: '#597FBA',
    500: '#1B3A6B',
    600: '#17325E',
    700: '#12284E',
    800: '#0E1F3F',
    900: '#09152A',
  },
  status: {
    success: '#16A34A',
    warning: '#D97706',
    error: '#DC2626',
    info: '#2563EB',
    successBg: '#F0FDF4',
    warningBg: '#FFFBEB',
    errorBg: '#FEF2F2',
    infoBg: '#EFF6FF',
  },
  neutral: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  white: '#FFFFFF',
  black: '#000000',
} as const

export type BrandColor = keyof typeof colors.brand
export type StatusColor = keyof typeof colors.status
export type NeutralScale = keyof typeof colors.neutral
