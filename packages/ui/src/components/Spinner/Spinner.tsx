import { cn } from '../../lib/utils'

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
  label?: string
  overlay?: boolean
}

const sizeClasses = {
  sm: 'h-4 w-4 border-2',
  md: 'h-8 w-8 border-[3px]',
  lg: 'h-12 w-12 border-4',
}

export function Spinner({
  className,
  size = 'md',
  label = 'Cargando...',
  overlay = false,
  ...props
}: SpinnerProps) {
  const spinner = (
    <div
      className={cn('flex flex-col items-center justify-center gap-3', className)}
      role="status"
      aria-label={label}
      {...props}
    >
      <div
        className={cn(
          'animate-spin rounded-full border-neutral-200 border-t-brand-primary',
          sizeClasses[size]
        )}
      />
      {label && <span className="text-sm text-neutral-500">{label}</span>}
    </div>
  )

  if (overlay) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
        {spinner}
      </div>
    )
  }

  return spinner
}

Spinner.displayName = 'Spinner'
