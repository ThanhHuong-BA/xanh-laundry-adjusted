import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib';

/** Round prev/next arrow overlaid on a slider. */
export function CarouselButton({
  dir,
  onClick,
  className,
}: {
  dir: -1 | 1;
  onClick: () => void;
  className: string;
}) {
  const Icon = dir < 0 ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir < 0 ? 'Ảnh trước' : 'Ảnh tiếp'}
      className={cn(
        'absolute top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-lg flex items-center justify-center transition-all',
        className,
      )}
    >
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
    </button>
  );
}
