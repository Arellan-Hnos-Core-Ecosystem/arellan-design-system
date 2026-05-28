# Contributing

Guia para contribuir al sistema de diseno de la Clinica Automotriz Arellan Hnos.

## Flujo de Trabajo

1. **Crear branch** desde `develop`: `feature/design-system/[nombre]`
2. **Desarrollar** componente con tests y stories
3. **PR hacia develop** con checklist completado
4. **Merge con aprobacion** (1 reviewer requerido)
5. **Publicar** a GitHub Packages

## Estructura de un Componente

Cada componente debe tener:

```
packages/ui/src/components/MiComponente/
├── MiComponente.tsx       # Componente implementado
├── MiComponente.test.tsx  # Tests unitarios (Vitest + React Testing Library)
└── index.ts               # Barrel export
```

## Estandares de Codigo

### TypeScript

- `strict: true` en todo el paquete
- Tipado explicito en props (nunca `any`)
- Usar `forwardRef` para componentes que envuelven elementos HTML
- `VariantProps` de CVA para variantes tipadas
- `displayName` en todos los componentes

### Estilos

- Usar `cn()` (clsx + tailwind-merge) para clases condicionales
- Variantes definidas con `class-variance-authority`
- Tokens de Tailwind por nombre (ej: `bg-brand-primary`, no `bg-[#1B3A6B]`)
- Animaciones desde `tailwind.config.ts` (ej: `animate-fade-in`)
- Sin CSS inline ni CSS modules

### Accesibilidad

- `aria-*` atributos en todos los componentes interactivos
- `role` apropiado para componentes compuestos
- Estados de focus visibles (`focus-visible:ring-2`)
- Labels accesibles (via `aria-label` o `aria-labelledby`)
- Soporte para navegacion por teclado (Escape, Tab, Enter)
- Texto en espanol para labels y descripciones aria

### Tests

- Cobertura minima: 80% (global threshold)
- Testear: renderizado, variantes, eventos (click, change), estados (disabled, loading)
- Usar `@testing-library/react` con queries accesibles
- No testear implementacion interna (solo comportamiento visible)
- Archivo de test nombrado: `MiComponente.test.tsx`

### Naming

- Archivos: PascalCase (ej: `MiComponente.tsx`)
- Directorios: PascalCase (ej: `MiComponente/`)
- Exports: named exports (NO default exports)
- Props: `MiComponenteProps`
- Variants: `miComponenteVariants` (camelCase)

## Checklist para Nuevos Componentes

Antes de abrir un PR:

- [ ] Componente implementado con variantes via CVA
- [ ] `forwardRef` si aplica
- [ ] `displayName` configurado
- [ ] Tests con cobertura >= 80%
- [ ] Accesibilidad completa (aria, roles, teclado)
- [ ] Barrel export en `index.ts`
- [ ] Agregado a `components/index.ts`
- [ ] Storybook story en `apps/storybook/stories/`
- [ ] Documentacion de props con ejemplos en story

## Publicacion

```bash
# Asegurar que todo este commiteado y que CI pase
git checkout develop && git pull

# Build + publish
npm run publish:ui

# La CI en GitHub Actions tambien publica al crear un tag de release
git tag v0.3.0
git push --tags
```

## Versionado

Seguimos [SemVer](https://semver.org/):

- **MAJOR** (1.0.0): Breaking changes en API de componentes
- **MINOR** (0.2.0): Nuevos componentes, nuevas variantes (backward compatible)
- **PATCH** (0.1.1): Bug fixes, mejoras de accesibilidad

## Dependencias Externas

El paquete `@arellan/ui` minimiza dependencias externas:

- `class-variance-authority` — Para variantes de componentes
- `clsx` — Para construccion de clases
- `tailwind-merge` — Para resolucion de conflictos Tailwind

**No se agregan** dependencias de UI sin evaluacion previa. El sistema debe mantenerse liviano para funcionar bien en la tablet del taller (offline-first PWA).

## Contacto

Dudas sobre la API de componentes o propuestas de mejora: abrir un issue en el repo.
