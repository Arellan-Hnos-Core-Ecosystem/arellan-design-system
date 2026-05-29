# Changelog

## 0.2.0 (2026-05-28)

### Nuevos componentes (20)

**Formularios:**
- `TextArea` — Input multilinea con label, helperText, error
- `Select` — Dropdown nativo con opciones tipadas y placeholder
- `Checkbox` — Checkbox con label, helperText, error, soporte indeterminate
- `Switch` — Toggle switch con label, helperText, 2 tamanos
- `CurrencyInput` — Input monetario con prefijo configurable (PEN, USD), mascara automatica
- `FormField` — Wrapper label + required indicator + error/helperText

**Layout y display:**
- `Container` — Wrapper responsive con max-width configurable
- `EmptyState` — Icono, titulo, descripcion y accion para pantallas vacias
- `Skeleton` — Loading skeleton con variantes (text, circular, rectangular) y animacion (pulse, wave)
- `Avatar` — Imagen con fallback de iniciales, 5 tamanos
- `Tabs` — Compound component (Tabs + TabsList + TabsTrigger + TabsContent)
- `Accordion` — Single/multiple expand con animacion, soporte disabled

**Navegacion:**
- `Breadcrumb` — Miga de pan con iconos, links, separator personalizable
- `Pagination` — Paginacion con ellipsis, first/last, aria completo

**Overlay:**
- `Tooltip` — Tooltip posicionable (top/bottom/left/right) con delay
- `DropdownMenu` — Menu contextual con iconos, items danger, alineacion
- `Drawer` — Panel lateral deslizable (left/right) con backdrop y escape
- `ConfirmDialog` — Modal de confirmacion pre-configurado (danger/warning/primary)
- `DataTable` — Table extendido con busqueda, filtrado, paginacion integrada, sort controlado

**Negocio (dominio Arellan):**
- `OrderStatusBadge` — Badge coloreado por los 8 estados de OT
- `CashAmount` — Monto formateado con signo opcional, colores semaforo

### Tema

- `ThemeProvider` — Contexto de tema (light/dark/system) con persistencia localStorage
- `useTheme` hook — Acceso al estado del tema actual y toggle

### Nuevos tokens de diseno

- `animations` — Duraciones y curvas de easing
- `breakpoints` — Breakpoints responsive (xs-2xl) + queries
- `borderRadius` — Escala de radios (none → full)
- `zIndex` — Escala de z-index

### Nuevos hooks

- `useDisclosure` — Estado open/close/toggle para modales y paneles
- `usePagination` — Logica de paginacion con ellipsis
- `useBreakpoint` — Deteccion de breakpoint activo (mobile/tablet/desktop)

### Mejoras

- `tailwind.config.ts` — Agregado darkMode: 'class', zIndex scale, borderRadius xs/2xl/full, screens xs, animacion shimmer
- README — Documentacion completa con ejemplos de uso para formularios, OT cards, paginacion
- Barrel exports actualizados en todos los indices

---

## 0.1.0 (2026-05-28)

### Initial Release

- **@arellan-hnos-core-ecosystem/ui@0.1.0** — Paquete principal de componentes React + tokens de diseno
- **@arellan-hnos-core-ecosystem/eslint-config@0.1.0** — Configuracion ESLint compartida
- **@arellan-hnos-core-ecosystem/typescript-config@0.1.0** — Configuracion TypeScript base

### Componentes incluidos

- `Button` — 5 variantes (primary, secondary, danger, ghost, outline), 4 tamanos, fullWidth, icon-only, loading state
- `Input` — 3 variantes (default, error, success), 3 tamanos, label, helperText, error message
- `Table` — Sortable, Empty/Loading states, row click, custom rowClassName, actions toolbar
- `Badge` — 6 variantes de color, 3 tamanos
- `Modal` — 4 tamanos, backdrop, animacion slide-up, aria-modal
- `Alert` — 4 variantes con iconos SVG, titulo, descripcion, boton de cierre
- `Card` — Card + CardHeader + CardContent + CardFooter
- `Spinner` — 3 tamanos, label accesible, overlay mode
- `Toast` — 4 variantes, barra de progreso animada, boton de cierre
- `StatusIndicator` — 5 estados, dot indicator con pulse animation

### Tokens de diseno

- Colores: brand (primary, secondary, accent) + status (success, warning, error, info) + neutral scale (50-900)
- Tipografia: Inter (sans), JetBrains Mono (mono)
- Espaciado: 4px grid system
- Sombras: 4 niveles de elevacion
- Radios: 4 niveles (sm, md, lg, xl)
- Animaciones: fade-in, fade-out, slide-up, slide-down, spin-slow

### Infrastructure

- Turborepo monorepo con workspaces
- Vite + TypeScript library mode build
- Tailwind CSS plugin integration
- Vitest + React Testing Library
- GitHub Packages registry (privado)
- CI/CD con GitHub Actions
