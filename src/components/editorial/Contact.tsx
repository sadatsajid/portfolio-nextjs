import type { ReactNode } from 'react';

import { ArrowDownIcon } from '@/components/icons/ArrowDownIcon';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { CONTACT } from '@/data/portfolio';

const CHIP_CLASS =
  'inline-flex shrink-0 cursor-pointer items-center gap-1 whitespace-nowrap rounded-full border border-rule bg-paper-deep px-2 py-1.5 font-heading text-[11px] font-semibold tracking-heading text-ink-soft transition-colors hover:border-accent/40 hover:bg-accent-soft hover:text-accent sm:gap-1.5 sm:px-3.5 sm:py-2 sm:text-[13px]';

const CHIP_ICON_CLASS = 'h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4';

function ContactChip({
  href,
  label,
  ariaLabel,
  icon,
  external = false,
}: {
  href: string;
  label: ReactNode;
  ariaLabel: string;
  icon: ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={CHIP_CLASS}
    >
      {icon}
      {label}
    </a>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-[1200px] scroll-mt-24 px-6 py-28 lg:px-10"
    >
      <h2
        className="font-heading tracking-display leading-display text-ink font-bold"
        style={{ fontSize: 'clamp(48px, 7.5vw, 108px)' }}
      >
        Hiring? Building?
        <br />
        <span className="text-accent">Let&apos;s talk.</span>
      </h2>

      <p className="text-ink-soft mt-8 max-w-[600px] font-serif text-[clamp(17px,1.6vw,22px)] leading-[1.45]">
        I read every email. If you&apos;re looking for a senior frontend lead —
        full-time or contract — start here.
      </p>

      <div className="mt-12 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${CONTACT.email}`}
          className="bg-accent text-paper font-heading tracking-heading inline-flex items-center gap-3 rounded-full px-7 py-4 text-[15px] font-semibold transition-transform hover:scale-[1.02]"
        >
          {CONTACT.email}
          <span aria-hidden>→</span>
        </a>
        <div className="flex min-w-0 flex-nowrap items-center gap-1.5 sm:gap-2.5">
          <ContactChip
            href={CONTACT.linkedin}
            ariaLabel="LinkedIn profile"
            external
            icon={
              <LinkedInIcon
                className={`${CHIP_ICON_CLASS} fill-current`}
                aria-hidden
              />
            }
            label="LinkedIn"
          />
          <ContactChip
            href={CONTACT.github}
            ariaLabel="GitHub profile"
            external
            icon={
              <GitHubIcon
                className={`${CHIP_ICON_CLASS} fill-current`}
                aria-hidden
              />
            }
            label="GitHub"
          />
          <ContactChip
            href={CONTACT.resume}
            ariaLabel="Resume (PDF)"
            icon={
              <ArrowDownIcon
                className={`${CHIP_ICON_CLASS} stroke-current`}
                aria-hidden
              />
            }
            label={
              <>
                <span className="sm:hidden">Resume</span>
                <span className="hidden sm:inline">Resume (PDF)</span>
              </>
            }
          />
        </div>
      </div>

      <div className="border-rule mt-24 grid grid-cols-2 gap-6 border-t pt-10 text-[13px] md:grid-cols-4">
        {[
          { label: 'Based in', value: CONTACT.location },
          { label: 'Currently', value: `${CONTACT.role} @ Selise` },
          { label: 'Available for', value: 'Full-time · Contract · Remote' },
          { label: 'Response', value: '<24h, weekdays' },
        ].map(item => (
          <div key={item.label}>
            <div className="font-heading tracking-heading text-muted mb-1.5 text-[11px] font-semibold">
              {item.label}
            </div>
            <div className="text-ink-soft">{item.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
