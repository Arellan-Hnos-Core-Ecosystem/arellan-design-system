import type { Meta, StoryObj } from '@storybook/react'
import { EmptyState } from '@arellan-hnos-core-ecosystem/ui'
import { Button } from '@arellan-hnos-core-ecosystem/ui'

const meta: Meta<typeof EmptyState> = {
  title: 'Display/EmptyState',
  component: EmptyState,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof EmptyState>

export const Default: Story = {
  args: {
    title: 'No hay ordenes de trabajo',
    description: 'Las ordenes de trabajo apareceran aqui cuando se registren nuevos vehiculos.',
  },
}

export const WithAction: Story = {
  args: {
    title: 'Sin gastos registrados',
    description: 'Registra tu primer gasto para empezar el control financiero.',
    action: <Button variant="primary">Registrar gasto</Button>,
  },
}

export const CustomIcon: Story = {
  args: {
    title: 'No se encontraron resultados',
    description: 'Intenta ajustar los filtros de busqueda.',
    icon: (
      <svg className="h-16 w-16 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    action: <Button variant="ghost">Limpiar filtros</Button>,
  },
}
