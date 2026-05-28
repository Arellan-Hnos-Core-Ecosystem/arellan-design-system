import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from '@arellan/ui'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Informacion',
    description: 'Esto es un mensaje informativo.',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Operacion exitosa',
    description: 'Los datos se han guardado correctamente.',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Advertencia',
    description: 'Revise los datos ingresados antes de continuar.',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    description: 'Ha ocurrido un error inesperado.',
  },
}

export const Dismissible: Story = {
  args: {
    variant: 'warning',
    title: 'Aviso',
    description: 'Esta alerta se puede cerrar.',
    onClose: () => alert('Cerrada'),
  },
}
