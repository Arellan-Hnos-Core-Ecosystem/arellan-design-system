import { useState, useCallback } from 'react'

export function useControllableState<T>({
  value: controlledValue,
  defaultValue,
  onChange,
}: {
  value?: T
  defaultValue: T
  onChange?: (value: T) => void
}) {
  const [internalValue, setInternalValue] = useState<T>(defaultValue)
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : internalValue

  const setValue = useCallback(
    (next: T | ((prev: T) => T)) => {
      const newValue = next instanceof Function ? next(value) : next
      if (!isControlled) setInternalValue(newValue)
      onChange?.(newValue)
    },
    [isControlled, value, onChange]
  )

  return [value, setValue] as const
}
