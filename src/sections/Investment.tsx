import { Gift } from 'lucide-react';
import { investmentItems } from '../data/content';
import { SectionHeading } from '../components/SectionHeading';
import { CtaButton } from '../components/CtaButton';

export function Investment() {
  return (
    <section id="investment" className="py-20 bg-xanh-light-gray">
      <div className="container">
        <SectionHeading subtitle="Minh bạch từng đồng - không phí ẩn">
          Đầu tư <span className="gradient-text">chỉ từ 150 triệu</span>
        </SectionHeading>
        <div className="xanh-card max-w-3xl mx-auto overflow-hidden">
          <div className="divide-y divide-border">
            {investmentItems.map((it) => (
              <div key={it.name} className="flex items-center p-4 md:p-5">
                <span className="text-sm md:text-base text-foreground pr-4 flex-1 flex items-center gap-2 flex-wrap">
                  {it.name}
                  {it.promo && (
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10.5px] font-display font-extrabold uppercase whitespace-nowrap"
                      style={{ background: '#FFD400', color: '#1A237E', letterSpacing: 0.5 }}
                    >
                      <Gift className="h-3 w-3" />
                      Ưu đãi có hạn
                    </span>
                  )}
                </span>
                <span className="text-sm md:text-base font-display font-bold whitespace-nowrap w-[110px] md:w-[200px] text-right flex flex-col md:flex-row items-end md:items-baseline justify-end md:gap-2 leading-tight">
                  {it.oldCost && <span className="text-[11px] md:text-xs text-muted-foreground line-through font-normal">{it.oldCost}</span>}
                  <span className="text-primary">{it.cost}</span>
                </span>
              </div>
            ))}
            <div className="flex justify-between items-center p-4 md:p-5 gradient-bg">
              <span className="text-base md:text-lg font-display font-bold text-primary-foreground">TỔNG ĐẦU TƯ</span>
              <span className="text-lg md:text-xl font-display font-extrabold text-primary-foreground">từ 150 triệu</span>
            </div>
          </div>
          <div className="p-4 md:p-5 bg-muted/50 text-sm text-xanh-body">
            <strong>Chi phí hàng tháng:</strong> Phí phần mềm TinyClean 1.000.000đ/tháng · Chỉ cần điện thoại cá nhân, không máy POS
          </div>
        </div>
        <p className="text-center text-xanh-body mt-10 text-lg font-display font-semibold">
          Sở hữu ngay cửa hàng giặt ủi chuyên nghiệp với chi phí tốt nhất thị trường
        </p>
        <div className="text-center mt-10">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
