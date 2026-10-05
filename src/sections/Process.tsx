import { Play } from 'lucide-react';
import { openingVideos, processSteps } from '../data/content';
import { SectionHeading } from '../components/SectionHeading';
import { BlockHeader } from '../components/BlockHeader';
import { CtaButton } from '../components/CtaButton';

const isYouTube = (src: string) => /youtube\.com|youtu\.be/.test(src);

function VideoFrame({ title, src }: { title: string; src: string }) {
  if (!src) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-xanh-body">
        <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center">
          <Play className="h-6 w-6 text-primary-foreground" />
        </div>
        <span className="text-sm">Video sắp cập nhật</span>
      </div>
    );
  }
  if (isYouTube(src)) {
    return (
      <iframe
        src={src}
        title={title}
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }
  return <video src={src} title={title} controls playsInline preload="metadata" className="w-full h-full object-cover bg-black" />;
}

export function Process() {
  return (
    <section id="process" className="py-20">
      <div className="container">
        <SectionHeading subtitle="Chỉ 2 tuần từ lúc đăng ký tới lúc khai trương và bắt đầu kinh doanh">
          Quy trình nhượng quyền — <span className="gradient-text">tận tâm, đơn giản, minh bạch</span>
        </SectionHeading>
        <div className="max-w-3xl space-y-6 ml-0 md:ml-[12%]">
          {processSteps.map((st) => (
            <div key={st.num} className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                <span className="text-sm font-display font-extrabold text-primary-foreground">{st.num}</span>
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-foreground mb-1">{st.title}</h3>
                <p className="text-sm text-xanh-body leading-relaxed">{st.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="xanh-card p-7 mt-14">
          <BlockHeader title="Khai trương cửa hàng Xanh Laundry" />
          <div className="grid md:grid-cols-2 gap-6">
            {openingVideos.map((v) => (
              <div key={v.title} className="aspect-video rounded-xl overflow-hidden bg-xanh-light-gray border border-border">
                <VideoFrame title={v.title} src={v.src} />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <CtaButton />
          </div>
        </div>
      </div>
    </section>
  );
}
