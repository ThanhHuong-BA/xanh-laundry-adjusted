import { useEffect, useState } from 'react';
import { PHONE_DISPLAY, PHONE_TEL, heroBullets, heroSlides } from '../data/content';
import { CtaButton } from '../components/CtaButton';
import { CarouselButton } from '../components/CarouselButton';
import { cn } from '../lib';

const AUTOPLAY_MS = 4500;

export function Hero() {
  const [idx, setIdx] = useState(0);
  const go = (i: number) => setIdx((i + heroSlides.length) % heroSlides.length);

  // Restarting the timer on every index change means a manual click resets the countdown.
  useEffect(() => {
    const t = setTimeout(() => setIdx((i) => (i + 1) % heroSlides.length), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [idx]);

  return (
    <section className="relative min-h-screen flex items-center pt-14 overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl gradient-bg" />
      <div className="container py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Nhượng quyền giặt sấy thông minh <span className="gradient-text">chỉ từ 150 triệu</span>
            </h1>
            <p className="text-lg text-xanh-body leading-relaxed mb-8 max-w-xl">
              Được xây dựng trên nền tảng gần 10 năm kinh nghiệm thực chiến kinh doanh, vận hành và mở rộng trong ngành giặt ủi
              cao cấp với gần 20 cửa hàng và 162K+ khách hàng tin dùng. Công nghệ và đào tạo chuyên biệt từ A-Z cho ngành giặt
              sấy, giặt ủi, vệ sinh giày. Phí nhượng quyền trọn đời. Thu hồi vốn sau 12 - 18 tháng.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <CtaButton className="w-[220px] py-4 text-base hover:scale-105 shadow-lg" />
              <a
                href={PHONE_TEL}
                className="border-2 border-primary text-primary hover:text-primary w-[220px] py-4 rounded-lg text-base font-display font-bold hover:bg-primary/5 transition-colors text-center"
              >
                GỌI {PHONE_DISPLAY}
              </a>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-xanh-body">
              {heroBullets.map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full gradient-bg" />
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square bg-muted">
              {heroSlides.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Cửa hàng XANH LAUNDRY ${i + 1}`}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className={cn(
                    'absolute inset-0 w-full h-full object-cover transition-opacity duration-700',
                    i === idx ? 'opacity-100' : 'opacity-0',
                  )}
                />
              ))}
              <CarouselButton dir={-1} onClick={() => go(idx - 1)} className="left-3 bg-card/90 hover:bg-card" />
              <CarouselButton dir={1} onClick={() => go(idx + 1)} className="right-3 bg-card/90 hover:bg-card" />
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Ảnh ${i + 1}`}
                    onClick={() => go(i)}
                    className={cn('h-2 rounded-full transition-all', i === idx ? 'w-6 bg-white' : 'w-2 bg-white/60')}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
