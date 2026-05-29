import type { Meta, StoryObj } from '@storybook/react'
import { CurrencyInput } from '@arellan-hnos-core-ecosystem/ui'

const meta: Meta<typeof CurrencyInput> = {
  title: 'Form/CurrencyInput',
  component: CurrencyInput,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: '300px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof CurrencyInput>

export const Default: Story = {
  args: { label: 'Monto', placeholder: '0.00' },
}

export const WithHelperText: Story = {
  args: { label: 'Monto del gasto', helperText: 'Monto maximo: S/.5,000', placeholder: '0.00' },
}

export const WithError: Story = {
  args: { label: 'Monto', error: 'El monto excede el limite de aprobacion', placeholder: '0.00' },
}

export const Small: Story = {
  args: { label: 'Total', inputSize: 'sm', placeholder: '0.00' },
}

export const Large: Story = {
  args: { label: 'Monto a pagar', inputSize: 'lg', placeholder: '0.00' },
}
