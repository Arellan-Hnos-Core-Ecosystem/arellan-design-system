import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Table } from './Table'

const columns = [
  { key: 'name', header: 'Nombre' },
  { key: 'status', header: 'Estado', sortable: true },
]

const data: Record<string, unknown>[] = [
  { id: 1, name: 'Juan', status: 'Activo' },
  { id: 2, name: 'Maria', status: 'Inactivo' },
]

describe('Table', () => {
  it('renders headers', () => {
    render(<Table columns={columns} data={data} keyExtractor={(r) => r.id as number} />)
    expect(screen.getByText('Nombre')).toBeInTheDocument()
    expect(screen.getByText('Estado')).toBeInTheDocument()
  })

  it('renders data rows', () => {
    render(<Table columns={columns} data={data} keyExtractor={(r) => r.id as number} />)
    expect(screen.getByText('Juan')).toBeInTheDocument()
    expect(screen.getByText('Maria')).toBeInTheDocument()
  })

  it('shows empty message when no data', () => {
    const empty: Record<string, unknown>[] = []
    render(<Table columns={columns} data={empty} keyExtractor={(r) => r.id as number} />)
    expect(screen.getByText('No hay datos disponibles')).toBeInTheDocument()
  })

  it('shows loading state', () => {
    render(<Table columns={columns} data={[] as Record<string, unknown>[]} keyExtractor={(r) => r.id as number} isLoading />)
    expect(screen.getByText('Cargando datos...')).toBeInTheDocument()
  })

  it('calls onRowClick when a row is clicked', () => {
    const onRowClick = vi.fn()
    render(
      <Table
        columns={columns}
        data={data}
        keyExtractor={(r) => r.id as number}
        onRowClick={onRowClick}
      />
    )
    fireEvent.click(screen.getByText('Juan'))
    expect(onRowClick).toHaveBeenCalledWith(data[0])
  })

  it('sorts data when clicking sortable column header', () => {
    render(<Table columns={columns} data={data} keyExtractor={(r) => r.id as number} />)
    const statusHeader = screen.getByText('Estado')
    fireEvent.click(statusHeader)
    const rows = screen.getAllByRole('row')
    expect(rows.length).toBe(3)
  })

  it('renders actions toolbar', () => {
    render(
      <Table
        columns={columns}
        data={data}
        keyExtractor={(r) => r.id as number}
        actions={<button>Nuevo</button>}
      />
    )
    expect(screen.getByRole('button', { name: /nuevo/i })).toBeInTheDocument()
  })

  it('applies custom rowClassName', () => {
    const { container } = render(
      <Table
        columns={columns}
        data={data}
        keyExtractor={(r) => r.id as number}
        rowClassName={() => 'custom-row'}
      />
    )
    const rows = container.querySelectorAll('tbody tr')
    rows.forEach((row) => {
      expect(row.className).toContain('custom-row')
    })
  })
})
