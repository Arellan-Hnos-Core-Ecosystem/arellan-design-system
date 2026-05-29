import { cn } from '../../lib/utils'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  fallback?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const sizeClasses = {
  xs: 'h-6 w-6 text-2xs',
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
  xl: 'h-14 w-14 text-lg',
}

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function Avatar({
  className,
  src,
  alt = '',
  fallback,
  size = 'md',
  style,
  ...props
}: AvatarProps) {
  const initials = fallback ? getInitials(fallback) : alt ? getInitials(alt) : '?'

  if (src) {
    return (
      <div
        className={cn(
          'relative inline-flex shrink-0 overflow-hidden rounded-full',
          sizeClasses[size],
          className
        )}
        style={style}
        {...props}
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          onError={(e) => {
            ;(e.target as HTMLImageElement).style.display = 'none'
          }}
        />
        <span className="absolute inset-0 flex items-center justify-center bg-brand-100 text-brand-primary font-medium rounded-full">
          {initials}
        </span>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-full bg-brand-100 font-medium text-brand-primary',
        sizeClasses[size],
        className
      )}
      aria-label={alt || fallback}
      {...props}
    >
      {initials}
    </div>
  )
}

Avatar.displayName = 'Avatar'
