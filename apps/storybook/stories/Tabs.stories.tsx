import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@arellan/ui'

const meta: Meta<typeof Tabs> = {
  title: 'Display/Tabs',
  component: Tabs,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="finanzas">Finanzas</TabsTrigger>
          <TabsTrigger value="documentos">Documentos</TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <p className="text-sm text-neutral-600">Informacion general de la orden de trabajo.</p>
        </TabsContent>
        <TabsContent value="finanzas">
          <p className="text-sm text-neutral-600">Detalle de costos y pagos registrados.</p>
        </TabsContent>
        <TabsContent value="documentos">
          <p className="text-sm text-neutral-600">Documentos y archivos adjuntos.</p>
        </TabsContent>
      </Tabs>
    </div>
  ),
}

export const ManyTabs: Story = {
  render: () => (
    <div className="w-96">
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Activos</TabsTrigger>
          <TabsTrigger value="tab2">Pendientes</TabsTrigger>
          <TabsTrigger value="tab3">Completados</TabsTrigger>
          <TabsTrigger value="tab4">Cancelados</TabsTrigger>
          <TabsTrigger value="tab5" disabled>Archivados</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1"><p className="text-sm text-neutral-600">Ordenes activas</p></TabsContent>
        <TabsContent value="tab2"><p className="text-sm text-neutral-600">Pendientes de aprobacion</p></TabsContent>
        <TabsContent value="tab3"><p className="text-sm text-neutral-600">Trabajos completados</p></TabsContent>
        <TabsContent value="tab4"><p className="text-sm text-neutral-600">Ordenes canceladas</p></TabsContent>
        <TabsContent value="tab5"><p className="text-sm text-neutral-600">Archivo historico</p></TabsContent>
      </Tabs>
    </div>
  ),
}
