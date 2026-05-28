import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '@arellan/ui'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'brand', 'success', 'warning', 'error', 'info'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    dot: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Neutral: Story = { args: { children: 'Neutral' } }
export const Brand: Story = { args: { variant: 'brand', children: 'Brand' } }
export const Success: Story = { args: { variant: 'success', children: 'Completado' } }
export const Warning: Story = { args: { variant: 'warning', children: 'Pendiente' } }
export const Error: Story = { args: { variant: 'error', children: 'Error' } }
export const Info: Story = { args: { variant: 'info', children: 'Info' } }
export const WithDot: Story = { args: { variant: 'success', dot: true, children: 'En linea' } }
export const Small: Story = { args: { size: 'sm', children: 'Small' } }
export const Large: Story = { args: { size: 'lg', children: 'Large Badge' } }
