# arellan-design-system

Sistema de diseno de la Clinica Automotriz Arellan Hnos. Paquete NPM privado `@arellan-hnos-core-ecosystem/ui` con tokens de diseno, componentes React reutilizables, hooks y utilidades compartidos entre todos los frontends del ecosistema.

## Descripcion

`arellan-design-system` es el repositorio de componentes compartidos. Un cambio en el color primario o en un componente Button actualiza automaticamente todos los frontends que lo importan (`arellan-frontend-web`, `arellan-mobile-app`, `arellan-mechanic-ui`, `arellan-client-portal`).

**No es solo documentacion — es codigo funcional, versionado y publicado en GitHub Packages.**

## Paquetes

| Paquete | Descripcion |
|---------|-------------|
| `@arellan-hnos-core-ecosystem/ui` | Componentes React + tokens de diseno + hooks + utilidades |
| `@arellan-hnos-core-ecosystem/eslint-config` | Configuracion ESLint compartida |
| `@arellan-hnos-core-ecosystem/typescript-config` | Config TypeScript base |

## Stack Tecnologico

| Capa | Tecnologia |
|------|-----------|
| Framework | React 18 + TypeScript 5 (strict) |
| Build | Vite + Rollup (library mode: ESM + CJS) |
| Estilos | Tailwind CSS 3 (class-variance-authority + tailwind-merge) |
| Monorepo | Turborepo + npm workspaces |
| Documentacion | Storybook 8 + Chromatic |
| Testing | Vitest + React Testing Library (80% coverage) |
| Publicacion | GitHub Packages (privado, scope @arellan) |
| CI/CD | GitHub Actions (quality checks + publish) |

## Estructura de Carpetas

```
packages/
├── ui/
│   ├── src/
│   │   ├── tokens/
│   │   │   ├── colors.ts           # Paleta de colores
│   │   │   ├── typography.ts       # Fuentes, tamanos, pesos
│   │   │   ├── spacing.ts          # Espaciado 4px grid
│   │   │   ├── shadows.ts          # Sombras de elevacion
│   │   │   ├── animations.ts       # Duraciones y curvas de animacion
│   │   │   ├── breakpoints.ts      # Breakpoints responsive
│   │   │   ├── borderRadius.ts     # Escala de radios
│   │   │   ├── zIndex.ts           # Escala de z-index
│   │   │   ├── tokens.ts           # Export agregado
│   │   │   └── index.ts            # Barrel exports
│   │   ├── components/
│   │   │   ├── Button/             # Variantes: primary, secondary, danger, ghost, outline
│   │   │   ├── Input/              # Text, number, password, search, clearable
│   │   │   ├── TextArea/           # Multiline text, resize vertical
│   │   │   ├── Select/             # Native select con opciones tipadas
│   │   │   ├── Checkbox/           # Checkbox con label y helperText
│   │   │   ├── Switch/             # Toggle switch para preferencias
│   │   │   ├── CurrencyInput/      # Input monetario con mascara S/.
│   │   │   ├── FormField/          # Wrapper label + error + helper
│   │   │   ├── Table/              # Sortable, loading/empty states
│   │   │   ├── DataTable/          # Busqueda, filtrado, paginacion integrada
│   │   │   ├── Badge/              # 6 variantes + dot indicator
│   │   │   ├── Modal/              # Dialog con backdrop, escape, animacion
│   │   │   ├── Alert/              # info, success, warning, error
│   │   │   ├── Card/               # Card + Header + Content + Footer
│   │   │   ├── Spinner/            # 3 tamanos, overlay mode
│   │   │   ├── Toast/              # Barra de progreso, auto-dismiss
│   │   │   ├── StatusIndicator/    # Dot pulsante con label de estado
│   │   │   ├── Container/          # Layout wrapper responsive
│   │   │   ├── EmptyState/         # Icono, titulo, descripcion, accion
│   │   │   ├── Skeleton/           # Loading skeleton (text, circular, rectangular)
│   │   │   ├── Tabs/               # Compound: Tabs > TabsList > TabsTrigger + TabsContent
│   │   │   ├── Accordion/          # Single/multiple expand, animado
│   │   │   ├── Avatar/             # Imagen + fallback con iniciales
│   │   │   ├── Breadcrumb/         # Navegacion jerarquica
│   │   │   ├── Pagination/         # Paginacion con ellipsis
│   │   │   ├── Tooltip/            # Tooltip posicionado (4 direcciones)
│   │   │   ├── DropdownMenu/       # Menu desplegable con items
│   │   │   ├── Drawer/             # Panel lateral con slide
│   │   │   ├── ConfirmDialog/      # Modal de confirmacion (danger, warning, primary)
│   │   │   ├── theme/
│   │   │   │   └── ThemeProvider/  # Tema claro/oscuro/sistema
│   │   │   ├── business/
│   │   │   │   ├── OrderStatusBadge/ # Badge de estado de OT (8 estados)
│   │   │   │   └── CashAmount/       # Monto formateado con signo
│   │   │   └── index.ts            # Barrel exports de componentes
│   │   ├── hooks/
│   │   │   ├── useControllableState.ts
│   │   │   ├── useMediaQuery.ts
│   │   │   ├── useOnClickOutside.ts
│   │   │   ├── useDisclosure.ts
│   │   │   ├── usePagination.ts
│   │   │   ├── useBreakpoint.ts
│   │   │   └── index.ts
│   │   ├── lib/
│   │   │   └── utils.ts            # cn() utility (clsx + tailwind-merge)
│   │   └── index.ts                # Export principal del paquete
│   ├── package.json                # name: "@arellan-hnos-core-ecosystem/ui" v0.2.0
│   ├── tailwind.config.ts          # Tokens extendidos para Tailwind
│   ├── vite.config.ts              # Library mode build config
│   ├── vitest.config.ts            # Vitest + coverage thresholds
│   └── tsconfig.json
├── eslint-config/
│   ├── index.js
│   └── package.json
└── typescript-config/
    ├── base.json
    ├── nextjs.json
    └── react-library.json

apps/
└── storybook/
    ├── .storybook/
    └── stories/
```

