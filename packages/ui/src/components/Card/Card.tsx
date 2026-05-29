import { cn } from '../../lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  interactive?: boolean
}

export function Card({ className, children, interactive = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-neutral-200 bg-white shadow-elevation-1',
        interactive && 'cursor-pointer hover:shadow-elevation-2 hover:border-neutral-300 transition-all duration-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

Card.displayName = 'Card'

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function CardHeader({ className, children, ...props }: CardHeaderProps) {
  return (
    <div className={cn('border-b border-neutral-200 px-6 py-4', className)} {...props}>
      {children}
    </div>
  )
}

CardHeader.displayName = 'CardHeader'
Card.Header = CardHeader

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function CardContent({ className, children, ...props }: CardContentProps) {
  return (
    <div className={cn('px-6 py-4', className)} {...props}>
      {children}
    </div>
  )
}

CardContent.displayName = 'CardContent'
Card.Content = CardContent

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function CardFooter({ className, children, ...props }: CardFooterProps) {
  return (
    <div className={cn('border-t border-neutral-200 px-6 py-4', className)} {...props}>
      {children}
    </div>
  )
}

CardFooter.displayName = 'CardFooter'
Card.Footer = CardFooter
