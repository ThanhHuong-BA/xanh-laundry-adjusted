import { comparisonCriteria, comparisonModels } from '../data/content';
import { SectionHeading } from '../components/SectionHeading';
import { cn } from '../lib';

const stickyCol = 'sticky left-0 z-20 bg-background w-[130px] md:w-auto min-w-[130px] shadow-[4px_0_6px_-2px_rgba(0,0,0,0.08)]';

export function Comparison() {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeading>
          So sánh với các <span className="gradient-text">mô hình nhượng quyền giặt sấy khác</span>
        </SectionHeading>
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-0" style={{ minWidth: 820 }}>
            <thead>
              <tr>
                <th className={cn(stickyCol, 'text-left p-2 md:p-3 text-xs md:text-sm font-semibold text-xanh-body')}>Tiêu chí</th>
                {comparisonModels.map((m) => (
                  <th
                    key={m.name}
                    className={cn(
                      'p-2 md:p-3 text-center text-xs md:text-sm font-display font-bold whitespace-pre-line',
                      m.highlight ? 'gradient-bg text-primary-foreground rounded-t-xl' : 'text-foreground',
                    )}
                  >
                    {m.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonCriteria.map((c, ri) => (
                <tr key={c} className="border-b border-border/50">
                  <td className={cn(stickyCol, 'p-2 md:p-3 text-xs md:text-sm text-foreground font-semibold align-top')}>{c}</td>
                  {comparisonModels.map((m) => (
                    <td
                      key={m.name}
                      className={cn(
                        'p-2 md:p-3 text-left align-top text-xs md:text-sm leading-relaxed border-b border-border',
                        m.highlight ? 'bg-primary/5 text-foreground font-semibold' : 'text-xanh-body',
                      )}
                    >
                      {m.values[ri]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
