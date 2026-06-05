import { Archive } from '@/components/editorial/Archive';
import { Beliefs } from '@/components/editorial/Beliefs';
import { Contact } from '@/components/editorial/Contact';
import { Hero } from '@/components/editorial/Hero';
import { Marquee } from '@/components/editorial/Marquee';
import { Metrics } from '@/components/editorial/Metrics';
import { Toolkit } from '@/components/editorial/Toolkit';
import { Work } from '@/components/editorial/Work';
import { Writing } from '@/components/editorial/Writing';

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <Marquee />
      <Work />
      <Archive />
      <Beliefs />
      <Toolkit />
      <Writing />
      <Contact />
    </>
  );
}
