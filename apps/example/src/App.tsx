import { useState } from 'react'
import {
  Button,
  Input,
  TextArea,
  Select,
  Checkbox,
  Switch,
  CurrencyInput,
  FormField,
  Badge,
  StatusIndicator,
  Spinner,
  Alert,
  Toast,
  Card,
  Tabs,
  Accordion,
  Avatar,
  Breadcrumb,
  Pagination,
  DropdownMenu,
  Drawer,
  ConfirmDialog,
  OrderStatusBadge,
  CashAmount,
  Container,
  EmptyState,
  Skeleton,
  Tooltip,
  Modal,
  DataTable,
  type Column,
} from '@arellan/ui'

function ComponentShowcase({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="mb-6">
      <Card.Header>
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      </Card.Header>
      <Card.Content>{children}</Card.Content>
    </Card>
  )
}

const accordionItems = [
  { value: 'info', trigger: 'Informacion del cliente', content: 'Nombre: Juan Perez · Placa: ABC-123' },
  { value: 'vehiculo', trigger: 'Datos del vehiculo', content: 'Toyota Corolla 2020 · Km: 45,000' },
  { value: 'historial', trigger: 'Historial de servicios', content: 'Ultimo servicio: Cambio de aceite (15/03/2026)' },
]

const dropdownItems = [
  { label: 'Editar', value: 'edit' },
  { label: 'Duplicar', value: 'duplicate' },
  { label: 'Archivar', value: 'archive' },
  { label: 'Eliminar', value: 'delete', danger: true },
]

interface Order {
  id: number
  plate: string
  client: string
  mechanic: string
  status: 'ENTREGADO' | 'EN_PROCESO' | 'LISTO' | 'EN_DIAGNOSTICO' | 'PRESUPUESTADO'
  total: number
}

const orders: Order[] = [
  { id: 1001, plate: 'ABC-123', client: 'Juan Perez', mechanic: 'Ricardo', status: 'ENTREGADO', total: 450.00 },
  { id: 1002, plate: 'XYZ-789', client: 'Maria Lopez', mechanic: 'Luis', status: 'EN_PROCESO', total: 820.50 },
  { id: 1003, plate: 'DEF-456', client: 'Carlos Ruiz', mechanic: 'Juan', status: 'LISTO', total: 350.00 },
]

const columns: Column<Order>[] = [
  { key: 'id', header: 'OT #', sortable: true },
  { key: 'plate', header: 'Placa' },
  { key: 'client', header: 'Cliente' },
  {
    key: 'status',
    header: 'Estado',
    accessor: (row) => <OrderStatusBadge status={row.status} size="sm" />,
  },
  {
    key: 'total',
    header: 'Total',
    sortable: true,
    accessor: (row) => <CashAmount amount={row.total} size="sm" />,
    className: 'text-right',
  },
]

