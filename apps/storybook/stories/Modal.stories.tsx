import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Modal, Button } from '@arellan-hnos-core-ecosystem/ui'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', 'full'] },
  },
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false)
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Abrir Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Confirmacion" description="Confirme su accion">
          <p>Contenido del modal</p>
        </Modal>
      </div>
    )
  },
}

export const WithFooter: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false)
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Abrir Modal con Footer</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="Eliminar registro"
          description="Esta accion no se puede deshacer"
          footer={
            <>
              <Button variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>
              <Button variant="danger" onClick={() => setOpen(false)}>Eliminar</Button>
            </>
          }
        >
          <p>Esta seguro que desea eliminar este registro?</p>
        </Modal>
      </div>
    )
  },
}
