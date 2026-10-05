import { cn } from '../lib';

/** Card header with a gradient accent bar on the left. */
export function BlockHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className={cn('mb-6 pb-4 flex gap-4 border-b border-border', subtitle ? 'items-start' : 'items-center')}>
      <div className={cn('w-1 self-stretch gradient-bg rounded-full shrink-0', subtitle ? 'min-h-[44px]' : 'min-h-[28px]')} />
      <div>
        <h3 className="font-display font-extrabold text-foreground text-xl leading-tight">{title}</h3>
        {subtitle && <div className="text-xs text-xanh-body mt-1">{subtitle}</div>}
      </div>
    </div>
  );
}
