import { useEffect, useRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const toastVariants = cva(
  'relative flex items-center gap-3 rounded-lg px-4 py-3 pr-12 text-sm shadow-elevation-3 animate-slide-up overflow-hidden',
  {
    variants: {
      variant: {
        info: 'border border-blue-200 bg-white text-neutral-900',
        success: 'border border-green-200 bg-white text-neutral-900',
        warning: 'border border-amber-200 bg-white text-neutral-900',
        error: 'border border-red-200 bg-white text-neutral-900',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
)

const progressColors = {
  info: 'bg-blue-500',
  success: 'bg-green-500',
  warning: 'bg-amber-500',
  error: 'bg-red-500',
}

const variantIcons = {
  info: (
    <svg className="h-5 w-5 shrink-0 text-blue-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
    </svg>
  ),
  success: (
    <svg className="h-5 w-5 shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
    </svg>
  ),
  warning: (
    <svg className="h-5 w-5 shrink-0 text-amber-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
    </svg>
  ),
  error: (
    <svg className="h-5 w-5 shrink-0 text-red-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
    </svg>
  ),
}

export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {
  message: string
  onClose?: () => void
  duration?: number
}

export function Toast({
  className,
  variant,
  message,
  onClose,
  duration = 5000,
  ...props
}: ToastProps) {
  const progressRef = useRef<HTMLDivElement>(null)
  const resolvedVariant = variant ?? 'info'

  useEffect(() => {
    if (duration > 0 && progressRef.current) {
      progressRef.current.style.animation = `shrink ${duration}ms linear forwards`
    }
  }, [duration])

  return (
    <div
      className={cn(toastVariants({ variant, className }))}
      role="status"
      aria-live="polite"
      {...props}
    >
      <span className="flex shrink-0">{variantIcons[resolvedVariant]}</span>
      <span className="flex-1 text-sm">{message}</span>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded p-1 text-neutral-400 hover:text-neutral-600 transition-colors"
          aria-label="Cerrar notificacion"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      )}
      {duration > 0 && (
        <div className="absolute bottom-0 left-0 h-1 w-full overflow-hidden rounded-b-lg bg-neutral-100">
          <div
            ref={progressRef}
            className={cn(
              'h-full w-full rounded-b-lg',
              resolvedVariant ? progressColors[resolvedVariant] : progressColors.info
            )}
          />
        </div>
      )}
    </div>
  )
}

Toast.displayName = 'Toast'

export { toastVariants }
