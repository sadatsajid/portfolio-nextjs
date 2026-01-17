import React from 'react';

import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from '../../lib/animation';
import { formatDate } from '../../lib/date';
import { Note } from '../../lib/notesApi';
import { Card } from '../Card';
import clsx from 'clsx';
import { motion } from 'motion/react';

const StaticBadge = ({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) => (
  <span
    className={clsx(
      className,
      'bg-primary inline-flex items-center rounded-md px-2 py-0 text-xs font-medium text-white'
    )}
  >
    {children}
  </span>
);

interface Props {
  note: Note;
  dense?: boolean;
}

export const NotePreview = ({ note, dense }: Props) => {
  return (
    <motion.div
      initial={ANIMATION_FROM_PROPS}
      whileInView={ANIMATION_TO_PROPS}
      viewport={{ once: true }}
    >
      <article className="md:grid md:grid-cols-4 md:items-baseline">
        <Card className="md:col-span-3">
          <Card.Title href={`/notes/${note.slug}`}>{note.title}</Card.Title>
          <Card.Eyebrow
            as="time"
            dateTime={note.publishedAt}
            className={clsx(!dense && 'md:hidden')}
            decorate
          >
            {formatDate(note.publishedAt)}
            {note.inProgress && (
              <StaticBadge className="ml-4">Work in progress</StaticBadge>
            )}
          </Card.Eyebrow>
          <Card.Description>{note.description}</Card.Description>
          <Card.Cta>Read note</Card.Cta>
        </Card>
        {!dense && (
          <Card.Eyebrow
            as="time"
            dateTime={note.publishedAt}
            className="mt-1 hidden md:block"
          >
            {formatDate(note.publishedAt)}
            {note.inProgress && (
              <StaticBadge className="mt-2">Work in progress</StaticBadge>
            )}
          </Card.Eyebrow>
        )}
      </article>
    </motion.div>
  );
};
