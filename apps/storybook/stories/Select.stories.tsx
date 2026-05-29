import type { Meta, StoryObj } from '@storybook/react'
import { Select } from '@arellan-hnos-core-ecosystem/ui'

const options = [
  { value: 'repuestos', label: 'Repuestos' },
  { value: 'herramientas', label: 'Herramientas' },
  { value: 'servicios', label: 'Servicios externos' },
  { value: 'combustible', label: 'Combustible' },
  { value: 'importaciones', label: 'Importaciones', disabled: true },
]

const meta: Meta<typeof Select> = {
  title: 'Form/Select',
  component: Select,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: '400px' }}><Story /></div>],
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: { label: 'Categoria', placeholder: 'Seleccionar categoria...', options },
}

export const WithHelperText: Story = {
  args: { label: 'Proveedor', helperText: 'Selecciona el proveedor registrado', options, placeholder: 'Buscar proveedor...' },
}

export const WithError: Story = {
  args: { label: 'Tipo de gasto', error: 'Selecciona una categoria', variant: 'error', options },
}

export const Small: Story = {
  args: { label: 'Prioridad', selectSize: 'sm', options: [{ value: 'alta', label: 'Alta' }, { value: 'media', label: 'Media' }, { value: 'baja', label: 'Baja' }] },
}

export const Large: Story = {
  args: { label: 'Mecanico asignado', selectSize: 'lg', options: [{ value: 'ricardo', label: 'Ricardo' }, { value: 'juan', label: 'Juan' }, { value: 'luis', label: 'Luis' }] },
}
