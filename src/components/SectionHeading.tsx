import type { ReactNode } from 'react';
import { cn } from '../lib';

/** Centered H2 + optional subtitle used at the top of most sections. */
export function SectionHeading({
  children,
  subtitle,
  className,
  subtitleClassName = 'text-xanh-body',
}: {
  children: ReactNode;
  subtitle?: ReactNode;
  className?: string;
  subtitleClassName?: string;
}) {
  return (
    <div className="text-center mb-14">
      <h2 className={cn('font-display text-3xl md:text-4xl font-extrabold mb-4', className ?? 'text-foreground')}>{children}</h2>
      {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
    </div>
  );
}
