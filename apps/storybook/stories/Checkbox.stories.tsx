import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '@arellan/ui'

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: { label: 'Acepto los terminos y condiciones' },
}

export const Checked: Story = {
  args: { label: 'Notificarme por WhatsApp', defaultChecked: true },
}

export const WithHelperText: Story = {
  args: { label: 'Incluir repuestos premium', helperText: 'Usar repuestos originales del fabricante' },
}

export const WithError: Story = {
  args: { label: 'Confirmar autorizacion', error: 'Debes aceptar los terminos', defaultChecked: false },
}

export const Disabled: Story = {
  args: { label: 'Opcion no disponible', disabled: true },
}

export const DisabledChecked: Story = {
  args: { label: 'Seleccion obligatoria', disabled: true, defaultChecked: true },
}
