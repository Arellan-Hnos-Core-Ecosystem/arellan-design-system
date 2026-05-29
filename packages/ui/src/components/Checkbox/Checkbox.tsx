import { forwardRef, useRef, useEffect, useCallback } from 'react'
import { cn } from '../../lib/utils'

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string
  helperText?: string
  error?: string
  indeterminate?: boolean
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, helperText, error, id, indeterminate, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)
    const internalRef = useRef<HTMLInputElement>(null)

    const callbackRef = useCallback(
      (node: HTMLInputElement | null) => {
        ;(internalRef as React.MutableRefObject<HTMLInputElement | null>).current = node
        if (typeof ref === 'function') {
          ref(node)
        } else if (ref) {
          ;(ref as React.MutableRefObject<HTMLInputElement | null>).current = node
        }
      },
      [ref]
    )

    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate ?? false
      }
    }, [indeterminate])

    return (
      <div className="flex items-start gap-3">
        <div className="flex h-5 items-center">
          <input
            ref={callbackRef}
            id={inputId}
            type="checkbox"
            className={cn(
              'h-4 w-4 rounded border-neutral-300 text-brand-primary focus:ring-2 focus:ring-brand-primary/30 focus:ring-offset-0 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50',
              error && 'border-status-error',
              className
            )}
            aria-invalid={!!error}
            aria-describedby={
              error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
            }
            {...props}
          />
        </div>
        <div className="flex flex-col gap-0.5">
          {label && (
            <label htmlFor={inputId} className="text-sm font-medium text-neutral-700 cursor-pointer leading-none pt-0.5">
              {label}
            </label>
          )}
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
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
