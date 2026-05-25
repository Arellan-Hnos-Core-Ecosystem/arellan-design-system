# arellan-design-system

Sistema de diseño de la Clínica Automotriz Arellan Hnos. Paquete NPM privado `@arellan/ui` con tokens de diseño, componentes React reutilizables e iconografía compartidos entre todos los frontends del ecosistema.

## Descripción

`arellan-design-system` es el repositorio de componentes compartidos. Un cambio en el color primario o en un componente Button actualiza automáticamente todos los frontends que lo importan (`arellan-frontend-web`, `arellan-mobile-app`, `arellan-mechanic-ui`, `arellan-client-portal`).

**No es solo documentación — es código funcional.**

## Paquetes

| Paquete | Descripción |
|---------|-------------|
| `@arellan/ui` | Componentes React + tokens de diseño |
| `@arellan/eslint-config` | Configuración ESLint compartida |
| `@arellan/typescript-config` | Config TypeScript base |

## Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Framework | React 18 + TypeScript |
| Build | Vite + Rollup (library mode) |
| Estilos | Tailwind CSS (plugin mode) |
| Documentación visual | Storybook 8 (Fase 2) |
| Testing | Vitest + React Testing Library |
| Publicación | GitHub Packages (registro privado) |

## Estructura de Carpetas

```
packages/
├── ui/
│   ├── src/
│   │   ├── tokens/
│   │   │   ├── colors.ts           # Paleta de colores como constantes TS
│   │   │   ├── typography.ts       # Fuentes, tamaños, pesos
│   │   │   ├── spacing.ts          # Espaciado base (4px grid)
│   │   │   ├── shadows.ts          # Sombras de elevación
│   │   │   └── index.css           # CSS custom properties (variables)
│   │   ├── components/
│   │   │   ├── Button/             # Variantes: primary, secondary, danger, ghost
│   │   │   ├── Input/              # Text, number, password, search
│   │   │   ├── Table/              # Sortable, paginable, con filtros
│   │   │   ├── Badge/              # Status badges (colores por estado OT)
│   │   │   ├── Modal/              # Dialogs con confirmación
│   │   │   ├── Alert/              # Info, warning, error, success
│   │   │   ├── Card/               # Contenedor con borde y sombra
│   │   │   ├── Spinner/            # Loading states
│   │   │   ├── Toast/              # Notificaciones temporales
│   │   │   ├── StatusIndicator/    # Punto de color con label
│   │   │   └── index.ts            # Barrel exports
│   │   └── index.ts                # Export principal del paquete
│   ├── package.json                # name: "@arellan/ui"
│   └── tsconfig.json
├── eslint-config/
│   ├── index.js
│   └── package.json
└── typescript-config/
    ├── base.json
    ├── nextjs.json
    └── react-library.json

apps/
└── storybook/                      # Documentación visual (Fase 2)
    ├── .storybook/
    └── stories/
```

## Tokens de Diseño

### Colores Principales

```typescript
export const colors = {
  brand: {
    primary: '#1B3A6B',      // Azul marino — confianza y profesionalismo
    secondary: '#F59E0B',    // Amarillo ámbar — acción y urgencia
    accent: '#10B981',       // Verde esmeralda — éxito y confirmación
  },
  status: {
    success: '#16A34A',
    warning: '#D97706',
    error: '#DC2626',
    info: '#2563EB',
  },
  neutral: {
    50: '#F9FAFB',
    // ...escala de grises completa
    900: '#111827',
  }
}
```

### Tipografía

```typescript
export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
  }
}
```

## Componentes MVP

| Componente | Descripción | Usado en |
|-----------|-------------|----------|
| `Button` | Primary, secondary, danger, ghost, icon | Todos |
| `Input` | Text, password, number, search, textarea | Todos |
| `Table` | Sortable, filtrable, paginación | Admin, Finance |
| `Badge` | Estado OT, roles de usuario | Admin, Mechanic |
| `Modal` | Confirmaciones, formularios | Admin, Finance |
| `Alert` | Mensajes de sistema | Todos |
| `Card` | Contenedores de datos | Todos |
| `Spinner` | Loading | Todos |
| `Toast` | Notificaciones temporales | Todos |
| `StatusIndicator` | Uptime, estado servicios | Status dashboard |

## Instalación en Otros Repos

```bash
# Requiere autenticación con GitHub Packages
npm install @arellan/ui --registry=https://npm.pkg.github.com

# En .npmrc del repo consumidor:
@arellan:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

## Uso

```tsx
import { Button, Badge, Table } from '@arellan/ui'
import '@arellan/ui/styles.css'

export function OrdersList() {
  return (
    <Table
      columns={columns}
      data={orders}
      actions={<Button variant="primary">Nueva OT</Button>}
    />
  )
}
```

## Scripts de Desarrollo

```bash
npm install
npm run build        # Build de todos los paquetes
npm run test         # Tests de componentes
npm run lint         # ESLint
npm run storybook    # Servidor Storybook (Fase 2)
npm run build-storybook  # Build estático de Storybook
```

## Publicación

```bash
# Requiere acceso a la organización arellan-tech en GitHub
npm run build
npm publish --workspace packages/ui
```

## Repos Consumidores

- `arellan-frontend-web`
- `arellan-mobile-app`
- `arellan-mechanic-ui`
- `arellan-client-portal`
- `arellan-status-dashboard`

## Licencia

Privado — © 2026 Arellan Hnos. Todos los derechos reservados.
