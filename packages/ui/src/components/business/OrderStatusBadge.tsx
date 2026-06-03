import { Badge } from '../Badge/Badge'
import type { BadgeProps } from '../Badge/Badge'

export type OrderStatus =
  | 'RECEIVED'
  | 'IN_DIAGNOSIS'
  | 'BUDGETED'
  | 'IN_PROGRESS'
  | 'IN_REVIEW'
  | 'READY'
  | 'DELIVERED'
  | 'CANCELLED'

const statusConfig: Record<OrderStatus, { variant: BadgeProps['variant']; label: string }> = {
  RECEIVED: { variant: 'neutral', label: 'Recibido' },
  IN_DIAGNOSIS: { variant: 'info', label: 'En diagnostico' },
  BUDGETED: { variant: 'warning', label: 'Presupuestado' },
  IN_PROGRESS: { variant: 'brand', label: 'En proceso' },
  IN_REVIEW: { variant: 'info', label: 'En revision' },
  READY: { variant: 'success', label: 'Listo' },
  DELIVERED: { variant: 'success', label: 'Entregado' },
  CANCELLED: { variant: 'error', label: 'Cancelado' },
}

export interface OrderStatusBadgeProps {
  status: OrderStatus
  size?: 'sm' | 'md' | 'lg'
}

export function OrderStatusBadge({ status, size = 'md' }: OrderStatusBadgeProps) {
  const config = statusConfig[status] ?? statusConfig.RECEIVED

  return (
    <Badge variant={config.variant} size={size} dot>
      {config.label}
    </Badge>
  )
}

OrderStatusBadge.displayName = 'OrderStatusBadge'
