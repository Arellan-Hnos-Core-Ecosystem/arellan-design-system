import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb } from '@arellan-hnos-core-ecosystem/ui'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Finanzas', href: '/finance' },
      { label: 'Gastos', href: '/finance/expenses' },
      { label: 'Registrar gasto' },
    ],
  },
}

export const WithIcons: Story = {
  args: {
    items: [
      {
        label: 'Inicio',
        href: '/',
        icon: (
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        ),
      },
      { label: 'Ordenes de trabajo', href: '/orders' },
      { label: 'OT #1234' },
    ],
  },
}
