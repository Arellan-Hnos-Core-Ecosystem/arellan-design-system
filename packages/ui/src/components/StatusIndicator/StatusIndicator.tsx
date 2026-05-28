import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const statusIndicatorVariants = cva(
  'inline-flex items-center gap-2 font-medium',
  {
    variants: {
      status: {
        active: 'text-status-success',
        idle: 'text-brand-secondary',
        offline: 'text-neutral-400',
        error: 'text-status-error',
        pending: 'text-status-info',
      },
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base',
      },
    },
    defaultVariants: {
      status: 'active',
      size: 'md',
    },
  }
)

const dotColors: Record<string, string> = {
  active: 'bg-status-success',
  idle: 'bg-brand-secondary',
  offline: 'bg-neutral-400',
  error: 'bg-status-error',
  pending: 'bg-status-info',
}

export interface StatusIndicatorProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statusIndicatorVariants> {
  label: string
  pulse?: boolean
}

export function StatusIndicator({
  className,
  status,
  size,
  label,
  pulse = false,
  ...props
}: StatusIndicatorProps) {
  const resolvedStatus = status ?? 'active'
  const dotSize = size === 'sm' ? 'h-2 w-2' : size === 'lg' ? 'h-3.5 w-3.5' : 'h-2.5 w-2.5'
  const dotColor = dotColors[resolvedStatus]

  return (
    <span
      className={cn(statusIndicatorVariants({ status, size, className }))}
      aria-label={`${label}: ${resolvedStatus}`}
      {...props}
    >
      <span className={cn('relative flex shrink-0', dotSize)}>
        <span className={cn('absolute inline-flex h-full w-full rounded-full', dotColor)} />
        {pulse && (
          <span
            className={cn(
              'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
              dotColor
            )}
          />
        )}
      </span>
      {label}
    </span>
  )
}

StatusIndicator.displayName = 'StatusIndicator'

export { statusIndicatorVariants }
