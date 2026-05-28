import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '@arellan/ui'

const meta: Meta<typeof Switch> = {
  title: 'Form/Switch',
  component: Switch,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: { label: 'Notificaciones push' },
}

export const Checked: Story = {
  args: { label: 'Modo oscuro', defaultChecked: true },
}

export const Small: Story = {
  args: { label: 'Solo WiFi', size: 'sm' },
}

export const WithHelperText: Story = {
  args: { label: 'Sincronizacion automatica', helperText: 'Sincronizar datos cada 5 minutos', defaultChecked: true },
}

export const Disabled: Story = {
  args: { label: 'Funcion no disponible', disabled: true, defaultChecked: true },
}
