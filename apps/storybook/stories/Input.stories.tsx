import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '@arellan-hnos-core-ecosystem/ui'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'success'],
    },
    inputSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'search', 'tel', 'url'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    label: 'Nombre',
    placeholder: 'Ingrese su nombre',
  },
}

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    placeholder: 'correo@ejemplo.com',
    helperText: 'Nunca compartiremos su correo',
  },
}

export const WithError: Story = {
  args: {
    label: 'Password',
    type: 'password',
    error: 'La contrasena debe tener al menos 8 caracteres',
  },
}

export const WithSuccess: Story = {
  args: {
    label: 'Usuario',
    value: 'usuario_valido',
    variant: 'success',
  },
}

export const Small: Story = {
  args: {
    label: 'Buscar',
    inputSize: 'sm',
    placeholder: 'Buscar...',
  },
}

export const Large: Story = {
  args: {
    label: 'Descripcion',
    inputSize: 'lg',
    placeholder: 'Escriba una descripcion...',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Campo deshabilitado',
    disabled: true,
    value: 'No editable',
  },
}

export const WithCharacterCount: Story = {
  args: {
    label: 'Codigo',
    maxLength: 10,
    showCharCount: true,
    placeholder: 'Max 10 caracteres',
  },
}
