import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full font-semibold transition-colors',
  {
    variants: {
      variant: {
        neutral: 'bg-neutral-100 text-neutral-700',
        brand: 'bg-brand-100 text-brand-primary',
        success: 'bg-green-100 text-status-success',
        warning: 'bg-amber-100 text-status-warning',
        error: 'bg-red-100 text-status-error',
        info: 'bg-blue-100 text-status-info',
      },
      size: {
        sm: 'px-2 py-0.5 text-2xs gap-1',
        md: 'px-2.5 py-0.5 text-xs gap-1.5',
        lg: 'px-3 py-1 text-sm gap-1.5',
      },
      dot: {
        true: 'relative',
      },
    },
    defaultVariants: {
      variant: 'neutral',
      size: 'md',
    },
  }
)

const dotColors: Record<string, string> = {
  neutral: 'bg-neutral-400',
  brand: 'bg-brand-primary',
  success: 'bg-status-success',
  warning: 'bg-status-warning',
  error: 'bg-status-error',
  info: 'bg-status-info',
}

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean
}

export function Badge({ className, variant, size, dot = false, children, ...props }: BadgeProps) {
  const resolvedVariant = variant ?? 'neutral'
  return (
    <span className={cn(badgeVariants({ variant, size, dot, className }))} {...props}>
      {dot && (
        <span
          className={cn(
            'inline-block h-1.5 w-1.5 rounded-full',
            dotColors[resolvedVariant]
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  )
}

Badge.displayName = 'Badge'

export { badgeVariants }
