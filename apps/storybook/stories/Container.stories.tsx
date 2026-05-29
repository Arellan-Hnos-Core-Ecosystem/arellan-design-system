import type { Meta, StoryObj } from '@storybook/react'
import { Container } from '@arellan-hnos-core-ecosystem/ui'

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Container>

export const Default: Story = {
  render: () => (
    <Container>
      <div className="rounded-lg border border-dashed border-neutral-300 p-8 text-center text-sm text-neutral-400">
        Contenido dentro del container
      </div>
    </Container>
  ),
}

export const Small: Story = {
  render: () => (
    <Container size="sm">
      <div className="rounded-lg border border-dashed border-neutral-300 p-8 text-center text-sm text-neutral-400">
        Container SM (max-w-3xl)
      </div>
    </Container>
  ),
}
