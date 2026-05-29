import type { Meta, StoryObj } from '@storybook/react'
import { Table } from '@arellan-hnos-core-ecosystem/ui'

const data = [
  { id: 1, nombre: 'Juan Perez', rol: 'Mecanico', estado: 'Activo' },
  { id: 2, nombre: 'Maria Garcia', rol: 'Administrador', estado: 'Activo' },
  { id: 3, nombre: 'Carlos Lopez', rol: 'Cliente', estado: 'Inactivo' },
]

const columns = [
  { key: 'nombre', header: 'Nombre', sortable: true },
  { key: 'rol', header: 'Rol' },
  { key: 'estado', header: 'Estado', sortable: true },
]

const meta: Meta<typeof Table<Record<string, unknown>>> = {
  title: 'Components/Table',
  component: Table,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    stickyHeader: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Table>

export const Default: Story = {
  args: {
    columns,
    data,
    keyExtractor: (row) => (row as Record<string, unknown>).id as number,
  },
}

export const Empty: Story = {
  args: {
    columns,
    data: [],
    keyExtractor: (row) => (row as Record<string, unknown>).id as number,
  },
}

export const Loading: Story = {
  args: {
    columns,
    data: [],
    keyExtractor: (row) => (row as Record<string, unknown>).id as number,
    isLoading: true,
  },
}

export const WithActions: Story = {
  args: {
    columns,
    data,
    keyExtractor: (row) => (row as Record<string, unknown>).id as number,
    actions: <button style={{ padding: '8px 16px', background: '#1B3A6B', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer' }}>Nuevo Usuario</button>,
  },
}

export const WithRowClick: Story = {
  args: {
    columns,
    data,
    keyExtractor: (row) => (row as Record<string, unknown>).id as number,
    onRowClick: (row) => alert(`Clicked: ${(row as Record<string, unknown>).nombre}`),
  },
}
