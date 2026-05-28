import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const inputVariants = cva(
  'flex w-full rounded-md border bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 transition-colors duration-150 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border-neutral-300 focus-visible:border-brand-primary focus-visible:ring-brand-primary/30',
        error:
          'border-status-error focus-visible:border-status-error focus-visible:ring-status-error/30',
        success:
          'border-status-success focus-visible:border-status-success focus-visible:ring-status-success/30',
      },
      inputSize: {
        sm: 'h-8 px-2.5 text-xs',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'md',
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string
  helperText?: string
  error?: string
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  onClear?: () => void
  clearable?: boolean
  maxLength?: number
  showCharCount?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    className,
    variant,
    inputSize,
    type,
    label,
    helperText,
    error,
    id,
    startIcon,
    endIcon,
    onClear,
    clearable,
    maxLength,
    showCharCount,
    value,
    defaultValue,
    ...props
  }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)
    const resolvedVariant = error ? 'error' : variant
    const hasValue = value !== undefined && value !== '' && String(value).length > 0
    const charCount = typeof value === 'string' ? value.length : 0

    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-neutral-700">
            {label}
          </label>
        )}
        <div className="relative">
          {startIcon && (
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400">
              {startIcon}
            </div>
          )}
          <input
            id={inputId}
            type={type}
            value={value}
            defaultValue={defaultValue}
            className={cn(
              inputVariants({ variant: resolvedVariant, inputSize, className }),
              startIcon && 'pl-10',
              (endIcon || clearable) && 'pr-10'
            )}
            ref={ref}
            aria-invalid={!!error}
            aria-describedby={
              error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
            }
            maxLength={maxLength}
            {...props}
          />
          {(endIcon || (clearable && hasValue)) && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              {clearable && hasValue && onClear ? (
                <button
                  type="button"
                  onClick={onClear}
                  className="flex items-center justify-center rounded p-0.5 text-neutral-400 hover:text-neutral-600 transition-colors"
                  aria-label="Limpiar campo"
                  tabIndex={-1}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                  </svg>
                </button>
              ) : endIcon ? (
                <span className="text-neutral-400">{endIcon}</span>
              ) : null}
            </div>
          )}
        </div>
        {error && (
          <p id={`${inputId}-error`} className="text-xs text-status-error" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="text-xs text-neutral-500">
            {helperText}
          </p>
        )}
        {showCharCount && maxLength && (
          <p className="text-xs text-right text-neutral-400">
            {charCount}/{maxLength}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { inputVariants }
