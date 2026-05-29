import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from '@arellan-hnos-core-ecosystem/ui'

const meta: Meta<typeof Accordion> = {
  title: 'Display/Accordion',
  component: Accordion,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Single: Story = {
  args: {
    type: 'single',
    items: [
      { value: 'info', trigger: 'Informacion del cliente', content: 'Nombre: Juan Perez, Telefono: 999888777, Email: juan@email.com' },
      { value: 'vehiculo', trigger: 'Datos del vehiculo', content: 'Placa: ABC-123, Marca: Toyota, Modelo: Corolla 2020, Kilometraje: 45,000' },
      { value: 'historial', trigger: 'Historial de servicios', content: 'Ultimo servicio: 15/03/2026 - Cambio de aceite y filtros. Proximo mantenimiento: Julio 2026.' },
    ],
  },
}

export const Multiple: Story = {
  args: {
    type: 'multiple',
    items: [
      { value: 'repuestos', trigger: 'Repuestos utilizados', content: 'Aceite 10W40 (S/.120), Filtro de aceite (S/.35), Pastillas delanteras (S/.280)' },
      { value: 'mano-obra', trigger: 'Mano de obra', content: 'Cambio de aceite: 1hr (S/.80), Frenos delanteros: 2hrs (S/.160), Diagnostico: 0.5hr (S/.40)' },
      { value: 'notas', trigger: 'Notas del mecanico', content: 'Se recomienda cambio de bujias en la proxima visita. El filtro de aire esta en buen estado.' },
    ],
  },
}

export const WithDisabled: Story = {
  args: {
    type: 'single',
    items: [
      { value: 'info', trigger: 'Informacion general', content: 'Contenido disponible' },
      { value: 'financiero', trigger: 'Informacion financiera (solo admin)', content: 'Acceso restringido', disabled: true },
      { value: 'auditoria', trigger: 'Log de auditoria', content: 'Registro de cambios del sistema' },
    ],
  },
}
