import type { Meta, StoryObj } from '@storybook/react'
import { OrderStatusBadge } from '@arellan/ui'

const meta: Meta<typeof OrderStatusBadge> = {
  title: 'Business/OrderStatusBadge',
  component: OrderStatusBadge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof OrderStatusBadge>

export const Recibido: Story = { args: { status: 'RECIBIDO' } }
export const EnDiagnostico: Story = { args: { status: 'EN_DIAGNOSTICO' } }
export const Presupuestado: Story = { args: { status: 'PRESUPUESTADO' } }
export const EnProceso: Story = { args: { status: 'EN_PROCESO' } }
export const EnRevision: Story = { args: { status: 'EN_REVISION' } }
export const Listo: Story = { args: { status: 'LISTO' } }
export const Entregado: Story = { args: { status: 'ENTREGADO' } }
export const Cancelado: Story = { args: { status: 'CANCELADO' } }

export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <OrderStatusBadge status="RECIBIDO" />
      <OrderStatusBadge status="EN_DIAGNOSTICO" />
      <OrderStatusBadge status="PRESUPUESTADO" />
      <OrderStatusBadge status="EN_PROCESO" />
      <OrderStatusBadge status="EN_REVISION" />
      <OrderStatusBadge status="LISTO" />
      <OrderStatusBadge status="ENTREGADO" />
      <OrderStatusBadge status="CANCELADO" />
    </div>
  ),
}
