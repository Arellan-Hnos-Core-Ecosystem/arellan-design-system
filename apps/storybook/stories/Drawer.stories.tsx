import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, Drawer } from '@arellan-hnos-core-ecosystem/ui'

function DrawerWrapper({ position = 'right', size = 'md' }: { position?: 'left' | 'right'; size?: 'sm' | 'md' | 'lg' }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>Abrir drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)} title="Panel lateral" position={position} size={size}>
        <div className="space-y-4">
          <p className="text-sm text-neutral-600">
            Contenido del panel lateral.
          </p>
          <div className="flex gap-2">
            <Button variant="primary" onClick={() => setOpen(false)}>Guardar</Button>
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancelar</Button>
          </div>
        </div>
      </Drawer>
    </>
  )
}

const meta: Meta<typeof Drawer> = {
  title: 'Overlay/Drawer',
  component: Drawer,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  render: (args) => <DrawerWrapper position={args.position} size={args.size} />,
}

export default meta
type Story = StoryObj<typeof Drawer>

export const Right: Story = {
  args: { position: 'right', size: 'md' },
}

export const Left: Story = {
  args: { position: 'left', size: 'sm' },
}

export const Large: Story = {
  args: { position: 'right', size: 'lg' },
}
