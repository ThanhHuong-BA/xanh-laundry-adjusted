import { useEffect, useRef, useState } from 'react';
import { Check, ChevronLeft, ChevronRight, Smartphone } from 'lucide-react';
import { features } from '../data/content';
import { cn } from '../lib';

type Feature = (typeof features)[number];

const AUTOPLAY_MS = 4000;
const arrowBtn =
  'absolute top-1/2 -translate-y-1/2 z-20 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-muted transition-all disabled:opacity-30 disabled:cursor-not-allowed';

function PhoneMockup({ feat, index, imgIdx, variant }: { feat: Feature; index: number; imgIdx: number; variant: 'desktop' | 'mobile' }) {
  return (
    <div className="relative bg-black rounded-[2.5rem] p-2.5 shadow-2xl">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />
      <div className={cn('relative bg-white rounded-[2rem] overflow-hidden', variant === 'desktop' ? 'aspect-[9/19]' : 'aspect-[9/18.5]')}>
        <div className="relative w-full h-full">
          {feat.images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={feat.title}
              loading="lazy"
              className={cn(
                'absolute inset-0 w-full h-full object-cover transition-all duration-[400ms]',
                i === imgIdx ? 'opacity-100 translate-x-0' : i < imgIdx ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full',
              )}
            />
          ))}
          {feat.images.length > 1 && (
            <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-1 z-20">
              {feat.images.map((src, i) => (
                <div
                  key={src}
                  className={cn('rounded-full transition-all duration-300', i === imgIdx ? 'w-4 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/40')}
                />
              ))}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <div className={cn('inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r mb-2', feat.color)}>
              <feat.icon className="w-3 h-3" />
              <span className="text-[10px] font-semibold">Tính năng {index + 1}</span>
            </div>
            <h4 className="text-sm font-bold mb-1">{feat.title}</h4>
            <p className="text-xs text-gray-200">{feat.description}</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full" />
    </div>
  );
}

