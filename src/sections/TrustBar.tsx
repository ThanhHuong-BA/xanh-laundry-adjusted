import { metrics } from '../data/content';

export function TrustBar() {
  return (
    <section className="bg-xanh-navy py-10">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m) => (
            <div key={m.label} className="text-center">
              <p className="text-3xl md:text-4xl font-display font-extrabold gradient-text mb-1">{m.value}</p>
              <p className="text-sm text-primary-foreground/70">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
