import type { Meta, StoryObj } from '@storybook/react'
import { CashAmount } from '@arellan-hnos-core-ecosystem/ui'

const meta: Meta<typeof CashAmount> = {
  title: 'Business/CashAmount',
  component: CashAmount,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CashAmount>

export const Default: Story = {
  args: { amount: 1250.50 },
}

export const Positive: Story = {
  args: { amount: 350.00, signed: true },
}

export const Negative: Story = {
  args: { amount: -150.75, signed: true },
}

export const Large: Story = {
  args: { amount: 4500.00, size: 'xl' },
}

export const Small: Story = {
  args: { amount: 45.50, size: 'sm' },
}
