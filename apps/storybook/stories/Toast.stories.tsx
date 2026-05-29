import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from '@arellan-hnos-core-ecosystem/ui'

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
    duration: { control: 'number' },
  },
}

export default meta
type Story = StoryObj<typeof Toast>

export const Info: Story = {
  args: {
    variant: 'info',
    message: 'Informacion actualizada.',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    message: 'Operacion completada exitosamente.',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    message: 'Revise los datos ingresados.',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    message: 'Error al procesar la solicitud.',
  },
}

export const Dismissible: Story = {
  args: {
    variant: 'info',
    message: 'Notificacion con cierre.',
    onClose: () => alert('Cerrada'),
  },
}

export const NoProgressBar: Story = {
  args: {
    variant: 'success',
    message: 'Sin barra de progreso.',
    duration: 0,
  },
}
