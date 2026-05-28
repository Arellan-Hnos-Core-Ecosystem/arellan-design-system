import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Pagination } from '@arellan/ui'

function PaginationWrapper({ totalPages: initialTotal = 10 }: { totalPages?: number }) {
  const [page, setPage] = useState(1)
  return <Pagination page={page} totalPages={initialTotal} onPageChange={setPage} />
}

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  render: PaginationWrapper,
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: { totalPages: 10 },
}

export const FewPages: Story = {
  args: { totalPages: 3 },
}

export const ManyPages: Story = {
  args: { totalPages: 20 },
}

export const SinglePage: Story = {
  args: { totalPages: 1 },
}
