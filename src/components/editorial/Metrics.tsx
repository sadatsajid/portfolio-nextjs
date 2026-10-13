import { METRICS } from '@/data/portfolio';

export function Metrics() {
  return (
    <section aria-label="Results at a glance" className="page-frame pb-20">
      <dl className="border-rule grid grid-cols-2 border-t md:grid-cols-4">
        {METRICS.map((m, i) => (
          <div
            key={m.label}
            data-reveal
            style={{ transitionDelay: `${i * 70}ms` }}
            className="border-rule flex flex-col-reverse gap-2 pt-10 pb-2 odd:pr-6 even:border-l even:pl-6 md:border-l md:px-6 md:first:border-l-0 md:first:pl-0"
          >
            <dt>
              <span className="text-ink-soft block text-[14px] leading-tight">
                {m.label}
              </span>
              <span className="text-muted mt-1 block text-[12px]">
                {m.context}
              </span>
            </dt>
            <dd
              className="font-heading text-accent leading-none font-bold tabular-nums"
              style={{
                fontSize: 'clamp(44px, 5vw, 72px)',
                letterSpacing: '-0.06em',
              }}
            >
              {m.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
