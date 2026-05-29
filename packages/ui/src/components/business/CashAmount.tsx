import { cn } from '../../lib/utils'

export interface CashAmountProps {
  amount: number
  currency?: string
  locale?: string
  className?: string
  signed?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

function formatCurrency(amount: number, locale: string, currency: string): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-xl font-semibold',
  xl: 'text-2xl font-bold',
}

export function CashAmount({
  amount,
  currency = 'PEN',
  locale = 'es-PE',
  className,
  signed = false,
  size = 'md',
}: CashAmountProps) {
  const formatted = formatCurrency(amount, locale, currency)
  const isPositive = amount >= 0
  const isNegative = amount < 0

  return (
    <span
      className={cn(
        'tabular-nums',
        sizeClasses[size],
        signed && isNegative && 'text-status-error',
        signed && isPositive && 'text-status-success',
        className
      )}
      title={formatted}
    >
      {signed && isPositive ? '+' : ''}
      {formatted}
    </span>
  )
}

CashAmount.displayName = 'CashAmount'
