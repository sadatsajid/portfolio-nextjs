import { CONTACT } from '@/data/portfolio';

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 max-w-[1200px] mx-auto px-6 lg:px-10 py-28">
      <h2
        className="font-heading font-bold tracking-display leading-display text-ink"
        style={{ fontSize: 'clamp(48px, 7.5vw, 108px)' }}
      >
        Hiring? Building?
        <br />
        <span className="text-accent">Let&apos;s talk.</span>
      </h2>

      <p className="font-serif text-[clamp(17px,1.6vw,22px)] leading-[1.45] text-ink-soft mt-8 max-w-[600px]">
        I read every email. If you&apos;re looking for a senior frontend lead — full-time
        or contract — start here.
      </p>

      <div className="mt-12 flex flex-wrap gap-3 items-center">
        <a
          href={`mailto:${CONTACT.email}`}
          className="bg-accent text-paper font-heading font-semibold text-[15px] tracking-heading px-7 py-4 rounded-full inline-flex items-center gap-3 hover:scale-[1.02] transition-transform"
        >
          {CONTACT.email}
          <span aria-hidden>→</span>
        </a>
        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15px] text-ink-soft underline underline-offset-2 px-3 py-4 hover:text-ink transition-colors"
        >
          LinkedIn
        </a>
        <a
          href={CONTACT.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15px] text-ink-soft underline underline-offset-2 px-3 py-4 hover:text-ink transition-colors"
        >
          GitHub
        </a>
        <a
          href={CONTACT.resume}
          className="text-[15px] text-ink-soft underline underline-offset-2 px-3 py-4 hover:text-ink transition-colors"
        >
          Resume (PDF)
        </a>
      </div>

      <div className="mt-24 pt-10 border-t border-rule grid grid-cols-2 md:grid-cols-4 gap-6 text-[13px]">
        {[
          { label: 'Based in',      value: CONTACT.location },
          { label: 'Currently',     value: `${CONTACT.role} @ Selise` },
          { label: 'Available for', value: 'Full-time · Contract' },
          { label: 'Response',      value: '<24h, weekdays' },
        ].map(item => (
          <div key={item.label}>
            <div className="text-[11px] font-heading font-semibold tracking-heading text-muted mb-1.5">
              {item.label}
            </div>
            <div className="text-ink-soft">{item.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
