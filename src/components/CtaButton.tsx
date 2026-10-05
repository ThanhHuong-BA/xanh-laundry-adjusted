import { scrollToForm, cn } from '../lib';

/** Yellow "NHẬN TƯ VẤN NGAY" button that scrolls to the registration form. */
export function CtaButton({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        scrollToForm();
      }}
      className={cn('btn-cta rounded-lg transition-transform', className ?? 'px-8 py-4 text-base hover:scale-105 shadow-lg')}
    >
      NHẬN TƯ VẤN NGAY
    </button>
  );
}
