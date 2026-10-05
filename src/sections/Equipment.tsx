import { useEffect, useRef, useState } from 'react';
import { Maximize2, Phone, X } from 'lucide-react';
import { galleryImages, packageStyles, packages, services, storePhotos, storeSpecs } from '../data/content';
import { BlockHeader } from '../components/BlockHeader';
import { CarouselButton } from '../components/CarouselButton';
import { cn, scrollToForm } from '../lib';

function Check({ color }: { color: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-2.5 w-2.5"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ServicesCard() {
  return (
    <div className="xanh-card p-7 h-full flex flex-col">
      <BlockHeader title="Dịch vụ cung cấp" subtitle="6 nhóm dịch vụ chính" />
      {/* Mobile: 2 columns, image on top */}
      <div className="grid grid-cols-2 gap-2.5 flex-1 content-start sm:hidden">
        {services.map((sv) => (
          <div key={sv.name} className="rounded-xl p-2 flex flex-col shadow-md gradient-border">
            <div className="w-full rounded-lg bg-white flex items-center justify-center overflow-hidden aspect-[16/10]">
              <img src={sv.img} alt={sv.name} loading="lazy" className="w-[48%] h-[78%] object-contain" />
            </div>
            <div className="text-[11.5px] font-bold text-foreground text-center mt-1.5 leading-tight">{sv.name}</div>
          </div>
        ))}
      </div>
      {/* sm+: horizontal cards */}
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-3 flex-1 content-start">
        {services.map((sv) => (
          <div key={sv.name} className="rounded-xl p-2.5 flex items-center gap-3 shadow-md hover:shadow-lg transition-shadow gradient-border">
            <div className="shrink-0 rounded-lg overflow-hidden bg-white flex items-center justify-center w-[72px] h-[72px]">
              <img src={sv.img} alt={sv.name} loading="lazy" className="w-full h-full object-contain" />
            </div>
            <div className="text-[12.5px] md:text-sm font-bold text-foreground leading-tight">{sv.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StoreCard({ onZoom }: { onZoom: (src: string) => void }) {
  return (
    <div className="xanh-card p-7 h-full flex flex-col">
      <BlockHeader title="Mô hình cửa hàng" subtitle="Vận hành gọn nhẹ, chi phí tối ưu" />
      <div className="flex flex-col md:grid md:grid-cols-1 lg:grid-cols-2 gap-3 flex-1 items-stretch">
        <div className="grid grid-cols-2 md:grid md:grid-cols-2 lg:flex lg:flex-col gap-2.5">
          {storePhotos.map((ph) => (
            <button
              key={ph.src}
              type="button"
              onClick={() => onZoom(ph.src)}
              aria-label={`Phóng to ảnh ${ph.label}`}
              className="group relative rounded-xl overflow-hidden flex-1 cursor-zoom-in aspect-video text-left"
            >
              <img
                src={ph.src}
                alt={ph.label}
                loading="lazy"
                className={cn('absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105', ph.pos)}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent 55%)' }} />
              <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/85 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="h-3.5 w-3.5 text-foreground" />
              </div>
              <div className="absolute bottom-2 left-2.5 text-white text-[11px] font-display font-semibold">{ph.label}</div>
            </button>
          ))}
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 lg:flex lg:flex-col gap-2.5">
          {storeSpecs.map((sp) => (
            <div
              key={sp.label}
              className="bg-white shadow-md hover:shadow-lg transition-shadow border border-border/60 rounded-xl p-3 md:p-4 flex items-center gap-2.5 md:gap-3 flex-1 min-h-0"
            >
              <div className="w-9 h-9 md:w-11 md:h-11 rounded-lg md:rounded-xl gradient-bg flex items-center justify-center shrink-0">
                <sp.icon className="h-4 w-4 md:h-5 md:w-5 text-white" />
              </div>
              <div className="min-w-0">
                <div className="flex items-baseline gap-1 md:gap-1.5 whitespace-nowrap">
                  <span className="font-display font-extrabold text-base md:text-xl gradient-text">{sp.big}</span>
                  <span className="font-display font-bold text-[11px] md:text-xs text-foreground">{sp.unit}</span>
                </div>
                <div className="text-[10px] md:text-[11px] text-xanh-body leading-tight">{sp.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FitNote({ fit, className }: { fit: string; className: string }) {
  return (
    <div className={cn('border-t border-dashed border-border pt-3 text-xs leading-relaxed text-xanh-body', className)}>
      <div className="font-display font-bold text-foreground mb-1">Thích hợp</div>
      {fit}
    </div>
  );
}

function PackagesCard() {
  // Mobile + desktop: portrait cards (featured one is lifted and glowing on lg).
  const portrait = (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch pt-8 md:hidden lg:grid">
      {packages.map((p, i) => {
        const st = packageStyles[i];
        const checklist = (extra?: string) => (
          <ul className={cn('space-y-2.5 flex-1', p.tag ? 'mb-5' : 'mb-4')}>
            {p.items.map((it) => (
              <li key={it} className="flex items-start gap-2 text-sm text-foreground">
                <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: st.chipBg }}>
                  <Check color={st.chipText} />
                </span>
                <span className={cn('leading-snug', extra)}>{it}</span>
              </li>
            ))}
          </ul>
        );
        if (p.tag) {
          return (
            <div key={p.tier} className="relative lg:-translate-y-4 lg:scale-[1.05] z-10">
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 text-[10px] font-display font-extrabold tracking-widest px-3 py-1 rounded-full shadow pointer-events-none whitespace-nowrap inline-flex items-center gap-1"
                style={{ background: '#FFD400', color: '#1A237E' }}
              >
                <span style={{ fontSize: 12, lineHeight: 1 }}>★</span>
                {p.tag}
              </div>
              <div
                className="relative rounded-2xl flex flex-col bg-white overflow-hidden h-full"
                style={{ boxShadow: '0 0 0 2.5px #00C8CA, 0 24px 48px -12px rgba(0,200,202,0.45), 0 0 60px rgba(0,212,255,0.28)' }}
              >
                <div className="relative p-6 text-white overflow-hidden" style={{ background: st.grad }}>
                  <div
                    className="absolute -top-8 -right-8 w-32 h-32 rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.35), transparent 70%)' }}
                  />
                  <div className="relative font-display font-extrabold text-xl mb-3 whitespace-nowrap flex items-center gap-2">
                    Gói {p.tier} <span className="text-lg">✨</span>
                  </div>
                  <div className="relative flex items-baseline gap-1">
                    <span className="font-display font-extrabold text-5xl leading-none">{p.price}</span>
                    <span className="font-display font-bold text-base opacity-90"> triệu</span>
                  </div>
                  <div className="relative mt-2 text-xs text-white/85">Cân bằng đầu tư &amp; doanh thu</div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  {checklist('font-medium')}
                  <FitNote fit={p.fit} className="mb-4" />
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="text-white font-display font-extrabold text-base py-4 rounded-lg w-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg"
                    style={{ background: st.grad }}
                  >
                    <Phone className="h-4 w-4" />
                    Nhận tư vấn ngay
                  </button>
                </div>
              </div>
            </div>
          );
        }
        return (
          <div key={p.tier} className="relative rounded-2xl flex flex-col bg-white border border-border shadow">
            <div className="relative p-5 rounded-t-2xl text-white" style={{ background: st.grad }}>
              <div className="font-display font-extrabold text-xl mb-2 whitespace-nowrap">Gói {p.tier}</div>
              <div className="flex items-baseline gap-1">
                <span className="font-display font-extrabold text-3xl">{p.price}</span>
                <span className="font-display font-bold text-sm opacity-90"> triệu</span>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              {checklist()}
              <FitNote fit={p.fit} className="mb-4" />
              <button
                type="button"
                onClick={scrollToForm}
                className="text-white font-display font-bold text-sm py-3 rounded-lg w-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                style={{ background: st.grad }}
              >
                <Phone className="h-4 w-4" />
                Nhận tư vấn ngay
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );

  // Tablet (md only): horizontal cards, price panel on the left.
  const tablet = (
    <div className="hidden md:flex md:flex-col lg:hidden gap-4 pt-6">
      {packages.map((p, i) => {
        const feat = !!p.tag;
        const st = packageStyles[i];
        return (
          <div key={p.tier} className="relative" style={{ paddingTop: feat ? 14 : 0 }}>
            {feat && (
              <div
                className="absolute z-20 text-[10px] font-display font-extrabold tracking-widest px-3 py-1 rounded-full shadow whitespace-nowrap inline-flex items-center gap-1"
                style={{ top: 4, left: 24, background: '#FFD400', color: '#1A237E' }}
              >
                <span style={{ fontSize: 12, lineHeight: 1 }}>★</span>
                {p.tag}
              </div>
            )}
            <div
              className="rounded-2xl overflow-hidden bg-white grid"
              style={{
                gridTemplateColumns: '240px 1fr',
                boxShadow: feat ? '0 0 0 2.5px #00C8CA, 0 20px 40px -12px rgba(0,200,202,0.4)' : '0 4px 16px rgba(0,0,0,0.06)',
                border: feat ? 'none' : '1px solid #E5E7EB',
              }}
            >
              <div className="relative text-white p-6 flex flex-col justify-center gap-1.5 overflow-hidden" style={{ background: st.grad }}>
                {feat && (
                  <div
                    className="absolute -top-8 -right-8 w-32 h-32 rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.35), transparent 70%)' }}
                  />
                )}
                <div className="relative font-display font-extrabold text-sm opacity-90">Gói</div>
                <div className="relative font-display font-extrabold text-xl flex items-center gap-2 leading-tight">
                  {p.tier}
                  {feat && <span className="text-base">✨</span>}
                </div>
                <div className="relative flex items-baseline gap-1 mt-1.5">
                  <span className="font-display font-extrabold text-4xl leading-none">{p.price}</span>
                  <span className="font-display font-bold text-sm"> triệu</span>
                </div>
                {feat && <div className="relative text-[11px] text-white/85 mt-1.5">Cân bằng đầu tư &amp; doanh thu</div>}
              </div>
              <div className="p-5 flex flex-col gap-3">
                <ul className="grid grid-cols-2 gap-x-5 gap-y-2">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-foreground">
                      <span className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: st.chipBg }}>
                        <Check color={st.chipText} />
                      </span>
                      <span className="leading-snug">{it}</span>
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-[1fr_auto] gap-3 items-center pt-3 border-t border-dashed border-border">
                  <div className="text-xs text-xanh-body leading-relaxed">
                    <span className="font-display font-bold text-foreground">Thích hợp: </span>
                    {p.fit}
                  </div>
                  <button
                    type="button"
                    onClick={scrollToForm}
                    className="text-white font-display font-bold text-sm py-2.5 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 whitespace-nowrap"
                    style={{ background: st.grad }}
                  >
                    <Phone className="h-4 w-4" />
                    Tư vấn ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="xanh-card p-7">
      <BlockHeader title="Máy móc thiết bị" subtitle="Ba gói máy móc linh hoạt, giá cụ thể như bên dưới" />
      {portrait}
      {tablet}
    </div>
  );
}

function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: -1 | 1) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };
  return (
    <div className="xanh-card p-7 mt-6 relative">
      <BlockHeader title="Hình ảnh thực tế tại cửa hàng" subtitle="Hoạt động đào tạo và vận hành thực tế" />
      <div className="relative">
        <div ref={ref} className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar">
          {galleryImages.map((src, i) => (
            <div
              key={src}
              className="snap-start flex-shrink-0 w-full sm:w-[45%] lg:w-[calc((100%-2rem)/3)] aspect-video rounded-xl overflow-hidden bg-muted"
            >
              <img src={src} alt={`Hình ảnh cửa hàng Xanh Laundry ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <CarouselButton dir={-1} onClick={() => scroll(-1)} className="left-2 sm:left-3 bg-card border border-border hover:bg-muted" />
        <CarouselButton dir={1} onClick={() => scroll(1)} className="right-2 sm:right-3 bg-card border border-border hover:bg-muted" />
      </div>
    </div>
  );
}

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center p-6"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(4px)' }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Đóng"
        className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/95 hover:bg-white flex items-center justify-center shadow-lg transition-colors"
      >
        <X className="h-6 w-6 text-foreground" />
      </button>
      <img src={src} alt="" onClick={(e) => e.stopPropagation()} className="max-w-[92vw] max-h-[88vh] rounded-xl shadow-2xl object-contain" />
    </div>
  );
}

export function Equipment() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Đa dạng <span className="gradient-text">gói đầu tư</span> — sẵn sàng kinh doanh sinh lời
          </h2>
          <p className="text-xanh-body max-w-2xl mx-auto">Ba gói thiết bị linh hoạt phù hợp với mọi quy mô mặt bằng và ngân sách</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ServicesCard />
          <StoreCard onZoom={setLightboxSrc} />
        </div>
        <PackagesCard />
        <Gallery />
      </div>
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </section>
  );
}
