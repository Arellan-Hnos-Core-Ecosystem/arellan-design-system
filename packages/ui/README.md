# @arellan-hnos-core-ecosystem/ui

Componentes React reutilizables y tokens de diseno para el ecosistema digital de Clinica Automotriz Arellan Hnos.

## Instalacion

```bash
npm install @arellan-hnos-core-ecosystem/ui --registry=https://npm.pkg.github.com
```

### Configuracion .npmrc

```
@arellan-tech:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

## Uso

```tsx
import { Button, Input, Badge, Table, ThemeProvider } from '@arellan-hnos-core-ecosystem/ui'
import '@arellan-hnos-core-ecosystem/ui/styles.css'

function App() {
  return (
    <ThemeProvider defaultScheme="light">
      <Button variant="primary" onClick={() => console.log('click')}>
        Hola Arellan
      </Button>
    </ThemeProvider>
  )
}
```

## Componentes (v0.2.0)

- **Formularios**: Button, Input, TextArea, Select, Checkbox, Switch, CurrencyInput, FormField
- **Display**: Badge, Alert, Card, Spinner, Toast, StatusIndicator, Skeleton, Avatar, EmptyState
- **Layout**: Container
- **Navegacion**: Breadcrumb, Pagination, Tabs, Accordion
- **Overlay**: Modal, Drawer, Tooltip, DropdownMenu, ConfirmDialog
- **Datos**: Table, DataTable
- **Negocio**: OrderStatusBadge, CashAmount
- **Tema**: ThemeProvider

## Licencia

UNLICENSED — Copyright (c) 2026 Arellan Hnos. Software privado. Todos los derechos reservados.
