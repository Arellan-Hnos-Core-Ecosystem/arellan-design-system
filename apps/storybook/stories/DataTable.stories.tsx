import type { Meta } from '@storybook/react'
import { DataTable, type Column } from '@arellan-hnos-core-ecosystem/ui'
import { OrderStatusBadge } from '@arellan-hnos-core-ecosystem/ui'
import { CashAmount } from '@arellan-hnos-core-ecosystem/ui'

interface Order {
  id: number
  plate: string
  client: string
  mechanic: string
  status: 'ENTREGADO' | 'EN_PROCESO' | 'LISTO' | 'EN_DIAGNOSTICO' | 'PRESUPUESTADO'
  total: number
}

const columns: Column<Order>[] = [
  { key: 'id', header: 'OT #', sortable: true },
  { key: 'plate', header: 'Placa' },
  { key: 'client', header: 'Cliente' },
  {
    key: 'status',
    header: 'Estado',
    accessor: (row) => <OrderStatusBadge status={row.status} size="sm" />,
  },
  {
    key: 'total',
    header: 'Total',
    sortable: true,
    accessor: (row) => <CashAmount amount={row.total} size="sm" />,
    className: 'text-right',
  },
]

const data: Order[] = [
  { id: 1001, plate: 'ABC-123', client: 'Juan Perez', mechanic: 'Ricardo', status: 'ENTREGADO', total: 450.00 },
  { id: 1002, plate: 'XYZ-789', client: 'Maria Lopez', mechanic: 'Luis', status: 'EN_PROCESO', total: 820.50 },
  { id: 1003, plate: 'DEF-456', client: 'Carlos Ruiz', mechanic: 'Juan', status: 'LISTO', total: 350.00 },
  { id: 1004, plate: 'GHI-012', client: 'Ana Torres', mechanic: 'Ricardo', status: 'EN_DIAGNOSTICO', total: 180.00 },
  { id: 1005, plate: 'JKL-345', client: 'Pedro Diaz', mechanic: 'Luis', status: 'ENTREGADO', total: 2450.00 },
  { id: 1006, plate: 'MNO-678', client: 'Sofia Garcia', mechanic: 'Juan', status: 'EN_PROCESO', total: 620.00 },
  { id: 1007, plate: 'PQR-901', client: 'Diego Vega', mechanic: 'Ricardo', status: 'PRESUPUESTADO', total: 1500.00 },
]

const meta: Meta = {
  title: 'Business/DataTable',
  component: DataTable,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta

export const Default = {
  args: {
    columns: columns as any,
    data: data as any,
    keyExtractor: (row: any) => row.id as number,
    searchable: true,
    searchPlaceholder: 'Buscar por placa o cliente...',
  },
}

export const Empty = {
  args: {
    columns: columns as any,
    data: [] as any,
    keyExtractor: (row: any) => row.id as number,
    emptyMessage: 'No hay ordenes de trabajo registradas',
  },
}

export const Loading = {
  args: {
    columns: columns as any,
    data: data as any,
    keyExtractor: (row: any) => row.id as number,
    isLoading: true,
  },
}
