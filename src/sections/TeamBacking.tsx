import { founders, foundersIntro, teamPhotos } from '../data/content';

export function TeamBacking() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-5 leading-tight">
            Đội ngũ <span className="gradient-text">sáng lập</span>
          </h2>
          <p className="text-base text-xanh-body leading-relaxed max-w-3xl mx-auto">{foundersIntro}</p>
        </div>
        <div className="space-y-10 md:space-y-14">
          {founders.map((f) => (
            <div key={f.name}>
              {/* Mobile: 96px avatar + name row, bio below */}
              <div className="md:hidden">
                <div className="flex items-start gap-4 mb-3">
                  <div className="relative shrink-0 w-24 h-24">
                    <div className="absolute inset-0 gradient-bg rounded-xl translate-x-[5px] translate-y-[5px]" />
                    <img src={f.img} alt={f.name} loading="lazy" className="relative w-full h-full object-cover object-top rounded-xl shadow-md" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display font-extrabold text-lg text-foreground leading-tight">{f.name}</div>
                    <div className="text-xs font-semibold gradient-text mt-1 leading-snug">{f.role}</div>
                  </div>
                </div>
                <p className="text-sm text-xanh-body leading-relaxed border-l-4 pl-4 gradient-border-left">{f.bio}</p>
              </div>
              {/* md+: portrait in 3/12, text in 9/12 */}
              <div className="hidden md:grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-3">
                  <div className="relative mx-auto max-w-[180px]">
                    <div className="absolute inset-0 gradient-bg rounded-2xl translate-x-2 translate-y-2" />
                    <img src={f.img} alt={f.name} loading="lazy" className="relative w-full aspect-square object-cover object-top rounded-2xl shadow-xl" />
                  </div>
                </div>
                <div className="md:col-span-9">
                  <div className="font-display font-extrabold text-xl md:text-2xl text-foreground leading-tight mb-1">{f.name}</div>
                  <div className="font-display font-bold text-sm gradient-text mb-5">{f.role}</div>
                  <p className="text-base text-xanh-body leading-relaxed border-l-4 pl-5 gradient-border-left">{f.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Left edge lines up with the founder portraits above (centered 180px image inside the 3/12 column). */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 md:mt-16"
          style={{ marginLeft: 'max(0px, calc(((100% - 352px) / 4 - 116px) / 2))' }}
        >
          {teamPhotos.map((src, i) => (
            <div key={src} className="aspect-[16/10] rounded-2xl overflow-hidden bg-xanh-light-gray border border-border shadow-md">
              <img src={src} alt={`Đội ngũ Xanh Laundry ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