export default function App() {
  const [page, setPage] = useState(1)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [toasts, setToasts] = useState<{ id: number; message: string; variant: 'info' | 'success' | 'warning' | 'error' }[]>([])

  const addToast = (variant: 'info' | 'success' | 'warning' | 'error') => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, message: `Notificacion ${variant}: ${new Date().toLocaleTimeString()}`, variant }])
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3000)
  }

  return (
    <Container size="md" className="py-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900">Arellan Design System</h1>
            <p className="mt-1 text-neutral-500">Demo interactiva — @arellan/ui v0.2.0</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="primary" onClick={() => setModalOpen(true)}>
              Abrir Modal
            </Button>
            <DropdownMenu trigger={<Button variant="outline">Acciones</Button>} items={dropdownItems} />
          </div>
        </div>

        <ComponentShowcase title="Botones">
          <div className="flex flex-wrap gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="xl">Touch (56px)</Button>
            <Button variant="primary" isLoading>Cargando</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
        </ComponentShowcase>

        <ComponentShowcase title="Status y Badges">
          <div className="flex flex-wrap gap-4 items-center">
            <StatusIndicator status="active" label="Activo" pulse />
            <StatusIndicator status="idle" label="Inactivo" />
            <StatusIndicator status="error" label="Error" />
            <div className="flex gap-2 flex-wrap">
              <Badge variant="brand">Brand</Badge>
              <Badge variant="success" dot>Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error" dot>Error</Badge>
              <Badge variant="info">Info</Badge>
              <Badge variant="neutral">Neutral</Badge>
            </div>
          </div>
        </ComponentShowcase>

        <ComponentShowcase title="Ordenes de Trabajo — OrderStatusBadge">
          <div className="flex flex-wrap gap-2">
            <OrderStatusBadge status="RECIBIDO" />
            <OrderStatusBadge status="EN_DIAGNOSTICO" />
            <OrderStatusBadge status="PRESUPUESTADO" />
            <OrderStatusBadge status="EN_PROCESO" />
            <OrderStatusBadge status="EN_REVISION" />
            <OrderStatusBadge status="LISTO" />
            <OrderStatusBadge status="ENTREGADO" />
            <OrderStatusBadge status="CANCELADO" />
          </div>
        </ComponentShowcase>

        <ComponentShowcase title="Monto — CashAmount">
          <div className="flex flex-wrap gap-6 items-end">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-neutral-400">Default</span>
              <CashAmount amount={1250.50} />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-neutral-400">Ingreso</span>
              <CashAmount amount={350.00} signed size="xl" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-neutral-400">Gasto</span>
              <CashAmount amount={-150.75} signed size="lg" />
            </div>
          </div>
        </ComponentShowcase>

        <ComponentShowcase title="DataTable">
          <DataTable
            columns={columns}
            data={orders}
            keyExtractor={(row) => row.id}
            searchable
            searchPlaceholder="Buscar por placa o cliente..."
            actions={<Button variant="primary" size="sm">Nueva OT</Button>}
          />
        </ComponentShowcase>

        <ComponentShowcase title="Formularios">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="Nombre completo" required>
              <Input placeholder="Juan Perez" />
            </FormField>
            <FormField label="Categoria" required helperText="Selecciona una categoria">
              <Select
                options={[
                  { value: 'repuestos', label: 'Repuestos' },
                  { value: 'servicios', label: 'Servicios externos' },
                ]}
                placeholder="Seleccionar..."
              />
            </FormField>
            <FormField label="Monto del gasto" required>
              <CurrencyInput placeholder="0.00" />
            </FormField>
            <FormField label="Descripcion">
              <TextArea placeholder="Detalle del gasto..." rows={2} />
            </FormField>
            <div className="md:col-span-2 flex gap-6">
              <Checkbox label="Acepto los terminos" defaultChecked />
              <Switch label="Notificaciones push" defaultChecked />
              <Switch label="Modo oscuro" size="sm" />
            </div>
            <FormField label="Monto" error="El monto excede el limite">
              <Input variant="error" defaultValue="6000" />
            </FormField>
            <FormField label="Proveedor" helperText="Selecciona el proveedor registrado">
              <Select
                options={[
                  { value: 'autopartes-peru', label: 'Autopartes Peru SAC' },
                  { value: 'importadora-lima', label: 'Importadora Lima' },
                  { value: 'repuestos-china', label: 'Repuestos China', disabled: true },
                ]}
                placeholder="Buscar proveedor..."
              />
            </FormField>
            <div className="md:col-span-2">
              <Button variant="primary" fullWidth>Registrar Gasto</Button>
            </div>
          </div>
        </ComponentShowcase>

        <ComponentShowcase title="Alertas">
          <div className="space-y-3">
            <Alert variant="success" title="Exito" description="El gasto fue registrado correctamente." onClose={() => {}} />
            <Alert variant="warning" title="Atencion" description="Stock bajo: Aceite 10W40 (2 unidades)" />
            <Alert variant="error" title="Error" description="No se pudo conectar con el servidor de impuestos." />
            <Alert variant="info" description="El cierre de caja se realizara a las 6:00 PM." />
          </div>
        </ComponentShowcase>

        <ComponentShowcase title="Navegacion">
          <div className="space-y-4">
            <Breadcrumb
              items={[
                { label: 'Dashboard', href: '#' },
                { label: 'Finanzas', href: '#' },
                { label: 'Gastos' },
              ]}
            />
            <Pagination page={page} totalPages={20} onPageChange={setPage} />
          </div>
        </ComponentShowcase>

        <ComponentShowcase title="Acordeon">
          <Accordion type="single" items={accordionItems} />
        </ComponentShowcase>

        <ComponentShowcase title="Tabs">
          <Tabs defaultValue="general">
            <Tabs.List>
              <Tabs.Trigger value="general">General</Tabs.Trigger>
              <Tabs.Trigger value="finanzas">Finanzas</Tabs.Trigger>
              <Tabs.Trigger value="documentos">Documentos</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="general">
              <p className="text-sm text-neutral-600">Informacion general de la OT.</p>
            </Tabs.Content>
            <Tabs.Content value="finanzas">
              <p className="text-sm text-neutral-600">Detalle de costos y pagos.</p>
            </Tabs.Content>
            <Tabs.Content value="documentos">
              <p className="text-sm text-neutral-600">Documentos adjuntos.</p>
            </Tabs.Content>
          </Tabs>
        </ComponentShowcase>

        <ComponentShowcase title="Avatares y Tooltips">
          <div className="flex items-center gap-4">
            <Avatar fallback="Edgar Arellan" size="lg" />
            <Avatar fallback="Ana Ramirez" size="md" />
            <Avatar fallback="Luis Mecanico" size="sm" />
            <Avatar fallback="JP" size="xs" />
            <Tooltip content="Guardar cambios" position="bottom">
              <Button variant="ghost">Hover me</Button>
            </Tooltip>
          </div>
        </ComponentShowcase>

        <ComponentShowcase title="Overlays">
          <div className="flex flex-wrap gap-2">
            <Button variant="primary" onClick={() => setDrawerOpen(true)}>Abrir Drawer</Button>
            <Button variant="danger" onClick={() => setConfirmOpen(true)}>ConfirmDialog</Button>
            <Button variant="secondary" onClick={() => addToast('success')}>Toast success</Button>
            <Button variant="secondary" onClick={() => addToast('error')}>Toast error</Button>
            <Button variant="secondary" onClick={() => addToast('warning')}>Toast warning</Button>
            <div className="w-full">
              <Spinner label="Cargando datos..." />
            </div>
            <div className="w-full">
              <Skeleton variant="rectangular" width="100%" height={120} />
            </div>
          </div>
        </ComponentShowcase>

        <ComponentShowcase title="Empty State">
          <EmptyState
            title="No hay ordenes de trabajo"
            description="Las ordenes de trabajo apareceran aqui cuando se registren nuevos vehiculos."
            action={<Button variant="primary">Nueva OT</Button>}
          />
        </ComponentShowcase>
      </div>

      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} title="Panel lateral" position="right">
        <div className="space-y-4">
          <p className="text-sm text-neutral-600">
            Este es un Drawer — ideal para formularios laterales, filtros avanzados, o detalles rapidos.
          </p>
          <div className="flex gap-2">
            <Button variant="primary" onClick={() => setDrawerOpen(false)}>Guardar</Button>
            <Button variant="ghost" onClick={() => setDrawerOpen(false)}>Cancelar</Button>
          </div>
        </div>
      </Drawer>

      <ConfirmDialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        onConfirm={() => {
          addToast('success')
          setConfirmOpen(false)
        }}
        title="Eliminar orden de trabajo"
        description="La OT #1234 sera cancelada permanentemente. Los repuestos reservados seran liberados."
        confirmLabel="Si, cancelar OT"
        cancelLabel="No, mantener"
        variant="danger"
      />

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Vista Previa" description="Todos los componentes del design system estan disponibles." size="lg" footer={
        <div className="flex gap-2">
          <Button variant="ghost" onClick={() => setModalOpen(false)}>Cerrar</Button>
          <Button variant="primary" onClick={() => { setModalOpen(false); addToast('success') }}>Confirmar</Button>
        </div>
      }>
        <div className="space-y-4">
          <p className="text-neutral-700 text-sm">
            El sistema de diseno contiene <strong>30 componentes</strong>, <strong>10 tokens de diseno</strong>,
            <strong> 6 hooks</strong> y <strong>ThemeProvider</strong> con soporte light/dark/system.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="brand">30 componentes</Badge>
            <Badge variant="success">67 tests</Badge>
            <Badge variant="info">10 tokens</Badge>
            <Badge variant="warning">ESM + CJS</Badge>
          </div>
        </div>
      </Modal>

      <div className="fixed bottom-4 right-4 z-[700] flex flex-col gap-2">
        {toasts.map((t) => (
          <Toast key={t.id} variant={t.variant} message={t.message} onClose={() => setToasts((prev) => prev.filter((x) => x.id !== t.id))} duration={3000} />
        ))}
      </div>
    </Container>
  )
}
