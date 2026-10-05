import { whyCards } from '../data/content';

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 bg-xanh-light-gray">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Vì sao nên chọn <span className="gradient-text">XANH LAUNDRY</span>?
          </h2>
          <p className="text-xanh-body max-w-2xl mx-auto">Mô hình nhượng quyền giặt sấy thông minh với chi phí thấp nhất, công nghệ tốt nhất</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyCards.map((c) => (
            <div key={c.title} className="xanh-card xanh-card-hover overflow-hidden transition-all duration-300 cursor-default">
              <img src={c.img} alt={c.title} loading="lazy" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-xanh-body leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
