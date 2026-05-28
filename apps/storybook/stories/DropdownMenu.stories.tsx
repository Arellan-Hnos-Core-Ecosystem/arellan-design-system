import type { Meta, StoryObj } from '@storybook/react'
import { Button, DropdownMenu } from '@arellan/ui'

const meta: Meta<typeof DropdownMenu> = {
  title: 'Overlay/DropdownMenu',
  component: DropdownMenu,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DropdownMenu>

export const Default: Story = {
  args: {
    trigger: <Button variant="primary">Acciones</Button>,
    items: [
      { label: 'Editar', value: 'edit' },
      { label: 'Duplicar', value: 'duplicate' },
      { label: 'Archivar', value: 'archive' },
    ],
  },
}

export const WithIcons: Story = {
  args: {
    trigger: <Button variant="outline">Opciones</Button>,
    items: [
      {
        label: 'Imprimir',
        value: 'print',
        icon: <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>,
      },
      { label: 'Exportar', value: 'export' },
      { label: 'Separator', value: '-' },
      { label: 'Eliminar', value: 'delete', danger: true },
    ],
  },
}

export const DangerItem: Story = {
  args: {
    trigger: <Button variant="danger" size="sm">Gestionar</Button>,
    items: [
      { label: 'Suspender temporalmente', value: 'suspend' },
      { label: 'Desactivar permanentemente', value: 'deactivate', danger: true },
    ],
  },
}
