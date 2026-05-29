import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '@arellan-hnos-core-ecosystem/ui'

const meta: Meta<typeof Avatar> = {
  title: 'Display/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Avatar>

export const WithFallback: Story = {
  args: { fallback: 'Juan Perez', size: 'md' },
}

export const WithImage: Story = {
  args: { src: 'https://i.pravatar.cc/150?img=1', alt: 'Juan Perez', size: 'lg' },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <div className="flex flex-col items-center gap-1">
        <Avatar fallback="JP" size="xs" />
        <span className="text-2xs text-neutral-400">xs</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Avatar fallback="JP" size="sm" />
        <span className="text-2xs text-neutral-400">sm</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Avatar fallback="JP" size="md" />
        <span className="text-2xs text-neutral-400">md</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Avatar fallback="JP" size="lg" />
        <span className="text-2xs text-neutral-400">lg</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Avatar fallback="JP" size="xl" />
        <span className="text-2xs text-neutral-400">xl</span>
      </div>
    </div>
  ),
}

export const ColorVariation: Story = {
  render: () => (
    <div className="flex gap-2">
      <Avatar fallback="Edgar Arellan" size="lg" />
      <Avatar fallback="Ana Ramirez" size="lg" />
      <Avatar fallback="Luis Mecanico" size="lg" />
      <Avatar fallback="Carlos Admin" size="lg" />
    </div>
  ),
}