## Tokens de Diseno

### Colores

```typescript
{
  brand: {
    primary: '#1B3A6B',      // Azul marino — confianza
    secondary: '#F59E0B',    // Ambar — accion
    accent: '#10B981',       // Esmeralda — exito
    // escala 50-900
  },
  status: {
    success: '#16A34A',
    warning: '#D97706',
    error: '#DC2626',
    info: '#2563EB',
    // backgrounds: successBg, warningBg, errorBg, infoBg
  },
  neutral: { 50: '#F9FAFB', ..., 900: '#111827' }
}
```

### Tipografia

- **Sans**: Inter, system-ui, Segoe UI
- **Mono**: JetBrains Mono, Consolas
- **Sizes**: 2xs (0.625rem) hasta 4xl (2.25rem)
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Espaciado

Sistema base 4px: `0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96`

### Sombras

`elevation-1` a `elevation-4` (profundidad visual progresiva)

### Breakpoints

`xs: 375, sm: 640, md: 768, lg: 1024, xl: 1280, 2xl: 1536`

### Z-Index

`hide: -1, base: 0, docked: 10, dropdown: 100, sticky: 200, banner: 300, overlay: 400, modal: 500, popover: 600, toast: 700, tooltip: 800`

## Componentes

### Componentes Base (17 componentes)

