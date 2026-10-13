import { CONTACT } from '@/data/portfolio';

const LINKS = [
  { label: 'LinkedIn', href: CONTACT.linkedin, external: true },
  { label: 'GitHub', href: CONTACT.github, external: true },
  { label: 'RSS', href: '/rss.xml', external: false },
] as const;

export function EditorialFooter() {
  return (
    <footer className="border-rule border-t">
      <div className="page-frame text-muted flex flex-col gap-4 py-8 text-[13px] sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Asif Sadat <span aria-hidden>·</span>{' '}
          Made in Dhaka
        </p>
        <nav aria-label="Footer">
          <ul className="-mx-2 flex flex-wrap items-center">
            {LINKS.map(l => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.external ? '_blank' : undefined}
                  rel={l.external ? 'noopener noreferrer' : undefined}
                  className="hover:text-accent inline-flex min-h-11 items-center px-2 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#top"
                className="text-ink-soft hover:text-accent inline-flex min-h-11 items-center gap-1 px-2 transition-colors"
              >
                Back to top <span aria-hidden>↑</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
