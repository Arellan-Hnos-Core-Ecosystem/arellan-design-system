import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

export interface CurrencyInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string
  helperText?: string
  error?: string
  currency?: string
  locale?: string
  inputSize?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'h-8 px-2.5 text-xs',
  md: 'h-10 px-3 text-sm',
  lg: 'h-12 px-4 text-base',
}

export const CurrencyInput = forwardRef<HTMLInputElement, CurrencyInputProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      id,
      currency = 'S/.',
      locale = 'es-PE',
      inputSize = 'md',
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(/[^\d.]/g, '')
      if (raw === '' || raw === '.') {
        e.target.value = raw
        onChange?.(e)
        return
      }
      const num = Number.parseFloat(raw)
      if (!Number.isNaN(num)) {
        const formatted = new Intl.NumberFormat(locale, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(num)
        e.target.value = formatted
      }
      onChange?.(e)
    }

    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-neutral-700">
            {label}
          </label>
        )}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500 font-medium">
            {currency}
          </div>
          <input
            ref={ref}
            id={inputId}
            type="text"
            inputMode="decimal"
            className={cn(
              'flex w-full rounded-md border bg-white pl-12 transition-colors duration-150 text-neutral-900 placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50',
              error
                ? 'border-status-error focus-visible:border-status-error focus-visible:ring-status-error/30'
                : 'border-neutral-300 focus-visible:border-brand-primary focus-visible:ring-brand-primary/30',
              sizeClasses[inputSize],
              className
            )}
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
            aria-invalid={!!error}
            aria-describedby={
              error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
            }
            {...props}
          />
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
      </div>
    )
  }
)

CurrencyInput.displayName = 'CurrencyInput'