| Componente | Variantes | Uso principal |
|-----------|-----------|--------------|
| `Button` | primary, secondary, danger, ghost, outline + 4 sizes + fullWidth + loading | Todos los frontends |
| `Input` | default, error, success + 3 sizes + label + iconos + clearable | Formularios |
| `TextArea` | default, error + label + helperText | Descripciones, notas |
| `Select` | default, error + 3 sizes + options tipadas | Dropdowns |
| `Checkbox` | label + helperText + error | Seleccion multiple |
| `Switch` | sm/md + label + helperText | Preferencias on/off |
| `CurrencyInput` | S/. prefixed + 3 sizes + mascara | Montos financieros |
| `FormField` | label + required + error + helperText | Wrapper para forms |
| `Badge` | neutral, brand, success, warning, error, info + dot | Estados, etiquetas |
| `StatusIndicator` | active, idle, offline, error, pending + pulse | Estado de servicios |
| `Spinner` | sm/md/lg + label + overlay mode | Loading states |
| `Skeleton` | text, circular, rectangular + pulse/wave | Loading skeletons |
| `Avatar` | xs-xl + imagen + iniciales fallback | Perfiles de usuario |
| `Container` | sm, md, lg, xl, full responsive | Layout wrapper |
| `Table` | sortable + loading + empty + onRowClick + stickyHeader | Datos tabulares |
| `DataTable` | busqueda + filtrado + paginacion + sort | Datos con UI completa |
| `EmptyState` | icono + titulo + descripcion + accion | Estados vacios |

### Componentes de Navegacion (2)

| Componente | Descripcion |
|-----------|-------------|
| `Breadcrumb` | Miga de pan con iconos, links, separadores |
| `Pagination` | Paginacion con ellipsis, first/last, aria labels |

### Componentes de Overlay (5)

| Componente | Descripcion |
|-----------|-------------|
| `Modal` | Dialog modal con backdrop, escape, animacion |
| `Drawer` | Panel lateral deslizable (left/right) |
| `Tooltip` | Tooltip posicionado (4 direcciones) con delay |
| `DropdownMenu` | Menu contextual con iconos, danger items |
| `ConfirmDialog` | Modal de confirmacion para acciones destructivas |
| `Toast` | Notificacion temporal con barra de progreso |
| `Alert` | Banner de sistema con icono y cierre |

### Componentes de Composicion (2)

| Componente | Descripcion |
|-----------|-------------|
| `Tabs` | Compound: Tabs + TabsList + TabsTrigger + TabsContent |
| `Accordion` | Single/multiple expand con animacion CSS |
| `Card` | Card + CardHeader + CardContent + CardFooter + interactive |

### Componentes de Negocio (2)

| Componente | Descripcion |
|-----------|-------------|
| `OrderStatusBadge` | Badge coloreado por estado de OT (RECIBIDO → ENTREGADO) |
| `CashAmount` | Monto formateado con moneda (PEN), signo opcional, colores semaforo |

### Tema

| Componente/Hook | Descripcion |
|----------------|-------------|
| `ThemeProvider` | Contexto de tema claro/oscuro/sistema con deteccion automatica |
| `useTheme` | Hook para acceder al tema actual y cambiarlo |

## Hooks

| Hook | Descripcion |
|------|-------------|
| `useControllableState` | Estado controlado/no-controlado |
| `useMediaQuery` | Deteccion de media queries |
| `useBreakpoint` | Breakpoint activo (xs-xl) deteccion mobile/tablet/desktop |
| `useDisclosure` | Estado open/close/toggle |
| `usePagination` | Logica de paginacion (paginas, ellipsis, hasNext/Previous) |
| `useOnClickOutside` | Deteccion de click fuera de un elemento |

## Instalacion

```bash
# Requiere autenticacion con GitHub Packages
npm install @arellan-hnos-core-ecosystem/ui --registry=https://npm.pkg.github.com

# En .npmrc del repo consumidor:
@arellan-tech:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### Configurar Tailwind en el proyecto consumidor

```typescript
// tailwind.config.ts
import { tailwindConfig } from '@arellan-hnos-core-ecosystem/ui/tailwind'

export default {
  presets: [tailwindConfig],
  content: [
    './src/**/*.{ts,tsx}',
    './node_modules/@arellan-hnos-core-ecosystem/ui/**/*.{js,ts,jsx,tsx}',
  ],
}
```

## Uso Basico

```tsx
import { Button, Badge, Input, Table, DataTable, ThemeProvider } from '@arellan-hnos-core-ecosystem/ui'
import '@arellan-hnos-core-ecosystem/ui/styles.css'

function App() {
  return (
    <ThemeProvider defaultScheme="system">
      <YourApp />
    </ThemeProvider>
  )
}

