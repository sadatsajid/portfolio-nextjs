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

      <div className="mt-12 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${CONTACT.email}`}
          className="bg-accent text-paper font-heading font-semibold text-[15px] tracking-heading px-7 py-4 rounded-full inline-flex items-center gap-3 hover:scale-[1.02] transition-transform"
        >
          {CONTACT.email}
          <span aria-hidden>→</span>
        </a>
        <div className="flex min-w-0 flex-nowrap items-center gap-1 sm:gap-3">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-1.5 py-4 text-[13px] text-ink-soft underline underline-offset-2 transition-colors hover:text-ink sm:px-3 sm:text-[15px]"
          >
            LinkedIn
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-1.5 py-4 text-[13px] text-ink-soft underline underline-offset-2 transition-colors hover:text-ink sm:px-3 sm:text-[15px]"
          >
            GitHub
          </a>
          <a
            href={CONTACT.resume}
            className="whitespace-nowrap px-1.5 py-4 text-[13px] text-ink-soft underline underline-offset-2 transition-colors hover:text-ink sm:px-3 sm:text-[15px]"
          >
            <span className="sm:hidden">Resume</span>
            <span className="hidden sm:inline">Resume (PDF)</span>
          </a>
        </div>
      </div>

      <div className="mt-24 pt-10 border-t border-rule grid grid-cols-2 md:grid-cols-4 gap-6 text-[13px]">
        {[
          { label: 'Based in',      value: CONTACT.location },
          { label: 'Currently',     value: `${CONTACT.role} @ Selise` },
          { label: 'Available for', value: 'Full-time · Contract · Remote' },
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
