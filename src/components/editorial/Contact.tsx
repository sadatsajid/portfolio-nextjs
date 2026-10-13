import type { ReactNode } from 'react';

import { ArrowDownIcon } from '@/components/icons/ArrowDownIcon';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { CONTACT } from '@/data/portfolio';

import { CopyEmailButton } from './CopyEmailButton';
import { SectionHeading } from './SectionHeading';

const CHIP_CLASS =
  'inline-flex min-h-11 min-w-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-rule-strong px-3 font-heading text-[13px] font-semibold tracking-heading text-ink-soft transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent sm:px-4 sm:text-[14px]';

const CHIP_ICON_CLASS = 'h-4 w-4 shrink-0';

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
      aria-labelledby="contact-title"
      className="page-frame scroll-mt-24 py-28"
    >
      <SectionHeading
        id="contact-title"
        index="07"
        label="Contact"
        title={
          <span
            className="tracking-display block"
            style={{ fontSize: 'clamp(48px, 7.5vw, 108px)' }}
          >
            Hiring? Building?
            <br />
            <span className="text-accent">Let&apos;s talk.</span>
          </span>
        }
        className="mb-0! lg:mb-0!"
      />

      <p
        data-reveal
        className="text-ink-soft mt-8 max-w-[600px] font-serif text-[clamp(17px,1.6vw,22px)] leading-[1.45]"
      >
        I read every email. If you&apos;re looking for a senior full-stack
        engineer (full-time or contract), start here.
      </p>

      <div
        data-reveal
        className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={`mailto:${CONTACT.email}`}
            className="group bg-accent text-paper font-heading tracking-heading inline-flex min-h-14 min-w-0 items-center justify-center gap-3 rounded-full px-7 text-[15px] font-semibold transition-[box-shadow,transform] duration-200 hover:shadow-[0_10px_30px_-10px_var(--accent)] active:scale-[0.98] sm:text-[16px]"
          >
            <span className="truncate">{CONTACT.email}</span>
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
          <CopyEmailButton
            email={CONTACT.email}
            className="text-ink-soft hover:text-accent font-heading tracking-heading inline-flex min-h-11 items-center justify-center gap-2 px-3 text-[14px] font-semibold transition-colors"
          />
        </div>

        <span aria-hidden className="bg-rule hidden h-8 w-px lg:block" />

        <div className="grid grid-cols-3 gap-2 sm:flex sm:gap-2.5">
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

      <dl
        data-reveal
        className="border-rule mt-24 grid grid-cols-2 gap-6 border-t pt-10 text-[13px] md:grid-cols-4"
      >
        {[
          { label: 'Based in', value: CONTACT.location },
          { label: 'Currently', value: `${CONTACT.role} @ Selise` },
          { label: 'Available for', value: 'Full-time · Contract · Remote' },
          { label: 'Response', value: '<24h, weekdays' },
        ].map(item => (
          <div key={item.label}>
            <dt className="eyebrow text-muted mb-1.5 text-[11px]">
              {item.label}
            </dt>
            <dd className="text-ink-soft">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