function OrdersList() {
  return (
    <DataTable
      columns={columns}
      data={orders}
      searchable
      searchPlaceholder="Buscar OT por placa..."
      actions={<Button variant="primary">Nueva OT</Button>}
    />
  )
}
```

### Ejemplo: Formulario de Gasto

```tsx
import { FormField, Input, CurrencyInput, Select, Button } from '@arellan-hnos-core-ecosystem/ui'

function ExpenseForm() {
  return (
    <form>
      <FormField label="Monto" required>
        <CurrencyInput placeholder="0.00" />
      </FormField>
      <FormField label="Categoria" required>
        <Select
          options={[
            { value: 'repuestos', label: 'Repuestos' },
            { value: 'herramientas', label: 'Herramientas' },
            { value: 'servicios', label: 'Servicios externos' },
          ]}
          placeholder="Seleccionar categoria..."
        />
      </FormField>
      <FormField label="Descripcion" required helperText="Minimo 10 caracteres">
        <TextArea placeholder="Detalle del gasto..." rows={3} />
      </FormField>
      <Button type="submit" variant="primary" fullWidth>
        Registrar Gasto
      </Button>
    </form>
  )
}
```

### Ejemplo: Orden de Trabajo

```tsx
import { Card, OrderStatusBadge, Badge, CashAmount, Button } from '@arellan-hnos-core-ecosystem/ui'

function WorkOrderCard({ order }) {
  return (
    <Card interactive onClick={() => navigate(`/orders/${order.id}`)}>
      <CardHeader>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">OT #{order.number}</h3>
          <OrderStatusBadge status={order.status} />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-600">Placa: {order.plate}</p>
        <div className="mt-2 flex justify-between items-end">
          <CashAmount amount={order.total} size="lg" />
          <Badge variant="neutral">{order.mechanic}</Badge>
        </div>
      </CardContent>
    </Card>
  )
}
```

## Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo con watch mode
npm run dev

# Build completo de todos los paquetes
npm run build

# Tests con cobertura (minimo 80%)
npm run test

# Lint + typecheck
npm run lint
npm run typecheck

# Storybook local
npm run storybook

# Publicar @arellan-hnos-core-ecosystem/ui a GitHub Packages
npm run publish:ui
```

### Crear un Nuevo Componente

```bash
# Estructura de archivos para un nuevo componente
packages/ui/src/components/NuevoComponente/
├── NuevoComponente.tsx    # Implementacion
├── NuevoComponente.test.tsx  # Tests (Vitest)
└── index.ts               # Barrel export
```

```tsx
// Ejemplo: NuevoComponente.tsx
import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const variants = cva('...', {
  variants: {
    variant: { default: '...' },
    size: { sm: '...', md: '...', lg: '...' },
  },
  defaultVariants: { variant: 'default', size: 'md' },
})

export interface NuevoComponenteProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof variants> {}

export const NuevoComponente = forwardRef<HTMLElement, NuevoComponenteProps>(
  ({ className, variant, size, ...props }, ref) => {
    return <div className={cn(variants({ variant, size }), className)} ref={ref} {...props} />
  }
)

NuevoComponente.displayName = 'NuevoComponente'
export { variants as nuevoComponenteVariants }
```

## Repos Consumidores

- `arellan-frontend-web` — Panel admin Next.js
- `arellan-mobile-app` — App gerencial PWA
- `arellan-mechanic-ui` — Tablet del taller offline-first
- `arellan-client-portal` — Portal publico de clientes
- `arellan-status-dashboard` — Status page Upptime

## Publicacion

```bash
# Build + publish a GitHub Packages (privado)
npm run publish:ui

# Solo build
npm run build --filter=@arellan-hnos-core-ecosystem/ui

# Version bump
npm run version:ui patch   # v0.2.0 -> v0.2.1
npm run version:ui minor   # v0.2.0 -> v0.3.0
npm run version:ui major   # v0.2.0 -> v1.0.0
```

## Licencia

Privado — (c) 2026 Arellan Hnos. Todos los derechos reservados.
