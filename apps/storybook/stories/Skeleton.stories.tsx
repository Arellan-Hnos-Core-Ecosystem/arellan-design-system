import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from '@arellan/ui'

const meta: Meta<typeof Skeleton> = {
  title: 'Display/Skeleton',
  component: Skeleton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Text: Story = {
  args: { variant: 'text', width: 200 },
}

export const Circular: Story = {
  args: { variant: 'circular', width: 48, height: 48 },
}

export const Rectangular: Story = {
  args: { variant: 'rectangular', width: 320, height: 160 },
}

export const CardExample: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-80 rounded-lg border border-neutral-200 p-4">
      <div className="flex items-center gap-3">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
        </div>
      </div>
      <Skeleton variant="rectangular" width="100%" height={120} />
      <div className="space-y-2">
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="90%" />
        <Skeleton variant="text" width="50%" />
      </div>
    </div>
  ),
}
