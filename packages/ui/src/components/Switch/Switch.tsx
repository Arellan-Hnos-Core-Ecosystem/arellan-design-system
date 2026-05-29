import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string
  helperText?: string
  size?: 'sm' | 'md'
}

const sizeStyles = {
  sm: { track: 'h-4 w-8', thumb: 'h-3 w-3', translate: 'translate-x-4' },
  md: { track: 'h-5 w-10', thumb: 'h-4 w-4', translate: 'translate-x-5' },
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, helperText, id, size = 'md', checked, defaultChecked, onChange, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)
    const styles = sizeStyles[size]

    return (
      <div className="flex items-center gap-3">
        <button
          type="button"
          role="switch"
          aria-checked={checked ?? defaultChecked ?? false}
          aria-labelledby={label ? inputId : undefined}
          className={cn(
            'relative inline-flex shrink-0 cursor-pointer rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            styles.track,
            (checked ?? defaultChecked) ? 'bg-brand-primary' : 'bg-neutral-300',
            className
          )}
          onClick={() => {
            const input = document.getElementById(inputId!) as HTMLInputElement
            if (input) {
              input.click()
            }
          }}
          {...(props as React.HTMLAttributes<HTMLButtonElement>)}
        >
          <span
            className={cn(
              'inline-block rounded-full bg-white shadow transform transition-transform duration-200',
              styles.thumb,
              (checked ?? defaultChecked) ? styles.translate : 'translate-x-0.5'
            )}
          />
        </button>
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          className="sr-only"
          {...props}
        />
        <div className="flex flex-col">
          {label && (
            <label htmlFor={inputId} className="text-sm font-medium text-neutral-700 cursor-pointer">
              {label}
            </label>
          )}
          {helperText && (
            <p className="text-xs text-neutral-500">{helperText}</p>
          )}
        </div>
      </div>
    )
  }
)

Switch.displayName = 'Switch'
