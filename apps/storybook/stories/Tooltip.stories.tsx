import type { Meta, StoryObj } from '@storybook/react'
import { Button, Tooltip } from '@arellan/ui'

const meta: Meta<typeof Tooltip> = {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  args: {
    content: 'Guardar cambios',
    children: <Button variant="ghost" iconOnly><span className="text-lg">+</span></Button>,
  },
}

export const Bottom: Story = {
  args: {
    content: 'Informacion adicional',
    position: 'bottom',
    children: <span className="text-sm font-medium text-brand-primary cursor-help underline decoration-dotted">Hover para ver</span>,
  },
}

export const LongContent: Story = {
  args: {
    content: 'Esta accion registrara el gasto y notificara al administrador para su aprobacion',
    children: <Button variant="outline">Registrar y notificar</Button>,
  },
}
