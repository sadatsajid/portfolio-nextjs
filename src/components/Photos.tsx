'use client';
import { useState } from 'react';

import Image, { StaticImageData } from 'next/image';

import { travelImages } from '../images/travel';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'motion/react';

const possibleRotations = [1.3, -1.3, 1.3, -1.3, 1.3, -1.3];

const Photo = ({
  img,
  title,
  alt,
  idx,
}: {
  img: StaticImageData;
  title: string;
  alt: string;
  idx: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      key={img.src}
      initial={{
        scale: 1,
        rotate: possibleRotations[idx % possibleRotations.length],
        opacity: 0,
      }}
      whileHover={{ scale: 1.1, rotate: 0, transition: { duration: 0.2 } }}
      whileInView={{ opacity: 1, transition: { delay: idx / 100 } }}
      viewport={{ once: true }}
      onHoverStart={() => setIsVisible(true)}
      onHoverEnd={() => setIsVisible(false)}
      className={clsx(
        'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800'
      )}
    >
      <Image
        src={img}
        alt={alt}
        sizes="(min-width: 640px) 18rem, 11rem"
        className="absolute inset-0 h-full w-full object-cover"
        placeholder="blur"
      />
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex w-full items-end bg-gradient-to-t from-black/75 via-black/0"
          >
            <h3 className="px-3 py-2 font-mono text-xs font-bold">{title}</h3>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const Photos = () => {
  // Only render if travelImages has content to avoid errors
  if (travelImages.length === 0) {
    return null; // Don't render anything if there are no images
  }
  
  return (
    <div className="my-8">
      <div className="hide-scrollbar -my-4 flex gap-8 overflow-y-auto px-8 py-4">
        {travelImages.map((travelImage: typeof travelImages[number], index: number) => (
          <Photo
            key={travelImage.img.src}
            img={travelImage.img}
            title={travelImage.title}
            alt={travelImage.alt}
            idx={index}
          />
        ))}
      </div>
    </div>
  );
};
