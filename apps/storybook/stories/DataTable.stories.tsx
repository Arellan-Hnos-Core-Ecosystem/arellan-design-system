import type { Meta, StoryObj } from '@storybook/react'
import { DataTable, type Column } from '@arellan/ui'

interface Order {
  id: number
  plate: string
  client: string
  mechanic: string
  status: string
  total: number
}

const columns: Column<Order>[] = [
  { key: 'id', header: 'OT #', sortable: true },
  { key: 'plate', header: 'Placa', sortable: true },
  { key: 'client', header: 'Cliente' },
  { key: 'mechanic', header: 'Mecanico' },
  {
    key: 'status',
    header: 'Estado',
    accessor: (row) => (
      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">
        {row.status}
      </span>
    ),
  },
  {
    key: 'total',
    header: 'Total',
    sortable: true,
    accessor: (row) => `S/.${row.total.toFixed(2)}`,
    className: 'text-right font-medium',
  },
]

const data: Order[] = [
  { id: 1001, plate: 'ABC-123', client: 'Juan Perez', mechanic: 'Ricardo', status: 'Entregado', total: 450.00 },
  { id: 1002, plate: 'XYZ-789', client: 'Maria Lopez', mechanic: 'Luis', status: 'En proceso', total: 820.50 },
  { id: 1003, plate: 'DEF-456', client: 'Carlos Ruiz', mechanic: 'Juan', status: 'Listo', total: 350.00 },
  { id: 1004, plate: 'GHI-012', client: 'Ana Torres', mechanic: 'Ricardo', status: 'Diagnostico', total: 180.00 },
  { id: 1005, plate: 'JKL-345', client: 'Pedro Diaz', mechanic: 'Luis', status: 'Entregado', total: 2450.00 },
  { id: 1006, plate: 'MNO-678', client: 'Sofia Garcia', mechanic: 'Juan', status: 'En proceso', total: 620.00 },
  { id: 1007, plate: 'PQR-901', client: 'Diego Vega', mechanic: 'Ricardo', status: 'Presupuestado', total: 1500.00 },
]

const meta: Meta<typeof DataTable> = {
  title: 'Business/DataTable',
  component: DataTable,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DataTable>

export const Default: Story = {
  args: {
    columns,
    data,
    keyExtractor: (row: Order) => row.id,
    searchable: true,
    searchPlaceholder: 'Buscar por placa o cliente...',
  },
}

export const Empty: Story = {
  args: {
    columns,
    data: [],
    keyExtractor: (row: Order) => row.id,
    emptyMessage: 'No hay ordenes de trabajo registradas',
  },
}

export const Loading: Story = {
  args: {
    columns,
    data,
    keyExtractor: (row: Order) => row.id,
    isLoading: true,
  },
}
