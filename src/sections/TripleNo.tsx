import { Ban } from 'lucide-react';
import { guarantees } from '../data/content';
import { SectionHeading } from '../components/SectionHeading';
import { CtaButton } from '../components/CtaButton';

export function TripleNo() {
  return (
    <section className="py-20 bg-xanh-navy">
      <div className="container">
        <SectionHeading className="text-primary-foreground">
          Cam kết <span className="gradient-text">TRỌN ĐỜI</span>
        </SectionHeading>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {guarantees.map((g) => (
            <div key={g.title} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-6 text-center">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                <Ban className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-primary-foreground mb-2">{g.title}</h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
