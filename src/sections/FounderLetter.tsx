import { Award, Mail, Quote } from 'lucide-react';
import { founderLetter, founderLetterImage, type RichText } from '../data/content';
import { cn } from '../lib';

function renderRich(content: RichText) {
  return content.map((n, i) =>
    typeof n === 'string' ? (
      n
    ) : (
      <b key={i} style={{ color: '#1A237E' }}>
        {n.b}
      </b>
    ),
  );
}

export function FounderLetter() {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(180deg,#FFFFFF 0%,#EDF7FA 60%,#E4F3F5 100%)' }}>
      <div className="container">
        <div className="text-center mb-8 md:mb-10">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xanh-navy font-display font-extrabold text-[11px] tracking-wider mb-3.5"
            style={{ background: 'linear-gradient(135deg,rgba(0,212,255,0.1),rgba(0,200,150,0.1))' }}
          >
            <Mail className="h-3.5 w-3.5 text-primary" />
            THƯ NGỎ TỪ NHÀ SÁNG LẬP
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground" style={{ letterSpacing: '-0.01em' }}>
            Gửi Quý đối tác của Xanh Laundry
          </h2>
        </div>
        <div className="bg-white rounded-2xl px-6 py-9 md:px-14 md:py-12 shadow-xl relative">
          <div className="absolute -top-6 md:-top-7 left-6 md:left-10 w-12 h-12 md:w-14 md:h-14 rounded-full gradient-bg flex items-center justify-center shadow-lg">
            <Quote className="h-6 w-6 md:h-7 md:w-7 text-primary-foreground" />
          </div>
          <div className="grid md:grid-cols-[minmax(0,1fr)_38%] gap-6 md:gap-10 mt-2">
            <div className="text-[14.5px] md:text-[15.5px] leading-[1.8] text-foreground">
              {founderLetter.map((p, i) => (
                <p
                  key={i}
                  className={cn(
                    p.lead ? 'font-display font-semibold text-[17px] md:text-lg text-xanh-navy leading-snug mb-3.5' : 'mb-3.5 last:mb-0',
                  )}
                >
                  {renderRich(p.content)}
                </p>
              ))}
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3] md:aspect-auto">
              <img
                src={founderLetterImage}
                alt="Nhà sáng lập Xanh Laundry tại lễ khai trương"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: '60% center' }}
              />
            </div>
          </div>
          <div className="mt-7 pt-5 border-t border-border flex items-center gap-3 md:gap-4 flex-wrap">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden shrink-0 shadow-md">
              <img src="/images/founder-phuc.jpg" alt="Lê Phước Phúc" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-display font-extrabold text-[15px] md:text-[17px] text-xanh-navy leading-tight">Lê Phước Phúc</div>
              <div className="gradient-text font-display font-bold text-[10.5px] md:text-[11.5px] uppercase mt-0.5" style={{ letterSpacing: '0.08em' }}>
                CEO Xanh Laundry
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full" style={{ background: '#FFF8E7', border: '1px solid #F5D77A' }}>
              <span style={{ color: '#B8860B', display: 'inline-flex' }}>
                <Award className="h-3.5 w-3.5" />
              </span>
              <span className="font-display font-bold text-[10.5px] md:text-[11px]" style={{ color: '#7A5B00' }}>
                10 năm kinh nghiệm ngành giặt
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
