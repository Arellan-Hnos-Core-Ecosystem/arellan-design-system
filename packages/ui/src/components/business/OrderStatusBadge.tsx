import { Badge } from '../Badge/Badge'
import type { BadgeProps } from '../Badge/Badge'

export type OrderStatus =
  | 'RECIBIDO'
  | 'EN_DIAGNOSTICO'
  | 'PRESUPUESTADO'
  | 'EN_PROCESO'
  | 'EN_REVISION'
  | 'LISTO'
  | 'ENTREGADO'
  | 'CANCELADO'

const statusConfig: Record<OrderStatus, { variant: BadgeProps['variant']; label: string }> = {
  RECIBIDO: { variant: 'neutral', label: 'Recibido' },
  EN_DIAGNOSTICO: { variant: 'info', label: 'En diagnóstico' },
  PRESUPUESTADO: { variant: 'warning', label: 'Presupuestado' },
  EN_PROCESO: { variant: 'brand', label: 'En proceso' },
  EN_REVISION: { variant: 'info', label: 'En revisión' },
  LISTO: { variant: 'success', label: 'Listo' },
  ENTREGADO: { variant: 'success', label: 'Entregado' },
  CANCELADO: { variant: 'error', label: 'Cancelado' },
}

export interface OrderStatusBadgeProps {
  status: OrderStatus
  size?: 'sm' | 'md' | 'lg'
}

export function OrderStatusBadge({ status, size = 'md' }: OrderStatusBadgeProps) {
  const config = statusConfig[status] ?? statusConfig.RECIBIDO

  return (
    <Badge variant={config.variant} size={size} dot>
      {config.label}
    </Badge>
  )
}

OrderStatusBadge.displayName = 'OrderStatusBadge'
