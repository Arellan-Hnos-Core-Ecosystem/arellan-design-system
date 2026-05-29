import type { Meta, StoryObj } from '@storybook/react'
import { TextArea } from '@arellan-hnos-core-ecosystem/ui'

const meta: Meta<typeof TextArea> = {
  title: 'Form/TextArea',
  component: TextArea,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'error'] },
  },
  decorators: [(Story) => <div style={{ width: '400px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof TextArea>

export const Default: Story = {
  args: { label: 'Descripcion', placeholder: 'Escribe una descripcion...', rows: 4 },
}

export const WithHelperText: Story = {
  args: { label: 'Notas', helperText: 'Informacion adicional visible para el mecanico', rows: 3 },
}

export const WithError: Story = {
  args: { label: 'Diagnostico', error: 'El diagnostico debe tener al menos 20 caracteres', variant: 'error', rows: 4 },
}

export const Disabled: Story = {
  args: { label: 'Texto solo lectura', disabled: true, value: 'Este texto no se puede editar', rows: 3 },
}
