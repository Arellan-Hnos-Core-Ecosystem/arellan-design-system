import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardHeader, CardContent, CardFooter } from '@arellan/ui'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <h3 className="text-lg font-semibold">Titulo de la Tarjeta</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-600">Este es el contenido de la tarjeta.</p>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-neutral-400">Footer de la tarjeta</p>
      </CardFooter>
    </Card>
  ),
}

export const Interactive: Story = {
  render: () => (
    <Card interactive className="w-80" onClick={() => alert('Clicked')}>
      <CardContent>
        <p className="font-medium">Tarjeta interactiva</p>
        <p className="text-sm text-neutral-500 mt-1">Haz clic para interactuar</p>
      </CardContent>
    </Card>
  ),
}

export const Simple: Story = {
  render: () => (
    <Card className="w-80 p-6">
      <p>Contenido simple sin subcomponentes</p>
    </Card>
  ),
}
