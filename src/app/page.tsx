import { Container } from '../components/Container';
import { PageTitle } from '../components/PageTitle';
import { Resume } from '../components/Resume';
import { SocialLink } from '../components/SocialLink';
import { NotePreview } from '../components/notes/NotePreview';
import { About, Name, SocialMedia } from '../data/lifeApi';
import { Note } from '../lib/notesApi';

type Props = {
  latestNotes?: Note[];
};

export default function Home({ latestNotes = [] }: Props) {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <PageTitle>{Name}</PageTitle>
          <p className="mt-6 max-w-2xl text-base text-balance">{About}</p>
          <div className="mt-6 flex gap-6">
            {SocialMedia.map(socialProfile => (
              <SocialLink
                key={socialProfile.name}
                aria-label={`Follow on ${socialProfile.name}`}
                href={socialProfile.link}
                icon={socialProfile.icon}
              />
            ))}
          </div>
        </div>
      </Container>
      <Container className="mt-12">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {latestNotes.map(blogPost => (
              <NotePreview key={blogPost.slug} note={blogPost} dense />
            ))}
          </div>
          <div className="space-y-10 lg:ml-auto lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}
