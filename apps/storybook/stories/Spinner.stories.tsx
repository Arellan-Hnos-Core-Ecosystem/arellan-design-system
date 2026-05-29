import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from '@arellan-hnos-core-ecosystem/ui'

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    overlay: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Spinner>

export const Small: Story = {
  args: { size: 'sm', label: 'Cargando...' },
}

export const Medium: Story = {
  args: { size: 'md', label: 'Cargando...' },
}

export const Large: Story = {
  args: { size: 'lg', label: 'Cargando...' },
}

export const CustomLabel: Story = {
  args: { size: 'md', label: 'Procesando solicitud...' },
}

export const NoLabel: Story = {
  args: { size: 'md', label: '' },
}
