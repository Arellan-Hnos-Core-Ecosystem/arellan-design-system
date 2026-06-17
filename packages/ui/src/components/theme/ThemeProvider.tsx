import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type ColorScheme = 'light' | 'dark' | 'system'

interface ThemeContextValue {
  scheme: ColorScheme
  resolved: 'light' | 'dark'
  setScheme: (scheme: ColorScheme) => void
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const STORAGE_KEY = 'arellan-color-scheme'

function getSystemPreference(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getStoredScheme(): ColorScheme {
  if (typeof window === 'undefined') return 'system'
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark' || stored === 'system') return stored
  return 'system'
}

function resolveScheme(scheme: ColorScheme): 'light' | 'dark' {
  if (scheme === 'system') return getSystemPreference()
  return scheme
}

export function ThemeProvider({ children, defaultScheme = 'system' }: { children: ReactNode; defaultScheme?: ColorScheme }) {
  const [scheme, setSchemeState] = useState<ColorScheme>(defaultScheme)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setSchemeState(getStoredScheme())
    setMounted(true)
  }, [])

  useEffect(() => {
    const resolved = resolveScheme(scheme)
    const root = document.documentElement
    if (resolved === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, scheme)
    }
  }, [scheme, mounted])

  useEffect(() => {
    if (scheme !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (getStoredScheme() === 'system') {
        const resolved = resolveScheme('system')
        document.documentElement.classList.toggle('dark', resolved === 'dark')
      }
    }
    mq.addEventListener('change', handleChange)
    return () => mq.removeEventListener('change', handleChange)
  }, [scheme])

  const setScheme = (s: ColorScheme) => setSchemeState(s)

  const toggle = () => {
    const resolved = resolveScheme(scheme)
    setSchemeState(resolved === 'dark' ? 'light' : 'dark')
  }

  const value: ThemeContextValue = {
    scheme,
    resolved: resolveScheme(scheme),
    setScheme,
    toggle,
  }

  // Estructura SIEMPRE identica (Provider > div > children): cambiar el tipo
  // del wrapper entre renders (div -> Provider) desmonta y remonta el arbol
  // completo de la app al hidratar, disparando dobles fetch y errores de
  // dispatcher de hooks (React #310) en produccion. Solo alterna visibility.
  return (
    <ThemeContext.Provider value={value}>
      <div style={{ visibility: mounted ? 'visible' : 'hidden' }}>{children}</div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme debe usarse dentro de un ThemeProvider')
  }
  return context
}
