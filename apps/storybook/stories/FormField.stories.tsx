import type { Meta, StoryObj } from '@storybook/react'
import { FormField } from '@arellan-hnos-core-ecosystem/ui'

const meta: Meta<typeof FormField> = {
  title: 'Form/FormField',
  component: FormField,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: '400px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof FormField>

export const WithLabel: Story = {
  args: {
    label: 'Nombre del proveedor',
    children: <div className="h-10 rounded-md border border-neutral-300 bg-neutral-50 px-3 flex items-center text-sm text-neutral-400">Input placeholder</div>,
  },
}

export const Required: Story = {
  args: {
    label: 'Email',
    required: true,
    children: <div className="h-10 rounded-md border border-neutral-300 bg-neutral-50 px-3 flex items-center text-sm text-neutral-400">Input placeholder</div>,
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Contrasena',
    helperText: 'Minimo 8 caracteres, incluir un numero y una mayuscula',
    children: <div className="h-10 rounded-md border border-neutral-300 bg-neutral-50 px-3 flex items-center text-sm text-neutral-400">Input placeholder</div>,
  },
}

export const WithError: Story = {
  args: {
    label: 'Telefono',
    required: true,
    error: 'El telefono debe tener 9 digitos',
    children: <div className="h-10 rounded-md border border-status-error bg-red-50 px-3 flex items-center text-sm text-status-error">Input placeholder</div>,
  },
}
