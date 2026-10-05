import { personas } from '../data/content';
import { SectionHeading } from '../components/SectionHeading';

export function WhoIsItFor() {
  return (
    <section className="py-20 bg-xanh-light-gray">
      <div className="container">
        <SectionHeading subtitle="Không cần kinh nghiệm ngành giặt ủi">
          Ai nên đầu tư <span className="gradient-text">XANH LAUNDRY</span>?
        </SectionHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((p) => (
            <div key={p.title} className="xanh-card xanh-card-hover p-6 text-center transition-all duration-300">
              <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-xanh-body leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
