import type { Meta, StoryObj } from '@storybook/react'
import { StatusIndicator } from '@arellan-hnos-core-ecosystem/ui'

const meta: Meta<typeof StatusIndicator> = {
  title: 'Components/StatusIndicator',
  component: StatusIndicator,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    status: { control: 'select', options: ['active', 'idle', 'offline', 'error', 'pending'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    pulse: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof StatusIndicator>

export const Active: Story = {
  args: { status: 'active', label: 'En linea' },
}

export const Idle: Story = {
  args: { status: 'idle', label: 'Ausente' },
}

export const Offline: Story = {
  args: { status: 'offline', label: 'Desconectado' },
}

export const Error: Story = {
  args: { status: 'error', label: 'Error de conexion' },
}

export const Pending: Story = {
  args: { status: 'pending', label: 'Procesando...' },
}

export const WithPulse: Story = {
  args: { status: 'active', label: 'Transmitiendo', pulse: true },
}

export const Small: Story = {
  args: { status: 'active', size: 'sm', label: 'OK' },
}

export const Large: Story = {
  args: { status: 'pending', size: 'lg', label: 'Cargando...' },
}