function ImageDots({ count, active, onSelect }: { count: number; active: number; onSelect: (i: number) => void }) {
  return (
    <div className="flex justify-center mt-3 gap-1.5">
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Ảnh ${i + 1}`}
          onClick={() => onSelect(i)}
          className={cn(
            'rounded-full transition-all duration-300',
            i === active ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50',
          )}
        />
      ))}
    </div>
  );
}

export function TinyClean() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState<Record<number, number>>({});

  const imgIdx = (fi: number) => imageIndex[fi] ?? 0;
  const setImgIdx = (fi: number, i: number) => setImageIndex((m) => ({ ...m, [fi]: i }));
  const select = (i: number) => {
    setActive(i);
    setAutoPlay(false);
  };

  // Start cycling from the first feature whenever the section scrolls into view; stop when it leaves.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAutoPlay(true);
          setActive(0);
        } else {
          setAutoPlay(false);
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(() => setActive((a) => (a + 1) % features.length), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [autoPlay]);

  const activeFeat = features[active];
  const cur = imgIdx(active);

  return (
    <section id="tinyclean" ref={sectionRef} className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            <span className="gradient-text">TinyClean</span> — nền tảng công nghệ giặt ủi #1 Việt Nam
          </h2>
          <p className="text-lg text-xanh-body max-w-2xl mx-auto">
            Xây dựng từ 9 năm kinh nghiệm vận hành thực tế của HERAMO — nền tảng duy nhất trên thị trường được thiết kế chuyên biệt
            cho ngành giặt ủi.
          </p>
        </div>
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">Tính năng toàn diện</h3>
          <p className="text-lg text-xanh-body max-w-2xl mx-auto">Mọi thứ bạn cần để quản lý tiệm giặt nhẹ nhàng và hiệu quả</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Desktop feature list */}
          <div className="hidden lg:block space-y-4">
            {features.map((f, i) => {
              const isActive = active === i;
              return (
                <div
                  key={f.title}
                  onClick={() => select(i)}
                  className={cn(
                    'relative p-6 rounded-2xl cursor-pointer transition-all duration-300 bg-card shadow-lg border-2',
                    isActive ? 'scale-105 border-primary shadow-xl' : 'border-border hover:border-primary/30',
                  )}
                >
                  {isActive && <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-16 bg-primary rounded-r-full" />}
                  <div className="flex items-start gap-4">
                    <div className={cn('flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br', f.color)}>
                      <f.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className={cn('text-lg font-bold mb-2 transition-colors', isActive ? 'text-foreground' : 'text-foreground/80')}>{f.title}</h4>
                      <p className={cn('text-sm transition-colors', isActive ? 'text-xanh-body' : 'text-muted-foreground')}>{f.description}</p>
                    </div>
                    {isActive && (
                      <div className="flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary-foreground" />
                        </div>
                      </div>
                    )}
                  </div>
                  {isActive && autoPlay && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted rounded-b-2xl overflow-hidden">
                      <div className="h-full gradient-bg animate-progress" />
                    </div>
                  )}
                </div>
              );
            })}
            <div className="flex items-center gap-3 pt-4 px-6">
              <button
                type="button"
                onClick={() => setAutoPlay((a) => !a)}
                className={cn(
                  'text-sm font-medium transition-colors px-3 py-1.5 rounded-lg',
                  autoPlay ? 'text-primary bg-primary/10 hover:bg-primary/20' : 'text-muted-foreground bg-muted hover:bg-muted/80',
                )}
              >
                {autoPlay ? '⏸ Tạm dừng' : '▶ Tự động chuyển'}
              </button>
              <div className="flex gap-2">
                {features.map((f, i) => (
                  <button
                    key={f.title}
                    type="button"
                    aria-label={`Tính năng ${i + 1}`}
                    onClick={() => select(i)}
                    className={cn(
                      'h-2 rounded-full transition-all duration-300',
                      active === i ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50',
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop phone */}
          <div className="hidden lg:block relative self-start">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-[2rem] blur-3xl opacity-50 animate-pulse" />
            <div className="relative mx-auto w-full max-w-[320px]">
              {activeFeat.images.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Ảnh trước"
                    onClick={() => setImgIdx(active, Math.max(0, cur - 1))}
                    disabled={cur === 0}
                    className={cn(arrowBtn, '-left-12 w-9 h-9')}
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                  </button>
                  <button
                    type="button"
                    aria-label="Ảnh tiếp"
                    onClick={() => setImgIdx(active, Math.min(activeFeat.images.length - 1, cur + 1))}
                    disabled={cur === activeFeat.images.length - 1}
                    className={cn(arrowBtn, '-right-12 w-9 h-9')}
                  >
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </button>
                </>
              )}
              <PhoneMockup feat={activeFeat} index={active} imgIdx={cur} variant="desktop" />
              {activeFeat.images.length > 1 && (
                <ImageDots count={activeFeat.images.length} active={cur} onSelect={(i) => setImgIdx(active, i)} />
              )}
            </div>
          </div>

          {/* Mobile / tablet accordion */}
          <div className="lg:hidden space-y-3 col-span-full">
            {features.map((f, i) => {
              const expanded = expandedMobile === i;
              const mi = imgIdx(i);
              return (
                <div
                  key={f.title}
                  className={cn(
                    'bg-card rounded-2xl border-2 transition-all duration-300 overflow-visible',
                    expanded ? 'border-primary shadow-xl' : 'border-border shadow-md',
                  )}
                >
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={cn('flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br', f.color)}>
                        <f.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-bold text-foreground mb-1">{f.title}</h4>
                        <p className="text-sm text-xanh-body mb-3">{f.description}</p>
                        <button
                          type="button"
                          aria-expanded={expanded}
                          onClick={() => {
                            setExpandedMobile(expanded ? null : i);
                            select(i);
                          }}
                          className={cn(
                            'inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300',
                            expanded ? 'gradient-bg text-primary-foreground shadow-lg' : 'bg-primary/10 text-primary hover:bg-primary/20',
                          )}
                        >
                          <Smartphone className="w-4 h-4" />
                          Xem trên ứng dụng
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className={cn(
                      'transition-all duration-500 ease-in-out',
                      expanded ? 'max-h-[700px] opacity-100 overflow-visible' : 'max-h-0 opacity-0 overflow-hidden',
                    )}
                  >
                    <div className="px-4 pb-6 pt-2">
                      <div className="relative mx-auto w-full max-w-[280px]">
                        {f.images.length > 1 && (
                          <>
                            <button
                              type="button"
                              aria-label="Ảnh trước"
                              onClick={() => setImgIdx(i, Math.max(0, mi - 1))}
                              disabled={mi === 0}
                              className={cn(arrowBtn, '-left-10 w-8 h-8')}
                            >
                              <ChevronLeft className="w-4 h-4 text-foreground" />
                            </button>
                            <button
                              type="button"
                              aria-label="Ảnh tiếp"
                              onClick={() => setImgIdx(i, Math.min(f.images.length - 1, mi + 1))}
                              disabled={mi === f.images.length - 1}
                              className={cn(arrowBtn, '-right-10 w-8 h-8')}
                            >
                              <ChevronRight className="w-4 h-4 text-foreground" />
                            </button>
                          </>
                        )}
                        <PhoneMockup feat={f} index={i} imgIdx={mi} variant="mobile" />
                        {f.images.length > 1 && <ImageDots count={f.images.length} active={mi} onSelect={(ii) => setImgIdx(i, ii)} />}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
