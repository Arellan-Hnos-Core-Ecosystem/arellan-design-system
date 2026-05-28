import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, ConfirmDialog } from '@arellan/ui'

function ConfirmWrapper({ variant }: { variant: 'danger' | 'warning' | 'primary' }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant={variant === 'danger' ? 'danger' : 'primary'} onClick={() => setOpen(true)}>
        Mostrar confirmacion
      </Button>
      <ConfirmDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => { alert('Confirmado'); setOpen(false) }}
        title="Confirmar accion"
        description="Esta accion no se puede deshacer."
        variant={variant}
      />
    </>
  )
}

const meta: Meta<typeof ConfirmDialog> = {
  title: 'Overlay/ConfirmDialog',
  component: ConfirmDialog,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ConfirmDialog>

export const Danger: Story = {
  render: () => <ConfirmWrapper variant="danger" />,
}

export const Warning: Story = {
  render: () => <ConfirmWrapper variant="warning" />,
}

export const Primary: Story = {
  render: () => <ConfirmWrapper variant="primary" />,
}

export const CustomLabels: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="danger" onClick={() => setOpen(true)}>Eliminar OT</Button>
        <ConfirmDialog
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={() => { setOpen(false) }}
          title="Eliminar orden de trabajo"
          description="La OT #1234 sera marcada como CANCELADO. Los repuestos reservados seran liberados."
          confirmLabel="Si, cancelar OT"
          cancelLabel="No, mantener"
          variant="danger"
        />
      </>
    )
  },
}
