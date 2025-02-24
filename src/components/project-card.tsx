'use client';
import Image from 'next/image';
import { ProjectInfo } from '@/lib/types';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

type ProjectProps = ProjectInfo;

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  color,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-8 last:mb-0"
    >
      <section className="bg-white max-w-[42rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-4 sm:pl-8 sm:group-even:pl-2 sm:pr-2 sm:group-even:pr-8 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-auto items-center justify-center text-center sm:items-start sm:justify-start sm:text-left">
          <Link
            href={link}
            className={`text-2xl font-semibold transition hover:text-${color}`}
            style={{ '--hover-color': color } as React.CSSProperties}
          >
            <span className="hover:text-[var(--hover-color)] hover:underline">
              {title}
            </span>
          </Link>
          <p className="mt-2 px-6 sm:px-0 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap pt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 rounded-full text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          width={400}
          height={100}
          className="relative sm:absolute block sm:top-8 mx-auto sm:mx-0 sm:-right-24 rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] sm:group-even:-left-24 min-h-[220px] sm:min-h-[280px] object-cover object-left-top h-[220px] sm:h-[294px]"
        />
      </section>
    </motion.div>
  );
}
