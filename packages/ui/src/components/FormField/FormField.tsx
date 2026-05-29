import { cn } from '../../lib/utils'

export interface FormFieldProps {
  children: React.ReactNode
  label?: string
  helperText?: string
  error?: string
  required?: boolean
  className?: string
  htmlFor?: string
}

export function FormField({
  children,
  label,
  helperText,
  error,
  required = false,
  className,
  htmlFor,
}: FormFieldProps) {
  const fieldId = htmlFor || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

  return (
    <div className={cn('flex w-full flex-col gap-1.5', className)}>
      {label && (
        <label htmlFor={fieldId} className="text-sm font-medium text-neutral-700">
          {label}
          {required && <span className="ml-0.5 text-status-error">*</span>}
        </label>
      )}
      {children}
      {error && (
        <p id={fieldId ? `${fieldId}-error` : undefined} className="text-xs text-status-error" role="alert">
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={fieldId ? `${fieldId}-helper` : undefined} className="text-xs text-neutral-500">
          {helperText}
        </p>
      )}
    </div>
  )
}

FormField.displayName = 'FormField'
